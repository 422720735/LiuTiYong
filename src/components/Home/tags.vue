<template>
  <ul class="sort-tags list-unstyled clearfix">
    <li>
      <a :class="{'active':(options.sortName === 'publish_time')}" @click.prevent="changeSort('publish_time')" href="javascript:;">最新</a>
    </li>
    <li>
      <a :class="{'active':(options.sortName === 'visit_count')}" @click.prevent="changeSort('visit_count')" href="javascript:;">热门</a>
    </li>
    <li v-for="tag in tagList" :key="tag.cid">

      <a :class="{'active':(options.categoryId === tag.cid)}" @click.prevent="changeTag(tag.cid)" href="javascript:;">{{tag.name}}</a>
    </li>
    <li>
      <img v-show="isFetching" class="loader-tiny" :src="loadingImg" alt="Tiny">
    </li>
  </ul>
</template>

<script>
  import tiny from '@/assets/images/tiny.gif'

  export default {
    props: ['tagList','options','isFetching'],
    data(){
      return {
        loadingImg: tiny
      }
    },
    methods:{
      changeSort(sortName){
        this.$parent.handleChange({'currentPage':1,'sortName':sortName,'categoryId':''})
      },
      changeTag(categoryId){
        this.$parent.handleChange({'currentPage':1,'sortName':'','categoryId':categoryId})
      }
    }
  }
</script>
