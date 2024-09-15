<script setup lang="ts">
import Todo from "./Todo.vue";

defineProps(["todoList"]);
</script>

<template>
  <Todo
    class="listTodo"
    v-for="(todo, index) in todoList"
    :key="index"
    :todo="todo"
    :index="index"
  />
</template>

<style scoped>
.listTodo {
  display: list-item;
}
</style>
