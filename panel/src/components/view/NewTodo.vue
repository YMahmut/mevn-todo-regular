<template>
  <div>
    <input class="col-md-6 new-todo m-3 p-3" type="text" v-model="doTo" @keypress.enter="addNewTodo"
           placeholder="click and add new todo">
    <button class="col-md-3 my-3 py-3 mx-5 px-5" @click="addNewTodo">Add</button>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  name: "newTodo",
  data(){
    return{
      doTo: "",
    }
  },
  methods:{
    ...mapActions({
      AddNewTodoItem:"AddNewTodoItem"
    }),
    addNewTodo() {
      const isEmpty = this.doTo.replace(/[^a-z0-9]/gi, '');
      if (!isEmpty.length) return;
      this.AddNewTodoItem(this.doTo);
      this.doTo = "";
    },

  }
}
</script>

<style scoped>
.new-todo {
  background: #f3ebeb;
  border: 3px solid #c57272;
  border-radius: 5px;
  box-shadow: 1px 0px 3px;
  color: black;
}
.new-todo:focus {
  outline: none !important;
  border: 3px solid green;
  box-shadow: 0 0 10px #719ECE;
}
button {
  width: fit-content;
  background-color: #c57272;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 2px 3px;
}
</style>