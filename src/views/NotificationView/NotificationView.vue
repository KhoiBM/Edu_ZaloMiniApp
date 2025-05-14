<script setup lang="ts">
import { NotificationLayout } from '@/layouts'

import { NotificationHeaderScreen, NotificationContentScreen, NotificationFooterScreen } from '@/screens'
</script>

<template>
    <div>
        <notification-layout>
            <template #notification-layout__header>
                <notification-header-screen />
            </template>
            <template #notification-layout__content>
                <notification-content-screen />
            </template>
            <template #notification-layout__footer>
                <notification-footer-screen />
            </template>
        </notification-layout>
    </div>
</template>


<style lang="scss"></style>