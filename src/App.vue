<template>
  <header>
    <router-link to="/login">Login</router-link>
    <router-link to="/reg">Register</router-link>
    <router-link to="/fp">Forgot Pass</router-link>
  </header>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
header {
  line-height: 1.5;
}
</style>
