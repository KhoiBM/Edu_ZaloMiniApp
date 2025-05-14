<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { INotificationDetailsV } from '@/types'
import { formattedDate } from '@/utils';

const router = useRouter()

const notificationDetailsInfo = ref<INotificationDetailsV>({
    id: 0,
    key: '',
    type: '',
    sourceFrom: '',
    title: '',
    subMessage: '',
    isRead: false,
    timeframe: '',
    code: '',
    description: '',
    createdAt: new Date(),
    updatedAt: new Date()
});

onMounted(() => {
    notificationDetailsInfo.value = {
        id: 1,
        key: "TB2024001",
        type: 'task',
        sourceFrom: 'Phòng Công tác Sinh viên',
        title: 'Thông báo về việc đăng ký học phần học kỳ 2 năm học 2023-2024',
        subMessage: 'Sinh viên các khoa cần đăng ký học phần cho học kỳ 2 năm học 2023-2024 từ ngày 15/12/2023 đến ngày 25/12/2023 thông qua cổng thông tin sinh viên',
        isRead: false,
        timeframe: "3 ngày trước",
        code: 'CTSV2024015',
        description: 'Phòng Công tác Sinh viên thông báo về việc đăng ký học phần học kỳ 2 năm học 2023-2024:\n\n1. Thời gian đăng ký: Từ 8h00 ngày 15/12/2023 đến 17h00 ngày 25/12/2023\n2. Đối tượng: Tất cả sinh viên hệ chính quy\n3. Hình thức: Đăng ký trực tuyến qua cổng thông tin sinh viên\n4. Lưu ý: Sinh viên cần thanh toán học phí học kỳ 1 trước khi đăng ký học phần mới\n\nMọi thắc mắc vui lòng liên hệ Phòng Công tác Sinh viên để được hỗ trợ.',
        createdAt: new Date('2023-12-12T08:00:00'),
        updatedAt: new Date('2023-12-12T08:00:00'),
    }

})

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

</script>

<template>
    <div class="notification-details-content_container">
        <div class="notification-details-content_container__content">
            <div class="notification-details-wrapper">

                <!-- <van-cell-group inset >
                    <van-cell title="Mã thông báo " value="notificationDetailsInfo.code" />


                </van-cell-group> -->

                <van-cell-group inset class="notification-cell-group">
                    <van-cell title="Mã thông báo " :value="notificationDetailsInfo.code" />
                    <van-cell title="Loại thông báo">
                        <template #right-icon>
                            <div class="notification-type-icon"
                                :class="getIconColorClass(notificationDetailsInfo.type)">
                                <van-icon :name="getIconName(notificationDetailsInfo.type)" />
                            </div>
                        </template>
                    </van-cell>
                    <van-cell title="Nguồn từ" :value="notificationDetailsInfo.sourceFrom" />
                    <van-cell title="Đã gửi từ" :value="notificationDetailsInfo.timeframe" />
                    <van-cell title="Ngày tạo" :value="formattedDate(notificationDetailsInfo.createdAt)" />
                    <van-cell title="Đã cập nhật tại" :value="formattedDate(notificationDetailsInfo.updatedAt)" />
                    <van-cell title="Trạng thái">
                        <template #value>
                            <van-tag :type="`${notificationDetailsInfo.isRead ? 'primary' : 'danger'}`" round
                                size="large" plain class="read-status-tag">
                                {{ notificationDetailsInfo.isRead ? 'Đã đọc' : 'Chưa đọc' }}
                            </van-tag>
                        </template>
                    </van-cell>
                    <van-cell class="notification-details-sub-message-cell">
                        <template #title class="notification-details-sub-message-title">
                            Tóm tắt:
                        </template>
                        <div class="notification-details-sub-message">
                            {{ notificationDetailsInfo.subMessage }}
                        </div>
                    </van-cell>
                    <van-cell class="notification-details-description-cell">
                        <template #title class="notification-details-description-title">
                            Nội dung chi tiết:
                        </template>
                        <div class="notification-details-description">
                            <van-text-ellipsis rows="5" dots="..." :content="notificationDetailsInfo.description"
                                expand-text="mở rộng" collapse-text="...gói gọn" />
                        </div>
                    </van-cell>
                </van-cell-group>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.notification-details-content_container {
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
        height: auto;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        // border: 1px solid rgb(167, 199, 255);
        // color: rgb(50, 108, 209);
        // padding: 1rem 0;
    }
}

.notification-details-wrapper {
    width: 100%;
    height: 100%;
    // border: 1px solid red;
    padding: 1rem 0;
    overflow: auto;
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: #cccccc #f9f9f9;
}

.notification-cell-group {}

.notification-type-icon {
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

.notification-details-sub-message-cell {
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: flex-start;

}

.notification-details-sub-message-title {}

.notification-details-sub-message {
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: flex-start;
    text-align: justify;
    // border: 1px solid red;
}

.notification-details-description {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    text-align: justify;
}

.notification-details-description-cell {
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: flex-start;
}
</style>
