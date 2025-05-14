<script setup lang="ts">
import { TuitionLayout } from '@/layouts'
import { TuitionHeaderScreen, TuitionFooterScreen, TuitionContentScreen } from '@/screens'
</script>

<template>
    <div>
        <tuition-layout>
            <template #tuition-layout__header>
                <tuition-header-screen></tuition-header-screen>
            </template>
            <template #tuition-layout__content>
                <tuition-content-screen />
            </template>
            <template #tuition-layout__footer>
                <tuition-footer-screen></tuition-footer-screen>
            </template>
        </tuition-layout>
    </div>
</template>


<style lang="scss"></style>