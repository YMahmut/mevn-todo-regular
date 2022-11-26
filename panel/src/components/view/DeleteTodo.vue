<template>
  <button
          :style="todoInfo.todo.completed ? {border:'3px solid green'} : {color:''}"
          class="col-xs m-2 p-2 del-button"
          @click="DeleteTodo(todoInfo.todo, todoInfo.index)"
  >
    Delete
  </button>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "DeleteTodo",
  props: ["todoInfo"],
  methods: {
    ...mapActions({
      todoDeleteItem:"todoDeleteItem"
    }),
    DeleteTodo(todo, index) {
      this.$emit("hide-deleted", index)
      this.todoDeleteItem(todo._id);
    },
  }
}
</script>

<style scoped>
.del-button {
  border: none;
  border-radius: 5px;
  background-color: #f3ebeb;
  width: 60px;
  border: 3px solid #c57272;
}
</style>