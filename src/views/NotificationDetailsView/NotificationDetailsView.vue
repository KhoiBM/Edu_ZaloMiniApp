<script setup lang="ts">
import { NotificationDetailsLayout } from '@/layouts'
import { NotificationDetailsHeaderScreen, NotificationDetailsContentScreen } from '@/screens'
</script>

<template>
    <div>
        <notification-details-layout>
            <template #notification-details-layout__header>
                <notification-details-header-screen />
            </template>
            <template #notification-details-layout__content>
                <notification-details-content-screen />
            </template>
        </notification-details-layout>
    </div>
</template>


<style lang="scss"></style>