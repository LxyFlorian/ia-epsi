<template>
  <div id="app">
    <div id="nav">
      <!--
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      -->
      <router-link to='/video'>Vidéo</router-link>

    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: "App",
  components: { },
  props: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url('~@/assets/carrefour.png') no-repeat center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
