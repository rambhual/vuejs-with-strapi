<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  methods: {
    tryLogin() {
      const payload = JSON.parse(localStorage.getItem("userToken"));
      this.$store.dispatch("auth/tryLogin", payload);
    },
  },
  created() {
    this.tryLogin();
  },
};
</script>

