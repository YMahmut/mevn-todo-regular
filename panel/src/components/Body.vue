<template>
  <div id="card-body">
    <Todo/>
  </div>
</template>

<script>
import ToDo from "./view/Todo";

export default {
  name: "appBody",
  components: {
    Todo: ToDo,
  }
}
</script>

<style scoped>
#card-body {
  background-color: #d9bcbc;
  border-radius: 0 0 5px 5px;
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 100vh;
  padding: 10px;
}
</style>