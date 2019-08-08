<!--BasicForm.vuw 基础表单-->
<template>
  <div>
   <h2>User {{ $route.params.id }}</h2> 
   <router-view></router-view>
  </div> 
</template>

<script>
  export default {
    name:"User"
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
