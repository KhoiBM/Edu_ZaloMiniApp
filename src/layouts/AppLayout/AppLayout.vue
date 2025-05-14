<script setup lang="ts">
</script>

<template>
    <div class="app_layout">
        <div class="app_layout__router_view">
            <slot name="app_router_view" />
        </div>

        <div class="app_layout__tabbar">
            <slot name="app_tabbar" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.app_layout {
    width: 100vw;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    gap: 0.2rem;
    background-color: var(--van-background);
    // border: 1px solid red;

    &__router_view {
        flex: 1;
        overflow-y: auto;
        padding-bottom: calc(var(--van-tabbar-height) + 0.4rem);
        background-color: var(--van-gray-1);
        display: flex;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        height: 100vh;
        // margin: 0 auto;
        transition: all 0.3s ease;

        // border: 1px solid red;
        // @media (min-width: 768px) {
        //     padding: 1rem;
        //     border-radius: var(--van-border-radius-lg);
        //     box-shadow: var(--van-shadow-sm);
        //     margin-top: 1rem;
        //     margin-bottom: 1rem;
        // }
    }

    &__tabbar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background-color: var(--van-white);
        box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);
    }
}
</style>