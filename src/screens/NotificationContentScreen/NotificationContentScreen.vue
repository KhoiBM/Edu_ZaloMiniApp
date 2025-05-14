<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { showToast, showDialog } from 'vant';
import { INotificationV } from '@/types'
import type { SwipeCellInstance } from 'vant';
import { useRouter } from 'vue-router';

const router = useRouter()


// Reactive states
const notifications = ref<INotificationV[]>([]);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

const swipeCellRef = ref<SwipeCellInstance>();

// Initial page for pagination
const page = ref(1);

// Load initial data
onMounted(() => {
    loadInitialNotifications();
});

// Load initial notifications data
const loadInitialNotifications = () => {
    // Simulating initial data
    notifications.value = [
        {
            id: 1,
            key: "UITN12350",
            type: 'notification',
            sourceFrom: 'Phòng Khảo thí',
            title: 'Lịch thi giữa kỳ môn Trí tuệ nhân tạo',
            subMessage: 'Thời gian: 14h00 ngày 15/11/2023, Phòng 305A. Sinh viên mang theo thẻ sinh viên và bút.',
            isRead: false,
            timeframe: "3 giờ trước"
        },
        {
            id: 2,
            key: "UITN12351",
            type: 'action',
            sourceFrom: 'Phòng Công tác Sinh viên',
            title: 'Đăng ký tham gia cuộc thi UIT Hackathon 2023',
            subMessage: 'Hạn đăng ký: 20/11/2023. Giải thưởng lên đến 50 triệu đồng.',
            isRead: false,
            timeframe: "5 giờ trước"
        },
        {
            id: 3,
            key: "UITN12352",
            type: 'action',
            sourceFrom: 'Thư viện UIT',
            title: 'Mượn sách "Design Patterns" đã được duyệt',
            subMessage: 'Vui lòng đến quầy thư viện để nhận sách trong vòng 24h.',
            isRead: true,
            timeframe: "1 ngày trước"
        },
        {
            id: 4,
            key: "UITN12348",
            type: 'task',
            sourceFrom: 'Phòng Công tác sinh viên',
            title: 'Nộp minh chứng hoạt động ngoại khóa',
            subMessage: 'Hạn chót nộp minh chứng: 30/12/2023',
            isRead: false,
            timeframe: "2 ngày cách đây"
        },

    ];
};

// Handle pull to refresh
const onRefresh = () => {
    // Reset pagination
    page.value = 1;
    finished.value = false;

    // Simulate API call
    setTimeout(() => {
        loadInitialNotifications();
        refreshing.value = false;
        showToast('Đã làm mới thành công');
    }, 1000);
};

// Handle loading more notifications
const onLoad = () => {
    // Simulate loading more data
    setTimeout(() => {
        if (page.value >= 30) {
            // No more data
            finished.value = true;
        } else {
            // Add more notifications
            const moreNotifications = [
                {
                    id: 5 + (page.value - 1) * 3,
                    key: "UITN12350",
                    type: 'notification',
                    sourceFrom: 'Phòng Khảo thí',
                    title: 'Lịch thi giữa kỳ môn Trí tuệ nhân tạo',
                    subMessage: 'Thời gian: 14h00 ngày 15/11/2023, Phòng 305A. Sinh viên mang theo thẻ sinh viên và bút.',
                    isRead: false,
                    timeframe: "3 giờ trước"
                },
                {
                    id: 6 + (page.value - 1) * 3,
                    key: "UITN12351",
                    type: 'action',
                    sourceFrom: 'Phòng Công tác Sinh viên',
                    title: 'Đăng ký tham gia cuộc thi UIT Hackathon 2023',
                    subMessage: 'Hạn đăng ký: 20/11/2023. Giải thưởng lên đến 50 triệu đồng.',
                    isRead: false,
                    timeframe: "5 giờ trước"
                },
                {
                    id: 7 + (page.value - 1) * 3,
                    key: "UITN12352",
                    type: 'action',
                    sourceFrom: 'Thư viện UIT',
                    title: 'Mượn sách "Design Patterns" đã được duyệt',
                    subMessage: 'Vui lòng đến quầy thư viện để nhận sách trong vòng 24h.',
                    isRead: true,
                    timeframe: "1 ngày trước"
                },
                {
                    id: 8 + (page.value - 1) * 3,
                    key: "UITN12348",
                    type: 'task',
                    sourceFrom: 'Phòng Công tác sinh viên',
                    title: 'Nộp minh chứng hoạt động ngoại khóa',
                    subMessage: 'Hạn chót nộp minh chứng: 30/12/2023',
                    isRead: false,
                    timeframe: "2 ngày cách đây"
                },
                {
                    id: 9 + (page.value - 1) * 3,
                    key: "UITN12349",
                    type: 'notification',
                    sourceFrom: 'Thư viện',
                    title: 'Thông báo trả sách quá hạn',
                    subMessage: 'Vui lòng trả sách đúng hạn để tránh phí phạt',
                    isRead: true,
                    timeframe: "3 ngày cách đây"
                }
            ];

            notifications.value.push(...moreNotifications);
            page.value++;
        }

        loading.value = false;
    }, 800);
};

// Helper function to get icon based on notification type
const getIconName = (type: string) => {
    switch (type) {
        case 'action':
            return 'guide-o';
        case 'task':
            return 'description';
        case 'notification':
            return 'bell';
        default:
            return 'envelop-o';
    }
};

// Helper function to get icon color class
const getIconColorClass = (type: string) => {
    switch (type) {
        case 'action':
            return 'icon-action';
        case 'task':
            return 'icon-task';
        case 'notification':
            return 'icon-notification';
        default:
            return 'icon-notification';
    }
};

// Handle swipe cell actions confirmation
const beforeClose = ({ position }: { position: 'left' | 'right' | 'cell' | 'outside' }) => {
    switch (position) {
        case 'right':
            // Close immediately without confirmation for right swipe
            // instance.close();
            swipeCellRef.value?.close('right');
            break;
    }
};

// Toggle notification read status
const toggleReadStatus = (notification: INotificationV) => {
    notification.isRead = !notification.isRead;
    showToast(`Được đánh dấu là ${notification.isRead ? 'đọc' : 'chưa đọc'}`);
};

// Delete notification
const deleteNotification = (id: number) => {
    showDialog({
        title: 'Xoá thông báo',
        message: 'Bạn có chắc chắn muốn xóa thông báo này không?',
        showCancelButton: true,
    }).then(() => {
        // Remove notification
        notifications.value = notifications.value.filter(item => item.id !== id);
        showToast('Đã xoá thông báo');
    });
};

const goToNotificationDetails = (notificationId: number) => {
    router.push(`/notificationDetailsView/${notificationId}`)
    showToast(`navigate to :${notificationId} `)
}

</script>

<template>
    <div class="notification-content_container">
        <div class="notification-content_container__content">

            <div class="notifications-wrapper">
                <!-- Pull to refresh wrapper -->
                <van-pull-refresh v-model="refreshing" @refresh="onRefresh" success-text="Thông báo đã cập nhật"
                    pulling-text="Kéo để làm mới" loosing-text="Thả ra để làm mới">
                    <!-- List with loading and finished states -->
                    <van-list v-model:loading="loading" :finished="finished" finished-text="Đã tải hết thông báo"
                        @load="onLoad">
                        <!-- Notification group -->
                        <van-cell-group inset class="notification-cell-group">
                            <!-- Individual notifications with swipe actions -->
                            <van-swipe-cell v-for="notification in notifications" :key="notification.id"
                                :before-close="beforeClose" class="notification--swipe-cell">
                                <!-- Notification content -->
                                <!-- <router-link class="routerLink" :to="`/notificationDetailView/${notification.id}`"> -->
                                <van-cell class="notification-cell" @click="goToNotificationDetails(notification.id)">
                                    <template #icon>
                                        <!-- Dynamic icon based on notification type -->
                                        <div class="notification-icon" :class="getIconColorClass(notification.type)">
                                            <van-icon :name="getIconName(notification.type)" size="22" />
                                        </div>
                                    </template>

                                    <div class="notification-content">
                                        <!-- Notification sourceFrom -->
                                        <div class="notification-source-from">{{ notification.sourceFrom }}</div>

                                        <!-- Notification title -->
                                        <div class="notification-title">
                                            <van-text-ellipsis rows="2" :content="notification.title" />

                                        </div>

                                        <!-- Notification subMessage -->
                                        <div class="notification-sub-message">
                                            <van-text-ellipsis rows="2" :content="notification.subMessage" />
                                        </div>

                                        <!-- Timestamp -->
                                        <div class="notification-timeframe">{{ notification.timeframe }}</div>
                                    </div>

                                    <!-- Unread indicator -->
                                    <template #right-icon>
                                        <!-- <div v-if="!notification.isRead" class="unread-indicator"> -->
                                        <van-badge v-if="!notification.isRead" dot />
                                        <!-- </div> -->
                                    </template>
                                </van-cell>
                                <!-- </router-link> -->

                                <!-- Right swipe action: Mark as read -->
                                <template #right>
                                    <van-button square :text="notification.isRead ? 'Chưa đọc' : 'Đã đọc'"
                                        type="primary" class="swipe-read-button"
                                        @click="toggleReadStatus(notification)" />
                                    <van-button square text="Xoá" type="danger" class="swipe-delete-button"
                                        @click="deleteNotification(notification.id)" />
                                </template>
                            </van-swipe-cell>
                        </van-cell-group>

                        <!-- Empty state if no notifications -->
                        <div v-if="notifications.length === 0 && !loading" class="empty-state">
                            <van-empty image="search" description="Không có thông báo nào" />
                        </div>
                    </van-list>
                </van-pull-refresh>

            </div>

        </div>
    </div>
</template>


<style lang="scss" scoped>
.notification-content_container {
    flex: 1;
    width: 90vw;
    // border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;

    &__content {
        // background-color: #ffffff;
        background-color: #f7f8fa;
        width: 100vw;
        border-radius: 0.5rem;
        // border: 1px solid rgb(167, 199, 255);
        color: rgb(50, 108, 209);
        // padding: 1rem 0;
    }
}

.notifications-wrapper {
    max-width: 100%;
    height: 100vh;
    // border: 1px solid yellow;
    padding: 1rem 0;
    overflow: auto;
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: #cccccc #f9f9f9;


}

.notification-cell-group {
    // border: 1px solid red;
    padding-bottom: 1rem;
}

.notification--swipe-cell {
    // border: 1px solid red;

}

.notification-cell {
    position: relative;
    padding: 1rem;
    background-color: #fff;
    // border: 1px solid blue;
    // margin: 1rem 0;
}

.notification-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    margin-right: 16px;
    // border: 1px solid yellow;
}

.icon-action {
    color: #f5a623;
    background-color: rgba(245, 166, 35, 0.1);
}

.icon-task {
    color: #4cd964;
    background-color: rgba(76, 217, 100, 0.1);
}

.icon-notification {
    color: #37a2eb;
    background-color: rgba(55, 162, 235, 0.1);
}

.notification-content {
    flex: 1;
    // border: 1px solid yellow;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: flex-start;
}

.notification-source-from {
    font-size: 14px;
    color: #999;
    margin-bottom: 4px;
}

.notification-title {
    width: 99%;
    font-size: 1rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 0.25rem;
    // border: 1px solid red;

    display: flex;
    text-align: left;
    padding: 0.5rem 1rem;
    background-color: #f8f8f8;
    border-left: 0.25rem solid #94bcf0;
    word-break: break-word;
    white-space: normal;
    overflow-wrap: break-word;
    line-height: 1.5;
}

.notification-sub-message {
    width: 99%;
    font-size: 1rem;
    color: #666;
    margin-bottom: 0.25rem;
    word-break: break-word;
    display: flex;
    text-align: left;
    padding: 0.5rem 1rem;
    background-color: #f8f8f8;
    white-space: normal;
    overflow-wrap: break-word;
    line-height: 1.5;
}

.notification-timeframe {
    font-size: 0.75rem;
    color: #999;
}

.unread-indicator {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: #1989fa;
}

.swipe-read-button {
    height: 100%;
    width: 4rem;
}

.swipe-delete-button {
    height: 100%;
    width: 4rem;
}

.empty-state {
    padding: 3rem 0;
}

.routerLink {
    text-decoration: none;
}
</style>
