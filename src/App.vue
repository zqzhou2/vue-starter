<template>
  <div id="app">
    <header></header>
    <h2>{{msg}}</h2>

    <div>
      <p>
        <router-link to="/home">首页</router-link>
        <router-link to="/about">关于</router-link>
      </p>
    </div>
    <router-view/>
    <counter/>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Counter from './components/counter.vue'

export default {
  name: 'App',
  data () {
    return {
      msg: 'welcome to your vue.js app'
    }
  },
  components: {
    Header,
    Counter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
