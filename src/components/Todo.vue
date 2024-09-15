<script setup lang="ts">
import { inject } from "vue";
import { removeTodo_Key } from "../assets/keys";
import type { removeTodoFunc } from "../assets/keys.ts";

defineProps(["todo", "index"]);
const deleteItem: removeTodoFunc = inject(removeTodo_Key);
</script>

<template>
  <div class="listTodo">
    <p>{{ index }}</p>
    <p>{{ todo }}</p>
    <button @click="deleteItem(index)">Delete</button>
  </div>
</template>

<style scoped>
.listTodo {
  display: list-item;
}
</style>
