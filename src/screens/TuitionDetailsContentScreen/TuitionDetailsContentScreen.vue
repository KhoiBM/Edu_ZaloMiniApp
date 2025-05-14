<script setup lang="ts">
import { ref } from 'vue'
import { ITuition, ITerm, ITuitionPerCourse, PaymentStatus, PaymentStatusKey } from "@/types"
import { formattedDate } from '@/utils';
const tuitionInfo = ref<ITuition>({
    id: 1,
    tuitionKey: "UITSpring2025T0001",
    tuitionCode: "UITSESpring2025T0001",
    title: "học phí kỳ mùa xuân 2025",
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
    description: 'Vui lòng đóng đúng hạn học phí cho kỳ Spring',
    amount: 20000000,
    currency: "VND",
    isView: false,
    calculationDate: new Date('2025-05-01'),
    hasScholarship: false,
    paymentStatus: "PaidInFull" as PaymentStatus,
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
}
)


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



</script>

<template>
    <div class="tuition-details-content_container">
        <div class="tuition-details-content_container__content">
            <div class="tuition-details-content_wrapper">
                <van-cell-group inset>
                    <van-cell title="Học kỳ" :value="tuitionInfo.term.name" label="" />
                    <van-cell title="Khoa" :value="tuitionInfo.department" label="" />
                    <van-cell title=" Ngành" :value="tuitionInfo.major" label="" />
                    <van-cell title="Ngày bắt đầu" :value="formattedDate(tuitionInfo.term.startDate)" label="" />
                    <van-cell title="Ngày kết thúc" :value="formattedDate(tuitionInfo.term.endDate)" label="" />
                    <van-cell title="Ngày tính học phí" :value="formattedDate(tuitionInfo.calculationDate)" label="" />
                    <van-cell title="Đóng trước ngày" :value="formattedDate(tuitionInfo.paymentDueDate)" label="" />
                    <van-cell title="Trạng thái thanh toán" label="" class="payment-status-cell">
                        <template #value>
                            <van-tag :type="getTagTypeByPaymentStatus(tuitionInfo.paymentStatus)" round size="large"
                                plain class="payment-status-tag">
                                {{ getLocalizedPaymentStatus(tuitionInfo.paymentStatus) }}
                            </van-tag>
                        </template>
                    </van-cell>
                    <van-cell title="Học phí"
                        :value="`${formatterNumberByDots.format(tuitionInfo.amount)} ${tuitionInfo.currency}`"
                        label="" />
                </van-cell-group>
            </div>

            <van-divider>Học phí cho từng khoá học</van-divider>
            <div>
                <van-cell-group inset v-for="(course, index) in tuitionInfo.byCourses" :key="index"
                    class="tuition-course-cell-group">
                    <van-cell :title="`${course.code} - ${course.name}`" :label="`Số tín chỉ: ${course.credits}`">
                        <template #right-icon>
                            <van-tag class="course-status-tag" plain size="medium" text-color=" rgb(88, 139, 227)"
                                color="rgb(167, 199, 255">
                                {{ `${formatterNumberByDots.format(course.amount)} ${course.currency}` }}
                            </van-tag>

                        </template>
                    </van-cell>
                </van-cell-group>
            </div>



        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/mixins' as m;
@use '@/assets/scss/variables' as v;

.tuition-details-content_container {
    flex: 1;
    width: 90vw;
    // border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;

    &__content {
        // background-color: #ffffff;
        background-color: v.$background-color;
        width: 100vw;
        border-radius: 0.5rem;
        padding: 1rem 0;


    }

}

.tuition-details-content_wrapper {
    // border: 1px solid yellow;



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

.tuition-course-cell-group {
    // border: 1px solid yellow;
    margin-top: 1rem;
}
</style>
