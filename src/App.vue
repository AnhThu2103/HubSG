<template>
  <div>
    <header>
      <router-link to="/login">Login</router-link>
      <router-link to="/reg">Register</router-link>
      <router-link to="/fp">Forgot Pass</router-link>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>

</style>
