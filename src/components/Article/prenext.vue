<template>
  <div class="prenext">
    <div v-if="prevArticle" class="text-left prev">
      <router-link :to="{ name: 'article', params: { aid: Number(prevArticle.id) }}" class="link-title"><span>上一篇:</span> {{prevArticle.title}}</router-link>
    </div>
    <div v-if="nextArticle" class="text-right next">
      <router-link :to="{ name: 'article', params: { aid: Number(nextArticle.id) }}" class="link-title"><span>下一篇:</span> {{nextArticle.title}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  props:['prevArticle','nextArticle']
}
</script>