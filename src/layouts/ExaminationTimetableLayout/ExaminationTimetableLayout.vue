<script setup lang="ts">

</script>

<template>
    <div class="examination-timetable-layout">
        <div class="examination-timetable-layout__header">
            <slot name="examination-timetable-layout__header"></slot>
        </div>
        <div class="examination-timetable-layout__content">
            <slot name="examination-timetable-layout__content"></slot>
        </div>

    </div>
</template>


<style lang="scss" scoped>
.examination-timetable-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    // height: 100vh;
    // gap: 1rem;

    &__header {
        flex: 1;
        background-color: #f8f9fa;
        padding: 1rem;
        width: 100%;
        // border: 1px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__content {
        background-color: #ffffff;
        padding: 1rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

}
</style>