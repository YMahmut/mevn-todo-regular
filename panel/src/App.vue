<template>
  <div class="p-2">
    <appHeader/>
    <appBody/>
  </div>
</template>

<script>
import appBody from "@/components/Body";
import appHeader from "@/components/Header";


export default {
  name: 'App',
  components: {
    appBody: appBody,
    appHeader: appHeader,
  }
}
</script>

<style>
#app {
background: #c57272;
}
</style>