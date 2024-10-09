<script setup lang="ts">
import Todo from "./Todo.vue";
import Checkbox from "./services/Checkbox.vue";

defineProps(["todos"]);

</script>

<template>
  <button @click="console.log(todos)">check</button>
  <div 
    v-for="(todo, todoIndex) in todos"
    :key="todoIndex"
    class="todo-item"
  >
    <Checkbox 
        :id="'checkbox-' + todoIndex"
        :todoindex="todoIndex"
        :todo="todo"
        v-model="todo.checked"
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
    justify-content: space-between;
    display: flex; /* Используем Flexbox для выравнивания */
    align-items: center; /* Выравнивание по центру по вертикали */
    margin-bottom: 10px; /* Отступ между элементами списка */
}
</style> 
