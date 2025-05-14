<script setup lang="ts">
// import { TimetableLayout } from '@/layouts'
// import { TimetableHeaderScreen, TimetableContentScreen } from '@/screens'
</script>

<template>
    <div>
        <timetable-layout>
            <template #timetable-layout__header>
                <timetable-header-screen></timetable-header-screen>
            </template>
            <template #timetable-layout__content>
                <timetable-content-screen />
            </template>
            <!-- <template #timetable-layout__footer>
                <timetable-footer-screen></timetable-footer-screen>
            </template> -->
        </timetable-layout>
    </div>
</template>


<style lang="scss"></style>