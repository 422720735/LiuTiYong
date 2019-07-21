<template>
  <div class="top-box">
    <Navbar></Navbar>
    <router-view></router-view>
    <Toaster></Toaster>
  </div>
</template>

<script>
  import store from './store/index'
  import Navbar from './Navbar'
  import Toaster from './components/Toaster'
  export default {
    store,
    components:{ Navbar,Toaster }
  }
</script>

<style></style>
