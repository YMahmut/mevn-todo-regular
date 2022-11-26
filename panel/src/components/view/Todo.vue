<template>
  <div id="todo">
    <div class="row add-todo-button-initial">
      <span class="col">
        <new-todo @todos="todos=$event"/>
      </span>
      <div class="col">
        <TransitionGroup name="list" tag="ul">
          <li class="m-2 p-2 tablet-class" v-for="(todo,index) in todos" :key="todo._id">
            <content-of-todo
                :todoInfo="{todo,index}"
                :todos="todos"
                @hide-deleted="todos.splice($event, 1)"
                @show-updated-todo="todos[$event.index].description=$event.editedItem"
            />
          </li>
        </TransitionGroup>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios"
import NewTodo from "@/components/view/NewTodo";
import ContentOfTodo from "@/components/view/ContentOfTodo";


export default {
  name: "ToDo",
  components: {ContentOfTodo, NewTodo},
  data() {
    return {
      todos: [],
    }
  },
  async mounted() {
    const response = await axios.get('/api/todoLists');
    this.todos = response.data;
  }

}
</script>

<style scoped>
#todo {
  position: relative;
  width: 100%;
}

.add-todo-button-initial {
  align-items: unset !important;
}

ol, ul {
  padding-left: 0rem !important;
}

li {
  list-style: none;
  background-color: #c57272;
  border-radius: 5px;
  box-shadow: 1px 2px 3px #000;
}

@media (min-width:375px) and (max-width:600px) {
  .tablet-class {
    width: max-content;
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.75s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(40px);
}


button {
  width: fit-content;
  background-color: #c57272;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 2px 3px;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
}
</style>