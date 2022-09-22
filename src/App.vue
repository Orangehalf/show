<template>
  <!-- <div id="app" class="fit"> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <el-container class="fit">
      <el-header> <Header /></el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  <!-- </div> -->
</template>

<script>
import Header from "./components/header";

export default {
  name: "App",
  components: {
    Header,
  },
  
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
body,
html {
  width: 100%;
  height: 100%;
}
</style>
