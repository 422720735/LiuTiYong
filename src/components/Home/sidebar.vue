<template>
  <div class="col-sm-3 sidebar-box">
    <div class="cover-img" :style="{ backgroundImage: `url(http://129.28.173.180:8099/static/upload/0dfa3174acf93f0d82aab44d892aeac9.jpg)` }"></div>
    <div class="bottom-block">
      <h1>Bob The Blog</h1>
      <h3>有朋自远方来</h3>
      <h3>不亦乐乎</h3>
    </div>
  </div>
</template>
<script>
  import {Server} from '../../config'
  export default {
    props: ['indexImg']
  }
</script>
