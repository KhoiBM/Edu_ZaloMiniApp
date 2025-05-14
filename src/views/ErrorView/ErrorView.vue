<template>
    <div class="error-view">
        <h1>Error</h1>
        <p>Something went wrong</p>
        <button @click="goBack">Go Back</button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
    router.back()
}
</script>

<style lang="scss" scoped>
.error-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // height: 100vh;
    text-align: center;

    h1 {
        font-size: 3rem;
        color: #dc3545;
    }

    button {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        background-color: #6c757d;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
            background-color: #5a6268;
        }
    }
}
</style>