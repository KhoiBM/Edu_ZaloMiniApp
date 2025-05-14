<script setup lang="ts">
import { ref, h } from 'vue';
// const { ref } = Vue;

import { useRouter } from 'vue-router';
interface MenuItem {
    id: number;
    name: string;
    title: string;
    icon: string;
    path: string
}
const menuItems = ref<MenuItem[]>([
    {
        id: 1,
        name: 'register',
        title: 'Đăng ký xét tuyển',
        icon: 'records-o',
        path: '/registerForAdmissionView'
    },
    {
        id: 2,
        name: 'createRequest',
        title: 'Tạo đơn cần duyệt',
        icon: 'edit',
        path: '/createAnRequestToBeApprovedView'
    },
    {
        id: 3,
        name: 'trainingMajor',
        title: 'Ngành đào tạo',
        icon: 'apps-o',
        path: '/trainingMajorView'
    },
    {
        id: 4,
        name: 'studentOpinion',
        title: 'Ý kiến sinh viên',
        icon: 'comment-o',
        path: '/studentOpinionView'
    },
    {
        id: 5,
        name: 'timetable',
        title: 'Thời khóa biểu',
        icon: 'todo-list-o',
        path: '/timetableView'
    },
    {
        id: 6,
        name: 'tuition',
        title: 'Học phí',
        icon: 'description-o',
        path: '/tuitionView'
    }
    ,
    {
        id: 7,
        name: 'examinationTimetable',
        title: 'Lịch thi',
        icon: 'bullhorn-o',
        path: '/examinationTimetableView'
    },
    {
        id: 8,
        name: 'notification',
        title: 'Thông báo',
        icon: 'notes-o',
        path: '/notificationView'
    }
]);

const router = useRouter();
const handleItemClick = (item: MenuItem) => {
    router.push(item.path);
}


</script>

<template>
    <div class="services_container">
        <div class="services_content">

            <div class="services_grid_content">

                <van-grid :column-num="2" :gutter="16" square>
                    <van-grid-item v-for="(item, index) in menuItems" :key="index" @click="handleItemClick(item)">
                        <div class="grid-item_wrapper">
                            <div class="menu-card">
                                <div class="icon-container">
                                    <div v-if="item.name === 'notification'">
                                        <van-badge dot>
                                            <van-icon :name="item.icon" size="3rem" class="menu-icon"
                                                color="var(--primary-color)" />
                                        </van-badge>
                                    </div>
                                    <div v-else>
                                        <van-icon :name="item.icon" size="3rem" class="menu-icon"
                                            color="var(--primary-color)" />
                                    </div>
                                </div>
                                <div class="menu-title">{{ item.title }}</div>
                            </div>
                        </div>
                    </van-grid-item>
                </van-grid>
            </div>


        </div>
    </div>

</template>


<style lang="scss" scoped>
.services_container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 99vw;
}

.services_content {
    flex: 1;
    width: 90vw;
}

.services_grid_content {
    // border: 1px solid blue;
}

.menu-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem
}

.icon_container {
    flex: 1;
}

.menu-title {
    flex: 1;

}

:deep(.van-grid-item__content) {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1),
        0 1px 8px rgba(0, 0, 0, 0.07);

}

:deep(.van-grid-item__content--surround::after) {
    border-radius: 8px;
    overflow: hidden;
}
</style>
