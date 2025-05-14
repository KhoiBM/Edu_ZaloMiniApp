<script setup lang="ts">
import { reactive } from 'vue';
import { getTimeOfDay } from '@/utils/getTimeOfDay';
import { getAssetUrl } from '@/utils/getAssetUrl';
import { getHours } from 'date-fns';
import avatar from "@/assets/images/avatar.jpg"


enum TimeOfDayByVN {
    morning = "buổi sáng",
    afternoon = "buổi chiều",
    evening = "buổi tối",
    night = "Khuya rồi, Ngủ ngon",
}

type TimeOfDayByVNKey = keyof typeof TimeOfDayByVN;
// console.log("getTimeOfDay", getTimeOfDay());

interface Course {
    id: string;
    key: string;
    name: string;
    code: string;
    status: string;
    instructorName: string;
    semester: Semester
    // Date tracking
    createdAt: Date;
    updatedAt: Date;
    lastReviewedAt?: Date;
}

interface Semester {
    id: string;
    name: string;
    startDate: Date;
    endDate: Date;
}
interface Avatar {
    name: string;
    url: string;
    type: string;
}
const userProfile = reactive({
    fullname: 'Bùi Minh Khôi',
    studentCode: 'UITSE123456',
    avatar: {
        name: 'avatar',
        url: avatar,
        type: 'image/jpg',
    } as Avatar,
    department: 'Công nghệ thông tin',
    major: 'Khoa học máy tính',
    class: 'CTK42',
    learningStatus: 'Active',
    currentOccupation: 'Coder',
    coursesByCurrentSemester: [
        {
            id: '1',
            key: "UITSESummer202501245",
            name: 'Lập trình web',
            code: "CS201",
            status: 'Enrolled',
            instructorName: 'Ts.Nguyễn Văn B',
            semester: {
                id: '1',
                name: 'Học kỳ Xuân',
                startDate: new Date('2024-09-01'),
                endDate: new Date('2025-01-01'),
            } as Semester,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '2',
            key: "UITSESummer202501246",
            name: 'Lập trình di động',
            code: "CS202",
            status: 'Ongoing',
            instructorName: 'Gs.Nguyễn Văn C',
            semester: {
                id: '2',
                name: 'Học kỳ Đông',
                startDate: new Date('2024-01-01'),
                endDate: new Date('2024-05-01'),
            } as Semester,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '3',
            key: "UITSESummer202501247",
            name: 'Lập trình game',
            code: "CS203",
            status: 'Completed',
            instructorName: 'Cn.Nguyễn Văn D',
            semester: {
                id: '3',
                name: 'Học kỳ Hè',
                startDate: new Date('2024-05-01'),
                endDate: new Date('2024-09-01'),
            } as Semester,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '4',
            key: "UITSESummer202501248",
            name: 'Lập trình AI',
            code: "CS204",
            status: 'Enrolled',
            instructorName: 'Ths.Nguyễn Văn E',
            semester: {
                id: '4',
                name: 'Học kỳ Thu',
                startDate: new Date('2024-09-01'),
                endDate: new Date('2025-01-01'),
            } as Semester,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '5',
            key: "UITSESummer202501249",
            name: 'Lập trình hệ thống nhúng',
            code: "CS205",
            status: 'Ongoing',
            instructorName: 'Ts.Nguyễn Văn F',
            semester: {
                id: '5',
                name: 'Học kỳ Xuân',
                startDate: new Date('2024-09-01'),
                endDate: new Date('2025-01-01'),
            } as Semester,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '6',
            key: "UITSESummer202501250",
            name: 'Lập trình hệ điều hành',
            code: "CS206",
            status: 'Repeated',
            instructorName: 'Pgs.Nguyễn Văn G',
            semester: {
                id: '6',
                name: 'Học kỳ Đông',
                startDate: new Date('2024-01-01'),
                endDate: new Date('2024-05-01'),
            } as Semester,
            createdAt: new Date(),
            updatedAt: new Date(),
        },

    ]
})


const getStatusTagType = (status: string) => {
    switch (status) {
        case 'Active':
            return 'success';
        case 'OnLeave':
            return 'warning';
        case 'Graduated':
            return 'primary';
        default:
            return 'default';
    }
};

enum LearningStatus {
    Active = 'Đang học',
    OnLeave = 'Bảo lưu',
    Graduated = 'Đã tốt nghiệp',
}

type LearningStatusKey = keyof typeof LearningStatus;

const getLocalizedStatus = (status: string) => {
    return LearningStatus[status as LearningStatusKey] || status;
};



const getCourseStatusTagType = (status: string) => {
    switch (status) {
        case 'Enrolled':
            return 'primary';
        case 'Ongoing':
            return 'warning';
        case 'Completed':
            return 'success';
        default:
            return 'default';
    }
};


enum CourseStatus {
    Enrolled = 'Đã đăng ký',
    Ongoing = 'Đang học',
    Completed = 'Đã hoàn thành',
    Repeated = 'Đã học lại',

}
type CourseStatusKey = keyof typeof CourseStatus;

const getLocalizedCourseStatus = (status: string) => {
    return CourseStatus[status as CourseStatusKey] || status;
};


</script>

<template>
    <div class="user_profile_container ">
        <div class="user_profile_header">

            <van-cell class="header-cell">
                <template #title>
                    <div class="header-cell__title">
                        <div class="header-cell__title-greeting">
                            <h1>{{ `
                                < ${getTimeOfDay() as TimeOfDayByVNKey == 'night' ? TimeOfDayByVN[getTimeOfDay() as
                                    TimeOfDayByVNKey] : " Chào " + TimeOfDayByVN[getTimeOfDay() as TimeOfDayByVNKey]} />
                                `}}
                                <!-- <b style="font-style: normal;">{{ ` ${"😘"}` }}</b> -->
                            </h1>

                        </div>
                        <div class="header-cell__title-fullname">
                            <h2>
                                {{ `
                                [ ${userProfile.fullname} ]
                                `}}
                            </h2>
                        </div>

                    </div>

                </template>
                <template #right-icon>
                    <!-- <router-link to="/userProfileView"> -->
                    <div class="header-cell__avatar">
                        <van-image :src="userProfile.avatar.url" width="10vw" height="10vw" fit="cover" round />
                        <!-- <van-image :src="avatar" width="10vw" height="10vw" fit="cover" round /> -->
                    </div>
                    <!-- </router-link> -->
                </template>
            </van-cell>
        </div>

        <div class="user_profile_content">

            <van-cell-group inset>
                <van-cell title="Họ và Tên" :value="userProfile.fullname" />
                <van-cell title="MSSV" :value="userProfile.studentCode" />
                <van-cell title="Khoa" :value="userProfile.department" />
                <van-cell title="Ngành học" :value="userProfile.major" />
                <van-cell title="Lớp sinh hoạt" :value="userProfile.class" />
                <van-cell title="Tình trạng học tập">
                    <template #right-icon>
                        <van-tag :type="getStatusTagType(userProfile.learningStatus)" round size="large" plain
                            class="learning-status-tag">
                            {{ getLocalizedStatus(userProfile.learningStatus) }}
                        </van-tag>
                    </template>
                </van-cell>
                <van-cell title="CVHT" :value="userProfile.currentOccupation" />
            </van-cell-group>
            <van-divider>Các khoá học trong học kỳ này</van-divider>
            <van-empty v-if="userProfile.coursesByCurrentSemester.length === 0"
                description="Chưa tham gia khoá học nào" />
            <div v-else>
                <van-cell-group inset v-for="(course, index) in userProfile.coursesByCurrentSemester" :key="index">
                    <van-cell :title="`${course.code} - ${course.name}`"
                        :label="`${course.instructorName} - ${course.semester.name}`" class="cell_course_box">
                        <template #right-icon>
                            <van-tag :type="getCourseStatusTagType(course.status)" class="course-status-tag" plain round
                                size="large">
                                {{ getLocalizedCourseStatus(course.status) }}
                            </van-tag>

                        </template>
                    </van-cell>
                </van-cell-group>
            </div>


        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;

.user_profile_container {
    width: 98vw;
    // border: 1px solid yellow;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.user_profile_header {
    width: 90vw;
    flex: 1;
    padding: 1rem;
    // border: 1px solid red;
}

.user_profile_content {
    width: 97%;
    padding: 1rem 0;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1),
        0 1px 8px rgba(0, 0, 0, 0.07);
}


.header-cell {
    // border: 1px solid blue;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1),
        0 1px 8px rgba(0, 0, 0, 0.07);
}

.header-cell__title {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: flex-start;
    // border: 1px solid red;
    height: 100%;
    gap: 0.5rem;
}


.header-cell__title-greeting {
    flex: 1;
    font-size: 1.2rem;
    font-weight: 500;
    color: v.$secondary-color;
    font-style: italic;
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-cell__title-fullname {
    flex: 1;
    font-size: 1.2rem;
    font-weight: 500;
    color: v.$primary-color;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.header-cell__avatar {
    display: flex;
    justify-content: center;
    align-items: center;

}

.cell_course_box {
    border: 1px solid rgb(84, 174, 230);
    margin: 0.1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.learning-status-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.75rem;
    border-radius: 0.5rem;
}

.course-status-tag {
    min-width: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.5rem;
    border-radius: 0.5rem;

}
</style>
