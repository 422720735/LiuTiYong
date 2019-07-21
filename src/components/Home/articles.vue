<template>
  <ul class="article-list list-unstyled clearfix">
    <li v-if="articleList && Array.isArray(articleList)" class="article-item" v-for="(article,index) in articleList"
        :key="index" :class="article ? 'have-img' : ''">
      <router-link v-if="article.images[0] !== ''" :to="{ name: 'article', params: {aid: article.id } }"
                   class="wrap-img">
        <!--<img :src="`http://localhost:8099/${article.images[0]}`">-->
        <img :src="`http://129.28.173.180:8099/${article.images[0]}`">
        <!--<img :src="`${Server}/${article.images[0]}`">-->
      </router-link>
      <div>
        <p class="list-top">
          <span class="time">{{ article.updated | customTime }}</span>
        </p>
        <h4 class="title">
          <router-link :to="{ name: 'article', params: {aid: article.id } }" class="link-title">
            {{article.title}}
          </router-link>
        </h4>
        <div class="list-footer">
          <span>阅读 {{article.views}}</span>
          <span> · 评论 {{article.comment_count || 0}}</span>
          <span> · 喜欢 {{article.like_count || 0}}</span>
        </div>
      </div>
    </li>
    <li v-if="!Array.isArray(articleList) || articleList.length < 1" class="no-content">正在大力回车...</li>
  </ul>
</template>

<script>
  import {Server} from '../../config'
  export default {
    props: ['articleList']
  }
</script>
