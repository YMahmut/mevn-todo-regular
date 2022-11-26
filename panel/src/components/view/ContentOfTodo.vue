<template>
  <div class="row" v-if="!!todoInfo">
    <div class="col-9">
    <span v-if="isEditMode && todoInfo.index === selectedEditItemIndex" class="col-md todos">
                  <input class="todo-edit-input" type="text" v-model="selectedEditItem"
                         @keypress.enter="EditTodo(todoInfo.todo, todoInfo.index)"/>
    </span>
    <span v-else-if="todoInfo.index !== selectedEditItemIndex"
            @click="TodoCompletedControl(todoInfo.todo)"
            :class="{done:todoInfo.todo.completed}"
            class="col-md todos">{{ todoInfo.todo.description }}
    </span>
    </div>
    <div class="col-3 tablet-class" style="margin-left: -40px">
    <span>
      <DeleteTodo v-if="!isEditMode" :todoInfo="todoInfo" @hide-deleted="$emit('hide-deleted', $event)"/>
      <button v-else
              :style="todoInfo.index !== selectedEditItemIndex? {opacity:'0'} : {opacity:'1'}"
              class="col-xs m-2 p-2 cancel-button"
              @click="editCancelled(todoInfo.index)"
      >
        Cancel
      </button>
    </span>
      <span>
      <button v-if="!isEditMode" class="col-xs m-2 p-2 edit-button" @click="startToEdit(todoInfo.todo, todoInfo.index)">Edit</button>
      <button v-if="isEditMode"
              :style="todoInfo.index !== selectedEditItemIndex? {opacity:'0'} : {opacity:'1'}"
              class="col-xs m-2 p-2 edit-button"
              @click="EditTodo(todoInfo.todo, todoInfo.index)"
      >
        Edit
      </button>
    </span>
    </div>
  </div>
</template>

<script>
import DeleteTodo from "@/components/view/DeleteTodo";
import {mapActions, mapState} from "vuex";

export default {
  name: "ContentOfTodos",
  components: {DeleteTodo},
  props: ["todoInfo"],
  data() {
    return {
      lined: false,
      isEditMode: false,
      selectedEditItem: "",
      selectedEditItemIndex: null,
    }
  },
  computed:{
    ...mapState({
      todos:(state)=>state.todos,
    })
  },
  methods: {
    ...mapActions({
      todoCompletedViseVersa:"todoCompletedViseVersa",
      todoEditItem:"todoEditItem",
    }),
    startToEdit(todo, index) {
      this.isEditMode = true;
      this.selectedEditItemIndex = index;
      this.selectedEditItem = this.todos[index].description;
    },
    EditTodo(todo, index) {
      if (this.selectedEditItemIndex !== index) return;
      this.$emit("show-updated-todo", {index, editedItem: this.selectedEditItem})
      this.selectedEditItemIndex = null;
      this.isEditMode = false;
      this.selectedEditItem = "";

      const isEmpty = todo.description.replace(/[^a-z0-9]/gi, '');
      if (!isEmpty.length) {
        setTimeout(() => {
          location.reload();
        }, 50);
        return;
      }
      this.todoEditItem(todo);
    },
    editCancelled(index) {
      if (this.selectedEditItemIndex !== index) return;
      this.selectedEditItemIndex = null;
      this.isEditMode = false;
      this.selectedEditItem = "";
    },
    TodoCompletedControl(todo) {
      todo.completed = !todo.completed;
      this.todoCompletedViseVersa({todoId:todo._id, todoCompleted:todo.completed});
    },
  },
}
</script>

<style scoped>
.todos {
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  position: relative;
  width: 87%;
  user-select: none;
  word-break: break-word;
}
@media (min-width:240px) and (max-width:310px) {
  .tablet-class {
    width: 40%;
  }
}
.edit-button, .cancel-button {
  border-radius: 5px;
  background-color: #f3ebeb;
  width: 60px;
  border: 3px solid #c57272;
}

.todo-edit-input {
  border: 2px solid green;
  border-radius: 5px;
  padding-left: 10px;
}

.done {
  text-decoration-line: line-through;
  text-decoration-color: #e3b6ba;
}

button {
  width: fit-content;
  background-color: #c57272;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 2px 3px;
}
</style>