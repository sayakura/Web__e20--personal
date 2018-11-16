<template>
  <div id="app">
    <router-view></router-view>

  </div>
</template>

<script>

import Home from '@/components/Home'
import Login from '@/components/Login'

export default {
  name: 'App',
  components: {
    Home,
    Login
  },
  data(){
    return {
    }
  },
}
</script>
