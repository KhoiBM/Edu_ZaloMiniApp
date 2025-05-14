<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';
import { useRouter } from 'vue-router';
// import { getAssetUrl } from '@/utils/getAssetUrl';

// const avatar = getAssetUrl('images/avatar.jpg');
import avatar from "@/assets/images/avatar.jpg"

const router = useRouter();

interface News {
  id: number;
  key: string;
  code: string;
  title: string;
  description: string[];
  photos: PhotoNews[];
  createdAt: Date;
  updatedAt: Date;
}

interface PhotoNews {
  title: string;
  url: string;
  type: string;
}

const newsList = [
  {
    id: 1,
    key: 'news_1',
    code: 'news_1',
    title: 'News 1',
    description: 'Description of news 1',
    photos: [
      { title: 'Photo 1', url: avatar },
      { title: 'Photo 2', url: avatar },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    key: 'news_2',
    code: 'news_2',
    title: 'News 2',
    description: 'Description of news 2',
    photos: [
      { title: 'Photo 3', url: avatar },
      { title: 'Photo 4', url: avatar },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    key: 'news_3',
    code: 'news_3',
    title: 'News 3',
    description: 'Description of news 3',
    photos: [
      { title: 'Photo 5', url: avatar },
      { title: 'Photo 6', url: avatar },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    key: 'news_4',
    code: 'news_4',
    title: 'News 4',
    description: 'Description of news 4',
    photos: [
      { title: 'Photo 7', url: avatar },
      { title: 'Photo 8', url: avatar },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const goToNewsDetail = (id: number) => {
  router.push({
    path: '/newsDetailView',
    query: {
      id: id.toString(),
    },
  });
};

const onChangeNews = (index: number) => {
  // console.log('Current news index:', index);
};

// const onDragEndNews = (event: Event) => {
//   // swipeRef.value?.next()
// };

</script>

<template>
  <div class="news_container">
    <div class="news_content">
      <div class="news-header">
        <van-cell class="header-cell">
          <template #title>
            <span class="news-title">Tin tức / Sự kiện</span>
          </template>
          <template #right-icon>
            <router-link to="/newsView" class="view-more">
              Xem Thêm
            </router-link>
          </template>
        </van-cell>
      </div>

      <div class="news-list-swipe">
        <van-swipe lazy-render indicator-color="white" @change="onChangeNews" touchable :autoplay="3000">
          <van-swipe-item v-for="news in newsList" :key="news.id">
            <van-image :src="news.photos[0].url" width="100%" height="100%" fit="contain"
              @click="goToNewsDetail(news.id)" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 99vw;
  padding: 1rem 0;
}

.news_content {
  width: 90vw;
  // border: 1px solid blue;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.news-title {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
}

.view-more {
  font-size: 18px;
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.2s ease;
}

.view-more:hover {
  text-decoration: none;
  color: #13d26f;
}
</style>
