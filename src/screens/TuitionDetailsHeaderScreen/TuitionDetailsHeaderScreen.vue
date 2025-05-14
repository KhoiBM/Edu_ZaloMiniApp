<script setup lang="ts">
import { ref } from 'vue'
import { ITuition, ITerm, ITuitionPerCourse, PaymentStatus, PaymentStatusKey } from "@/types"

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
    paymentStatus: "NotPaid" as PaymentStatus,
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

</script>

<template>
    <div class="tuition-details-header_container">
        <div class="tuition-details-header_container__content">
            <h1> {{ tuitionInfo.title.toUpperCase() }}</h1>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.tuition-details-header_container {
    flex: 1;
    width: 90vw;
    // border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;

    &__content {
        background-color: #ffffff;
        width: 100vw;
        border-radius: 0.5rem;
        color: var(--primary-color);
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 5rem;
    }

}
</style>
