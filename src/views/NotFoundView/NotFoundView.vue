<template>
    <div class="not-found">
        <div class="not-found__content">

            <h1>404</h1>
            <p class="message">Oops! Page Not Found</p>
            <p class="description">The page you are looking for might have been removed, had its name changed, or is
                temporarily unavailable.</p>
            <van-button type="primary" size="large" icon="arrow-left" @click="goHome" class="home-button">
                Back to Home
            </van-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
    router.push('/')
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;
@use '@/assets/scss/mixins' as m;

.not-found {
    @include m.flex-center;
    min-height: 100vh;
    background-color: v.$background-color;
    padding: 1rem;

    &__content {
        text-align: center;
        max-width: 480px;
        padding: 2rem;
        background: white;
        border-radius: v.$border-radius;
        box-shadow: v.$box-shadow;
    }

    &__animation {
        position: relative;
        width: 120px;
        height: 120px;
        margin: 0 auto 2rem;

        .error-icon {
            font-size: 64px;
            color: v.$accent-color;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
        }


    }

    h1 {
        font-size: v.$font-size-4xl;
        color: v.$gray-800;
        margin: 0 0 1rem;
        font-weight: 700;
    }

    .message {
        font-size: v.$font-size-xl;
        color: v.$gray-700;
        margin-bottom: 1rem;
    }

    .description {
        color: v.$gray-600;
        margin-bottom: 2rem;
        line-height: 1.6;
    }

    .home-button {
        width: 200px;
        transition: transform 0.2s ease;

        &:hover {
            transform: translateY(-2px);
        }
    }
}

@keyframes ripple {
    0% {
        transform: scale(0.8);
        opacity: 1;
    }

    100% {
        transform: scale(1.5);
        opacity: 0;
    }
}
</style>