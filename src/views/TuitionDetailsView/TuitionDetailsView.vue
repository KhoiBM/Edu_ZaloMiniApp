<script setup lang="ts">
import { TuitionDetailsLayout } from '@/layouts'
import { TuitionDetailsHeaderScreen, TuitionDetailsFooterScreen, TuitionDetailsContentScreen } from '@/screens'
</script>

<template>
    <div>
        <tuition-details-layout>
            <template #tuition-details-layout__header>
                <tuition-details-header-screen></tuition-details-header-screen>
            </template>
            <template #tuition-details-layout__content>
                <tuition-details-content-screen />
            </template>
            <template #tuition-details-layout__footer>
                <tuition-details-footer-screen></tuition-details-footer-screen>
            </template>
        </tuition-details-layout>
    </div>
</template>


<style lang="scss"></style>