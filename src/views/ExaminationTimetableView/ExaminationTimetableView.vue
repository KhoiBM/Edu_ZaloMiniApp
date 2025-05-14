<script setup lang="ts">
import { ExaminationTimetableLayout } from '@/layouts'
import { ExaminationTimetableHeaderScreen, ExaminationTimetableContentScreen } from '@/screens'
</script>

<template>
    <div>
        <examination-timetable-layout>
            <template #examination-timetable-layout__header>
                <examination-timetable-header-screen />
            </template>
            <template #examination-timetable-layout__content>
                <examination-timetable-content-screen />
            </template>
        </examination-timetable-layout>
    </div>
</template>


<style lang="scss"></style>