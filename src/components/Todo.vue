<script setup lang="ts">
import { inject } from 'vue'
import { removeTodo_Key } from '../assets/keys'
import type { removeTodoFunc } from '../assets/keys.ts'

defineProps(['todo', 'index'])
const deleteItem: removeTodoFunc = inject(removeTodo_Key) 

</script>

<template>
  <p> {{ index }} </p>
  <p>{{ todo }} </p>
  <button @click="deleteItem(index)">Delete</button>
</template>