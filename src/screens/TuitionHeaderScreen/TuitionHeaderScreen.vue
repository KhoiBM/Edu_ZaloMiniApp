<script setup lang="ts">
import { ref } from 'vue'


</script>

<template>
    <div class="tuition-header_container">
        <div class="tuition-header_container__content">
            <h1>Thông báo học phí</h1>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.tuition-header_container {
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
