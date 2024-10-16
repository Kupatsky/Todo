<script setup lang="ts">
import Todo from "./Todo.vue";
import Checkbox from "./services/Checkbox.vue";
import type { Todos } from '../storage/todoStore'

defineProps<{ 
  todos: Todos
}>();

</script>

<template>
  <div 
    v-for="(todo, todoIndex) in todos"
    :key="todoIndex"
    class="todo-item"
  >
    <Checkbox 
      :id="todoIndex"
      :todo="todo"
    />
    <Todo
      :todos="todos"
      :todo="todo"
      :todoIndex="todoIndex"
    />
  </div>
</template>

<style scoped> 

.todo-item {
    flex: 0 0 100%;
    height: auto;
    width: 100%;
    margin: 10px;
    border: 2px solid #000;
    border-radius: 40px;
    box-sizing: border-box;
    padding: 20px;
    word-wrap: break-word; 
    overflow-wrap: break-word; 
    justify-content: space-between;
    text-align: center;
    display: flex; /* Используем Flexbox для выравнивания */
}

</style> 
