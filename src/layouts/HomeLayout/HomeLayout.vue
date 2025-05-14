<script setup lang="ts">
import { HomeLayout } from '@/layouts'
const checkCanActive = () => { return true }
</script>

<template>

    <div class="home_layout">
        <div v-if="$slots.home_layout_user_profile" class="box_user_profile">
            <!-- <div v-if="checkCanUserActive"> -->
            <slot name="home_layout_user_profile" />
            <!-- </div>" -->
        </div>

        <div class="box_services">
            <slot name="home_layout_services" />
        </div>

        <div class="box_news">
            <slot name="home_layout_news" />
        </div>


    </div>


</template>


<style lang="scss" scoped>
.home_layout {
    display: flex;
    flex-direction: column;
    width: 100vw;
    gap: 1rem;
    align-items: center;
    justify-content: center;

}

.box_user_profile {
    width: 100vw;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px solid yellow;
}

.box_services {
    flex: 1;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box_news {
    flex: 1;
    width: 100vw;
    height: 20rem;
    // border: 1px solid yellow;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
}
</style>