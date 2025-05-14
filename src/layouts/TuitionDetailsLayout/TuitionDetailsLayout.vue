<script setup lang="ts">

</script>

<template>
    <div class="tuition-details-layout">
        <div class="tuition-details-layout__header">
            <slot name="tuition-details-layout__header"></slot>
        </div>
        <div class="tuition-details-layout__content">
            <slot name="tuition-details-layout__content"></slot>
        </div>
        <div class="tuition-details-layout__footer">
            <slot name="tuition-details-layout__footer"></slot>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.tuition-details-layout {
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

    &__footer {
        flex: 1;
        background-color: #cddaeb;
        padding: 1rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>