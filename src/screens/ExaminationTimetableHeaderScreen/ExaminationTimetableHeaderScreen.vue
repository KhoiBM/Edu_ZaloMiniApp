<script setup lang="ts">
import { ref } from 'vue'
import { } from "@/types"



</script>

<template>
    <div class="examination-timetable-header_container">
        <div class="examination-timetable-header_container__content">
            <h1> Thông báo lịch thi trong kỳ này</h1>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.examination-timetable-header_container {
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
