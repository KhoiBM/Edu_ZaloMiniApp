<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { INotificationDetailsV } from '@/types'

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
        isRead: true,
        timeframe: "3 ngày trước",
        code: 'CTSV2024015',
        description: 'Phòng Công tác Sinh viên thông báo về việc đăng ký học phần học kỳ 2 năm học 2023-2024:\n\n1. Thời gian đăng ký: Từ 8h00 ngày 15/12/2023 đến 17h00 ngày 25/12/2023\n2. Đối tượng: Tất cả sinh viên hệ chính quy\n3. Hình thức: Đăng ký trực tuyến qua cổng thông tin sinh viên\n4. Lưu ý: Sinh viên cần thanh toán học phí học kỳ 1 trước khi đăng ký học phần mới\n\nMọi thắc mắc vui lòng liên hệ Phòng Công tác Sinh viên để được hỗ trợ.',
        createdAt: new Date('2023-12-12T08:00:00'),
        updatedAt: new Date('2023-12-12T08:00:00'),
    }

})

</script>

<template>
    <div class="notification-details-header_container">
        <div class="notification-details-header_container__content">
            <h1> {{ notificationDetailsInfo?.title }}</h1>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.notification-details-header_container {
    flex: 1;
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: center;

    &__content {
        background-color: #ffffff;
        width: 90vw;
        border-radius: 0.5rem;
        // color: rgb(88, 139, 227);
        // min-height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: justify;
        word-break: break-word;
        word-spacing: normal;
        padding: 1rem;

        // border: 1px solid yellow;
        & h1 {
            font-size: large;
            line-height: 2rem;
        }
    }

}
</style>
