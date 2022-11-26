import { createStore } from 'vuex'
import axios from "axios";

const store = createStore({
    state : {
            count: 0,
            todos: [],
    },
    mutations: {
        increment (state) {
            state.count++
        },
        listTodos(state,response){
            state.todos = response.data;
        },
    },
    actions:{
        async AddNewTodoItem({ dispatch }, e) {
            await axios.post(`/api/newTodo`, {description: e, completed: false});
            dispatch('getTodos');
        },
        actionB ({ dispatch, commit }) {
            return dispatch('actionA').then(() => {
                commit('someOtherMutation')
            })
        },
        async getTodos({commit}){
            const response =await axios.get('/api/todoLists');
            commit("listTodos",response)
        },
        async todoDeleteItem(_,id) {
            await axios.delete(`/api/deleteTodo/${id}`);
        },
        async todoCompletedViseVersa(_, {todoId, todoCompleted}) {
            console.log("in component",todoId, todoCompleted)
            await axios.put(`/api/updateTodo/${todoId}`, {completed: todoCompleted});
        },
        async todoEditItem(_,todo) {
            await axios.put(`/api/updateTodo/${todo._id}`, {description: todo.description, completed: todo.completed});
        }
    }
})

export default store;