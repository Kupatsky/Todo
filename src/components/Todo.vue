<script setup lang="ts">
import DeleteButton from "./services/DeleteButton.vue";
import { useTodoStore } from '../storage/todoStore'

const { removeTodo } = useTodoStore()
defineProps(["todo", "index"]);

</script>

<template>
    <div class="todo_content">
      <p>{{ todo }}</p> 
      <p>{{ index }}</p> 
      <DeleteButton
        :removeTodo="removeTodo"
        :todo="todo"
      />
    </div>
</template>

<style scoped>

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