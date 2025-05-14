<script setup lang="ts">
import { ref, computed, onMounted, watchEffect } from 'vue'
import { ITuition, ITerm, ITuitionPerCourse, PaymentStatus, PaymentStatusKey } from "@/types"
import { formattedDate } from '@/utils';
import { useRouter } from 'vue-router';

const router = useRouter()


// Props definition
// const props = defineProps({
//     studentId: {
//         type: String,
//         required: true
//     },
//     studentCode: {
//         type: String,
//         required: true
//     }
// });

// Reactive state
const terms = ref<ITerm[]>([]);
const selectedTermId = ref<string>('');
const tuitionInfo = ref<ITuition | null>(null);
const isLoading = ref<boolean>(false);
const showPicker = ref<boolean>(false);
const pickerValue = ref<string[]>([]);
// const fieldValue = ref('');

// Computed properties
const selectedTerm = computed(() => {
    return terms.value.find(term => term.id === Number(selectedTermId.value));
});

const termColumns = computed(() => {
    return terms.value.map(term => {
        return {
            text: term.name + (term.isCurrent ? ' ( Hiện tại )' : ''),
            value: term.id
        };
    });
});

const currentTermIndex = computed(() => {
    return terms.value.findIndex(term => term.isCurrent);
});

// Lifecycle hooks
onMounted(async () => {
    // Fetch the list of available terms
    await fetchTerms();

    // Set default selected term to current term
    const currentTerm = terms.value.find(term => term.isCurrent);
    if (currentTerm) {
        selectedTermId.value = String(currentTerm.id);
        pickerValue.value = [String(currentTerm.id)]
        await fetchTuitionInfo(currentTerm.id);
    }
});

// Watch for changes in selected term
watchEffect(async () => {
    if (selectedTermId.value) {
        await fetchTuitionInfo(Number(selectedTermId.value));
    }
});

// Methods
async function fetchTerms() {
    isLoading.value = true;

    try {
        // In a real implementation, this would be an API call
        // For demonstration, we'll use mock data
        await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network delay

        terms.value = [
            {
                id: 1,
                name: "Kỳ mùa hè 2025",
                startDate: new Date('2025-05-01'),
                endDate: new Date('2025-09-01'),
                isCurrent: true
            },
            {
                id: 2,
                name: 'Kỳ mùa đông 2024',
                startDate: new Date('2024-09-01'),
                endDate: new Date('2024-12-01'),
                isCurrent: false
            },
            {
                id: 3,
                name: 'Kỳ mùa xuân 2024',
                startDate: new Date('2024-01-01'),
                endDate: new Date('2024-04-01'),
                isCurrent: false
            }
        ];
    } catch (error) {
        console.error('Failed to fetch terms:', error);
    } finally {
        isLoading.value = false;
    }
}

async function fetchTuitionInfo(termId: number) {
    isLoading.value = true;

    try {
        // In a real implementation, this would be an API call
        // For demonstration, we'll use mock data
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

        // Different mock data based on the selected term
        if (termId === 1) {
            tuitionInfo.value = {
                id: 1,
                tuitionKey: "ISummer2025T0001",
                tuitionCode: "ISESummer2025T0001",
                title: "học phí kỳ mùa hè 2025",
                studentId: 1,
                term: {
                    id: 1,
                    name: "Kỳ mùa hè 2025",
                    startDate: new Date('2025-05-01'),
                    endDate: new Date('2025-09-01'),
                    isCurrent: true
                },
                department: "CNTT",
                major: "Kỹ thuật phần mềm",
                description: 'Vui lòng đóng đúng hạn học phí cho kỳ mùa hè',
                amount: 20000000,
                currency: "VND",
                isView: false,
                calculationDate: new Date('2025-05-01'),
                hasScholarship: false,
                paymentStatus: "Overdue" as PaymentStatus,
                paymentDueDate: new Date('2025-05-10'),
                byCourses: [{
                    id: 1,
                    name: "Lập trình Web",
                    code: "CS201",
                    credits: 3,
                    amount: 5000000,
                    currency: 'VND',
                },
                {
                    id: 2,
                    name: "Lập trình AI",
                    code: 'CS202',
                    credits: 2,
                    amount: 5000000,
                    currency: "VND",
                }, {
                    id: 3,
                    name: "Lập trình Python",
                    code: "CS201",
                    credits: 3,
                    amount: 5000000,
                    currency: 'VND',
                },
                {
                    id: 4,
                    name: "Lập trình Android",
                    code: 'CS202',
                    credits: 2,
                    amount: 5000000,
                    currency: "VND",
                }

                ],
                createdAt: new Date(),
                updatedAt: new Date(),

            };
        } else if (termId === 2) {
            tuitionInfo.value = {
                id: 2,
                tuitionKey: "IWinter2024T0001",
                tuitionCode: "ISEWinter2024T0001",
                title: "học phí kỳ mùa đông 2024",
                studentId: 1,
                term: {
                    id: 2,
                    name: 'Kỳ mùa đông 2024',
                    startDate: new Date('2024-09-01'),
                    endDate: new Date('2024-12-01'),
                    isCurrent: false
                },
                department: "CNTT",
                major: "Kỹ thuật phần mềm",
                description: 'Vui lòng đóng đúng hạn học phí cho kỳ mùa đông',
                amount: 18000000,
                currency: "VND",
                isView: true,
                calculationDate: new Date('2024-09-01'),
                hasScholarship: false,
                paymentStatus: "PaidInFull" as PaymentStatus,
                paymentDueDate: new Date('2024-09-10'),
                byCourses: [{
                    id: 5,
                    name: "Cấu trúc dữ liệu",
                    code: "CS301",
                    credits: 3,
                    amount: 4500000,
                    currency: 'VND',
                },
                {
                    id: 6,
                    name: "Mạng máy tính",
                    code: 'CS302',
                    credits: 3,
                    amount: 4500000,
                    currency: "VND",
                },
                {
                    id: 7,
                    name: "Cơ sở dữ liệu",
                    code: "CS303",
                    credits: 3,
                    amount: 4500000,
                    currency: 'VND',
                },
                {
                    id: 8,
                    name: "An toàn thông tin",
                    code: 'CS304',
                    credits: 3,
                    amount: 4500000,
                    currency: "VND",
                }],
                createdAt: new Date(),
                updatedAt: new Date(),
            };
        } else {
            tuitionInfo.value = {
                id: 3,
                tuitionKey: "ISpring2024T0001",
                tuitionCode: "ISESpring2024T0001",
                title: "học phí kỳ mùa xuân 2024",
                studentId: 1,
                term: {
                    id: 3,
                    name: 'Kỳ mùa xuân 2024',
                    startDate: new Date('2024-01-01'),
                    endDate: new Date('2024-04-01'),
                    isCurrent: false
                },
                department: "CNTT",
                major: "Kỹ thuật phần mềm",
                description: 'Vui lòng đóng đúng hạn học phí cho kỳ mùa xuân',
                amount: 16000000,
                currency: "VND",
                isView: true,
                calculationDate: new Date('2024-01-01'),
                hasScholarship: true,
                paymentStatus: "PartiallyPaid" as PaymentStatus,
                paymentDueDate: new Date('2024-01-10'),
                byCourses: [{
                    id: 9,
                    name: "Kiến trúc máy tính",
                    code: "CS401",
                    credits: 3,
                    amount: 4000000,
                    currency: 'VND',
                },
                {
                    id: 10,
                    name: "Hệ điều hành",
                    code: 'CS402',
                    credits: 3,
                    amount: 4000000,
                    currency: "VND",
                },
                {
                    id: 11,
                    name: "Công nghệ phần mềm",
                    code: "CS403",
                    credits: 3,
                    amount: 4000000,
                    currency: 'VND',
                },
                {
                    id: 12,
                    name: "Trí tuệ nhân tạo",
                    code: 'CS404',
                    credits: 3,
                    amount: 4000000,
                    currency: "VND",
                }],
                createdAt: new Date(),
                updatedAt: new Date(),
            };
        }
    } catch (error) {
        console.error(`Failed to fetch tuition info for term ${termId}:`, error);
        tuitionInfo.value = null;
    } finally {
        isLoading.value = false;
    }
}
const onTermSelected = ({ selectedValues, selectedOptions }: { selectedValues: string[], selectedOptions: Array<{ text: string, value: number }> }) => {
    showPicker.value = false;
    pickerValue.value = selectedValues;
    // fieldValue.value = selectedOptions[0].text;
    selectedTermId.value = selectedValues[0]
    console.log("selectedValues[0] ", selectedValues[0])
    console.log("fieldValue.value", selectedOptions[0].text)
};


// Utility functions
function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        maximumFractionDigits: 0
    }).format(amount);
}

function formatDate(dateString?: string): string {
    if (!dateString) return '';

    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function formatDateRange(startDate: string, endDate: string): string {
    const start = formatDate(startDate);
    const end = formatDate(endDate);
    return `${start} - ${end}`;
}

const formatterNumberByDots = new Intl.NumberFormat('vi-VN', {
    style: 'decimal',
    useGrouping: true,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
});

const getLocalizedPaymentStatus = (paymentStatus: string) => {
    return PaymentStatus[paymentStatus as PaymentStatusKey] || paymentStatus;
};

const getTagTypeByPaymentStatus = (paymentStatus: string) => {

    switch (paymentStatus as PaymentStatusKey) {
        case "PaidInFull": return "success";
        case "Overdue": return "danger"
        case "NotPaid": return "warning";
        case "PartiallyPaid": return "primary"
        default: return "primary"
    }
};

const navigateToTuitionDetailsView = (id: number) => {
    router.push(`/tuitionDetailsView/:${id}`)
}


</script>

<template>
    <div class="tuition-content_container">
        <div class="tuition-content_container__content">
            <div class="tuition-content_wrapper">

                <div class="term-picker-container">

                    <div class='term-filters-box'>

                        <!-- Term selection trigger -->
                        <van-cell :title="selectedTerm ? selectedTerm.name : 'Chọn học kỳ'" is-link
                            @click="showPicker = true" class="term-selector">
                            <template #value>
                                <span v-if="selectedTerm && selectedTerm.isCurrent" class="current-term-badge">
                                    Hiện tại
                                </span>
                            </template>
                        </van-cell>

                        <!-- Term picker popup -->
                        <van-popup v-model:show="showPicker" position="bottom" round destroy-on-close>
                            <van-picker :model-value="pickerValue" title="Chọn học kỳ" :columns="termColumns"
                                @confirm="onTermSelected" @cancel="showPicker = false" :default-index="currentTermIndex"
                                class="term-picker" />
                        </van-popup>

                    </div>

                    <div>
                        <!-- Display loading state while fetching tuition data -->

                        <div v-if="isLoading" class="loading-container">
                            <van-loading type="spinner" color="#1989fa" />
                            <p>Đang tải thông tin học phí...</p>
                        </div>

                        <!-- Display tuition information -->
                        <div v-else-if="selectedTerm && tuitionInfo" class="tuition-info">
                            <!-- Term header -->
                            <div class="term-header">
                                <h3>{{ selectedTerm.name }}</h3>
                                <p class="term-dates">{{ formatDateRange(formattedDate(selectedTerm.startDate),
                                    formattedDate(selectedTerm.endDate))
                                    }}</p>
                            </div>

                            <!-- Tuition breakdown -->
                            <div class='tuition-info-card' @click="navigateToTuitionDetailsView(tuitionInfo.id)">
                                <van-cell-group inset>
                                    <van-cell title="Đóng trước ngày" :value="formattedDate(tuitionInfo.paymentDueDate)"
                                        label="" />
                                    <van-cell title="Trạng thái thanh toán" label="" class="payment-status-cell">
                                        <template #value>
                                            <van-tag :type="getTagTypeByPaymentStatus(tuitionInfo.paymentStatus)" round
                                                size="large" plain class="payment-status-tag">
                                                {{ getLocalizedPaymentStatus(tuitionInfo.paymentStatus) }}
                                            </van-tag>
                                        </template>
                                    </van-cell>
                                    <van-cell title="Học phí"
                                        :value="`${formatterNumberByDots.format(tuitionInfo.amount)} ${tuitionInfo.currency}`"
                                        label="" />
                                </van-cell-group>
                            </div>



                        </div>

                        <!-- Empty state if no tuition info available -->
                        <div v-else-if="!isLoading" class="empty-state">
                            <van-empty description="Không có thông tin học phí" />
                        </div>

                    </div>


                </div>

            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/mixins' as m;
@use '@/assets/scss/variables' as v;

.tuition-content_container {
    flex: 1;
    width: 90vw;
    @include m.flex-center;
    // border: 1px solid blue

    &__content {
        background-color: v.$background-color;
        width: 100%;
        border-radius: 0.5rem;
        padding: 1rem;
        // border: 1px solid red;


    }

}

.payment-status-cell {
    @include m.flex-center;
}

.payment-status-tag {
    max-width: 8rem;
    border-radius: 0.25rem;
    text-align: justify;
    word-break: break-word;
    white-space: normal;
    overflow-wrap: break-word;
    line-height: 1;

}


.term-picker-container {
    // border: 1px solid blue;
}

.term-selector {
    margin-bottom: 16px;
    border-radius: 8px;
    overflow: hidden;
}

.current-term-badge {
    border: 1px solid v.$primary-color;
    color: v.$primary-color;
    font-size: 12px;
    padding: 2px 8px;
    border-radius: 0.25rem;
}

.term-header {
    text-align: center;
    margin-bottom: 20px;
}

.term-header h3 {
    margin: 0;
    font-size: 20px;
    font-weight: bold;
    color: #323233;
}

.term-dates {
    margin: 8px 0 0;
    font-size: 14px;
    color: #969799;
}

.loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
}

.loading-container p {
    margin-top: 12px;
    color: #969799;
}

.tuition-info {
    margin-top: 16px;
}

.scholarship-amount {
    color: #1989fa;
    font-weight: bold;
}

.paid-status {
    color: #07c160;
    font-weight: bold;
}

.unpaid-status {
    color: #ee0a24;
    font-weight: bold;
}

.payment-action {
    margin-top: 24px;
}

.empty-state {
    padding: 40px 0;
}
</style>
