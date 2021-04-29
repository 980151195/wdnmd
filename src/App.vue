<template>
  <div id="app">
    <el-container>
      <el-header id="headerBook">
        <Header/>
      </el-header>
      <el-main id="mainBook">
        <!-- <Login/> -->
        <router-view></router-view>
      </el-main>
      <el-footer id="footerBook">
        <Footer/>
      </el-footer>
    </el-container>
    

  </div>
</template>

<script>
import Header from"./components/Header.vue"
import Login from './components/Login.vue'

import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
  Header,
    Login,
    Footer,

  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
#headerBook{
  background-color: #244152;
}
#mainBook{
  /* background-color: crimson; */
  height: 500px;
}
#footerBook{
  /* background-color: cyan; */
  height: 150px  !important;
}
</style>
