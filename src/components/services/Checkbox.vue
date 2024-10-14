<template>
  <div>
    <input type="checkbox" class="checkbox" :key="props.id">
    <label class="checkmark" @click="checkTodo"></label>
  </div>
</template>

<script setup lang="ts">
import type { Todo } from '../../storage/todoStore'


const props = defineProps<{ 
  id: number
  todo: Todo
}>()

function checkTodo() { 
  if ( props.todo.checked ) 
  props.todo.checked = false 
  else props.todo.checked = true
}

</script>

<style scoped>

.checkmark { 
  float: left; /* Плаваем влево */
  margin-right: 10px; 
  display: flex;
  width: 20px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.5); 
  border: 2px solid rgb(110, 107, 107); 
  border-radius: 50%; 
  position: relative;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
}

.checkbox:checked + .checkmark {
    background-color: rgba(255, 255, 255, 0.5); 
    border-color: rgba(144, 97, 97, 0.584); 
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.checkbox:checked + .checkmark:after {
    display: block;
}

.checkmark:after {
    left: 9px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

.checkbox {
  display: none; 
}

</style>