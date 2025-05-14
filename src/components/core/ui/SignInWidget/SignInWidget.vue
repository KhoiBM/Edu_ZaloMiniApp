<template>
    <div class="signin-widget">
        <div class="form-container">
            <h2 class="title">Welcome Back</h2>
            <p class="subtitle">Sign in to continue</p>

            <form @submit.prevent="handleSubmit" class="form">
                <div class="form-group">
                    <van-field v-model="formData.username" label="Username" placeholder="Enter your username"
                        :rules="[{ required: true, message: 'Username is required' }]" left-icon="user-o" />
                </div>

                <div class="form-group">
                    <van-field v-model="formData.password" type="password" label="Password"
                        placeholder="Enter your password" :rules="[{ required: true, message: 'Password is required' }]"
                        left-icon="lock" right-icon="eye-o" @click-right-icon="togglePasswordVisibility" />
                </div>

                <div class="form-options">
                    <van-checkbox v-model="rememberMe">Remember me</van-checkbox>
                    <a href="#" class="forgot-password">Forgot Password?</a>
                </div>

                <van-button type="primary" block :loading="isLoading" native-type="submit" class="submit-btn">
                    {{ isLoading ? 'Signing in...' : 'Sign In' }}
                </van-button>
            </form>

            <div class="social-login">
                <p class="divider">Or continue with</p>
                <div class="social-buttons">
                    <van-button icon="google" square class="social-btn">Google</van-button>
                    <van-button icon="facebook" square class="social-btn">Facebook</van-button>
                </div>
            </div>

            <p class="signup-link">
                Don't have an account?
                <router-link to="/signup" class="link">Sign up</router-link>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { showToast } from 'vant'

const isLoading = ref(false)
const rememberMe = ref(false)
const showPassword = ref(false)

const formData = reactive({
    username: '',
    password: ''
})

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value
}

const handleSubmit = async () => {
    isLoading.value = true
    try {
        // Add your login logic here
        await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate API call
        showToast({ message: 'Successfully logged in!', type: 'success' })
    } catch (error) {
        showToast({ message: 'Login failed. Please try again.', type: 'error' })
        console.error('Login error:', error)
    } finally {
        isLoading.value = false
    }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;
@use '@/assets/scss/mixins' as m;

.signin-widget {
    @include m.flex-center;
    min-height: calc(100vh - #{v.$header-height});
    padding: 20px;
    background-color: v.$background-color;

    .form-container {
        width: 100%;
        max-width: 400px;
        padding: 2rem;
        background: white;
        border-radius: v.$border-radius;
        box-shadow: v.$box-shadow;
    }

    .title {
        font-size: v.$font-size-2xl;
        color: v.$gray-800;
        margin-bottom: 0.5rem;
        text-align: center;
    }

    .subtitle {
        color: v.$gray-600;
        text-align: center;
        margin-bottom: 2rem;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    .form-options {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        font-size: 0.875rem;
    }

    .forgot-password {
        color: v.$primary-color;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    .submit-btn {
        margin-bottom: 1.5rem;
        height: 44px;
        font-size: 1rem;
    }

    .social-login {
        margin-top: 2rem;
        text-align: center;

        .divider {
            color: v.$gray-500;
            margin-bottom: 1rem;
            position: relative;

            &::before,
            &::after {
                content: '';
                position: absolute;
                top: 50%;
                width: 30%;
                height: 1px;
                background-color: v.$gray-300;
            }

            &::before {
                left: 0;
            }

            &::after {
                right: 0;
            }
        }
    }

    .social-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-bottom: 1.5rem;

        .social-btn {
            flex: 1;
            max-width: 150px;
        }
    }

    .signup-link {
        text-align: center;
        color: v.$gray-600;
        font-size: 0.875rem;

        .link {
            color: v.$primary-color;
            text-decoration: none;
            font-weight: 500;

            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>