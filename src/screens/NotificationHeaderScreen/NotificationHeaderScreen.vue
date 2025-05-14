<script setup lang="ts">
import { ref } from 'vue'
import { } from "@/types"



</script>

<template>
    <div class="notification-header_container">
        <div class="notification-header_container__content">
            <h1> Thông báo các vấn đề quan trọng</h1>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.notification-header_container {
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
        // border: 1px solid rgb(167, 199, 255);
        color: rgb(88, 139, 227);
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 5rem;
    }

}
</style>
