<script setup lang="ts">
import DeleteButton from "./services/DeleteButton.vue";
import { useTodoStore } from '../storage/todoStore'

const { removeTodo } = useTodoStore()
defineProps(["todo", "todoIndex", "typedTodos"]);

</script>

<template>
    <div 
      class="todo_content"
      :class="{ todo_done: todo.checked }"
    >
      <p>{{ todo.content }}</p> 
      <!-- <p>{{ todo.checked }}</p> -->
      <DeleteButton
        :typedTodos="typedTodos"
        :removeTodo="removeTodo"
        :todo="todo"
        :todoIndex="todoIndex"
      />
    </div>
</template>

<style scoped>
.todo_done { 
  color: rgba(128, 128, 128, 0.5); /* Серый цвет с меньшей интенсивностью */
  text-decoration: line-through; /* Перечеркивание текста */
}

.todo_content { 
  display: flex;
  padding: 20px; 
  text-align: left;
  margin: 0 auto;
  max-width: 100%;
  width: 100%;
  justify-content: space-between;
}

</style>