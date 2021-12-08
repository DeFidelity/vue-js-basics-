<template>
  <SignupForm />
</template>

<script>
import SignupForm from "./components/SignupForm.vue"
export default {
  name: 'App',
  components: {SignupForm},
  data() {
    return {
    }
  },
  method: {
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  margin: 0;
  background: #eee;
}
h2{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
