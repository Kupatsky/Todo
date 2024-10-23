<script setup lang="ts">
import Todo from "./Todo.vue";
import Checkbox from "./services/Checkbox.vue";
import type { Todos } from '../storage/todoStore'

defineProps<{ 
  todos: Todos
}>();

</script>

<template>
  <TransitionGroup name="todo">
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
  </TransitionGroup>
</template>

<style scoped> 
/* Анимации для встроенного компонента TransitionGroup */
.todo-enter-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.todo-enter-from {
  opacity: 0;
  transform: translateY(-20px); /* Элемент будет появляться с небольшим смещением вверх */
}

/* Анимация при удалении */
.todo-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.todo-leave-to {
  opacity: 0; /* Конечное состояние при уходе */
  transform: translateX(100%); /* Элемент уходит вправо */
}

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
    display: flex; 
    /* transition: transform 0.5s ease, opacity 0.5s ease; */
}

</style> 
