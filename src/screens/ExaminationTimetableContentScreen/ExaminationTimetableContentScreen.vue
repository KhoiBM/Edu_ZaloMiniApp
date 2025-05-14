<template>
    <div class="examination-timetable-content_container">
        <div class="examination-timetable-content_container__content">
            <div class="examination-timetable-wrapper">

                <div class="examination-timetable">
                    <div class="student-info">
                        <p class="student-name">{{ props.studentName }}</p>
                        <p class="student-code">MSSV: {{ props.studentCode }}</p>
                    </div>

                    <!-- van-list for lazy loading -->
                    <van-list v-model:loading="listState.loading" v-model:error="listState.error"
                        :finished="listState.finished" finished-text="" error-text="Tải lịch thi thất bại"
                        @load="onLoad">
                        <!-- Group examinations by date -->
                        <div v-for="dateGroup in examsByDate" :key="dateGroup.date" class="date-group">
                            <!-- Date header -->
                            <van-cell :title="dateGroup.formattedDate" size="large" class="date-header">
                                <template #right-icon>
                                    <van-tag type="primary" size="large" plain>
                                        {{ dateGroup.examinations.length }}
                                        <van-icon name="graphic" />
                                    </van-tag>
                                </template>
                            </van-cell>

                            <!-- Examinations for this date -->
                            <div class="examination-cell-group">
                                <van-cell-group inset v-for="exam in dateGroup.examinations" :key="exam.id">
                                    <div class="exam-item">
                                        <!-- Course and exam type -->
                                        <van-cell class="exam-cell-course">
                                            <template #title>
                                                <div class="exam-course">
                                                    <span>{{ exam.course.code }} - {{ exam.course.name }}</span>
                                                </div>
                                            </template>
                                            <template #value>
                                                <div class="exam-course-tag">
                                                    <van-tag :type="getExamTagType(exam.type)" size="large" plain
                                                        round>{{
                                                            getExamTagTypeName(exam.type) }} </van-tag>
                                                </div>

                                            </template>
                                        </van-cell>

                                        <!-- Time and venue -->
                                        <van-cell>
                                            <template #title>
                                                <div class="exam-time">
                                                    <van-icon name="clock-o" />
                                                    <span>{{ formatTime(exam.timeSlot.startTime) }} - {{
                                                        formatTime(exam.timeSlot.endTime) }}</span>
                                                </div>
                                            </template>
                                            <template #value>
                                                <div class="exam-venue">
                                                    <van-icon name="location-o" />
                                                    <span>{{ exam.venue.building }}-{{ exam.venue.room }}</span>
                                                </div>
                                            </template>
                                        </van-cell>

                                        <!-- Instructions (if any) -->
                                        <van-cell v-if="exam.instructions">
                                            <template #title>
                                                <div class="exam-instructions">
                                                    <van-icon name="info-o" />
                                                    <span>{{ exam.instructions }}</span>
                                                </div>
                                            </template>
                                        </van-cell>
                                    </div>
                                </van-cell-group>
                            </div>

                        </div>
                    </van-list>

                    <!-- Loading state -->
                    <div v-if="isLoading" class="loading-state">
                        <van-loading type="spinner" />
                        <p>Đang tải lịch thi</p>
                    </div>

                    <!-- Empty state -->
                    <div v-if="!isLoading && examsByDate.length === 0" class="empty-state">
                        <van-empty description="Chưa có lịch thi" />
                    </div>

                </div>

            </div>
        </div>
    </div>

</template>






<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {
    ExaminationsByDate,
    ListState
} from '@/typ';
import { useExaminationTimetableService } from '@/services';

// Define props using defineProps
const props = defineProps({
    studentId: {
        type: String,
        default: '1' // Default student ID
    },
    studentName: {
        type: String,
        default: 'Bui Minh Khoi' // Default studentName
    },
    studentCode: {
        type: String,
        default: 'SE123457' // Default studentCode
    }
});

// Create reactive state
const examsByDate = ref<ExaminationsByDate[]>([]);
const studentName = ref('');
const listState = ref<ListState>({
    loading: false,
    finished: false,
    error: false
});

// Use the examination service composable
const { isLoading, fetchExamTimetable, groupExaminationsByDate } = useExaminationTimetableService();

// Fetch examination data on component mount
onMounted(async () => {
    await fetchExamTimetableData();
});

/**
 * Fetch examination timetable data from the service
 */
async function fetchExamTimetableData() {
    try {
        // Fetch the data
        const data = await fetchExamTimetable(props.studentId);
        studentName.value = data.studentName;

        // Group examinations by date
        examsByDate.value = groupExaminationsByDate(data.examinations);

        // Update list state
        listState.value.finished = true;
    } catch (error) {
        console.error('Failed to fetch examination timetable data', error);
        listState.value.error = true;
    } finally {
        listState.value.loading = false;
    }
}

/**
 * Handle the load event from van-list (simplified)
 * In a real app, this would load more data but we're loading all at once here
 */
function onLoad() {
    // We'll load all data at once for simplicity
    listState.value.loading = false;
    listState.value.finished = true;
}

/**
 * Format time string for display (convert from 24h to 12h format)
 */
function formatTime(time: string): string {
    const [hours, minutes] = time.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;

    return `${displayHours}:${String(minutes).padStart(2, '0')} ${period}`;
}

/**
 * Get the appropriate tag type based on the exam type
 */
function getExamTagType(examType: string): string {
    if (examType.includes('Final')) return 'danger';
    if (examType.includes('Midterm')) return 'warning';
    if (examType.includes('Quiz')) return 'primary';
    if (examType.includes('Practical')) return 'success';
    return 'default';
}
function getExamTagTypeName(examType: string): string {
    if (examType.includes('Final')) return 'Cuối kỳ';
    if (examType.includes('Midterm')) return 'Giữa kỳ';
    if (examType.includes('Quiz')) return 'Trắc nghiệm';
    if (examType.includes('Practical')) return 'Thực hành';
    return '';
}
</script>



<style lang="scss" scoped>
.examination-timetable-content_container {
    flex: 1;
    width: 96vw;
    display: flex;
    align-items: center;
    justify-content: center;

    &__content {
        width: 95vw;
        background-color: #f7f8fa;
        border-radius: 0.5rem;

    }
}

.examination-timetables-wrapper {
    width: 100%;
    // height: 100vh;
    // overflow: auto;
    // scroll-behavior: smooth;
    // scrollbar-width: thin;
    // scrollbar-color: #cccccc #f9f9f9;
}

.examination-timetable {
    width: 100%;
    padding: 1rem;
}

.page-title {
    text-align: center;
    margin-bottom: 20px;
    color: #323233;
    font-size: 20px;
}

.student-info {
    margin-bottom: 20px;
    text-align: center;
}

.student-name {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
}

.student-code {
    font-size: 14px;
    color: #646566;
    margin: 4px 0 0 0;
}

.date-group {
    margin-bottom: 16px;
    // border: 1px solid red;
}

.date-header {
    background-color: #f2f3f5;
    border-radius: 0.5rem;
}

.date-header .van-cell__title {
    font-weight: bold;
}

.exam-item {
    margin-bottom: 4px;
}


.exam-cell-course {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    // border: 1px solid red;
    gap: 1rem;
}

.exam-course {
    font-weight: bold;
    // border: 1px solid red;
    // width: 100%;
}

.exam-course-tag {
    // width: 4rem;
    // border: 1px solid red;
}






.exam-time,
.exam-venue,
.exam-instructions {
    display: flex;
    align-items: center;
}

.exam-time .van-icon,
.exam-venue .van-icon,
.exam-instructions .van-icon {
    margin-right: 6px;
}

.loading-state,
.empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
}

.loading-state p {
    margin-top: 12px;
    color: #969799;
}

.examination-cell-group {
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
