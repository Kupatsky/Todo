<script setup lang="ts">
import DeleteButton from "./services/DeleteButton.vue";
import { Todo, useTodoStore } from '../storage/todoStore'
import type { Todos } from "../storage/todoStore"

const { removeTodo } = useTodoStore()
defineProps<{ 
  todo: Todo,
  todoIndex: number,
  todos: Todos
}>();

// function formatDate(props) { 
//   const newMonth = String(props.todo.date.getMonth() + 1)
//   const newDate = String(props.todo.date.getDate())
// }
</script>

<template>
  <div 
    class="todo_content"
    :class="{ todo_done: todo.checked }"
  >
    <p>{{ todo.content }}</p> 
    <p> {{ todo.date }}</p>
    <button @click="console.log(typeof(todo.date))"></button>
    <DeleteButton
      :todos="todos"
      :removeTodo="removeTodo"
      :todo="todo"
      :todoIndex="todoIndex"
    />
  </div>
</template>

<style scoped>
.todo_done { 
  color: rgba(128, 128, 128, 0.5); 
  text-decoration: line-through; 
}

.todo_content { 
  font-size: 25px;
  font-weight: 200;
  display: flex;
  padding: 20px; 
  text-align: left;
  margin: 0 auto;
  width: 100%;
  justify-content: space-between;

}

</style>