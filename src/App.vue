<script setup lang="ts">
import { ref } from 'vue'
import { AppLayout } from '@/layouts'
// @use '@/assets/scss/variables' as v;
const tabbarItemAtive = ref(0)
</script>

<template>
  <div id="App" class="app-container">
    <van-config-provider :theme-vars="themeVars">
      <app-layout>
        <template #app_router_view>
          <router-view v-slot="{ Component, route }">
            <transition :name="route.meta.transition || 'fade'" mode="out-in" @before-enter="handleBeforeEnter"
              @enter="handleEnter" @leave="handleLeave">
              <keep-alive>
                <component :is="Component" ref="mainContent" :key="route.path" />
              </keep-alive>
            </transition>
          </router-view>
        </template>

        <template #app_tabbar>
          <van-tabbar route v-model="tabbarItemAtive" fixed :active-color="'var(--primary-color)'"
            inactive-color="#8c8c8c" :border="false" class="custom-tabbar">
            <van-tabbar-item icon="home-o" to="/">
              <span class="tabbar-text">Trang chủ</span>
            </van-tabbar-item>
            <van-tabbar-item icon="newspaper-o" to="/newsView">
              <span class="tabbar-text">Tin tức</span>
            </van-tabbar-item>
            <van-tabbar-item icon="edit" to="/createRequestView">
              <span class="tabbar-text">Tạo đơn</span>
            </van-tabbar-item>
            <van-tabbar-item icon="chat-o" to="/messageView">
              <span class="tabbar-text">Nhắn tin</span>
            </van-tabbar-item>
            <van-tabbar-item icon="user-o" to="/personalView">
              <span class="tabbar-text">Cá nhân</span>
            </van-tabbar-item>
          </van-tabbar>
        </template>
      </app-layout>
    </van-config-provider>
  </div>
</template>

<style lang="scss">
@use '@/assets/scss/variables' as v;

.app-container {
  max-width: 100vw;
  min-height: 100vh;
  background-color: v.$background-color;
}

.custom-tabbar {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.9) !important;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05);
  padding: 4px 0;

  .tabbar-text {
    font-size: 12px;
    margin-top: 2px;
  }

  .van-tabbar-item {
    &--active {
      font-weight: 600;
    }
  }
}

// Transitions
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}

.slide-left-enter-from {
  transform: translateX(30px);
}

.slide-left-leave-to {
  transform: translateX(-30px);
}

.slide-right-enter-from {
  transform: translateX(-30px);
}

.slide-right-leave-to {
  transform: translateX(30px);
}
</style>
