<script setup lang="ts">
import { ref } from 'vue'
// const { ref } = Vue;
import { HomeLayout } from '@/layouts'
import { UserProfileScreen, ServicesScreen, NewsScreen } from '@/screens'

</script>

<template>
    <div class="home_view">
        <home-layout>

            <template #home_layout_user_profile>
                <user-profile-screen />
            </template>

            <template #home_layout_services>
                <services-screen />
            </template>

            <template #home_layout_news>
                <news-screen />
            </template>

        </home-layout>
    </div>
</template>


<style lang="scss" scoped></style>
