<script setup lang="ts">
import Todo from "./Todo.vue";
import Checkbox from "./services/Checkbox.vue";

defineProps(["typedTodos"]);

/*
  На компоненты нельзя вешать классы class="listTodo"
  Можно только на элементы html, либо передавать пропс class через
  выражение :class="someClassAsString", где someClassAsString - это переменная, которая
  объявлена в <script>

*/

/*
  Индексы в любых циклах лучше прописывать созвучно с переменной

  Т.е. todo и todoIndex или tIndex или tI

  Это позволяет при чтении кода с множеством переменных (которые используются по проходу в цикле) - отличать их по названию
*/
</script>

<template>
  <div 
    v-for="(todo, todoIndex) in typedTodos"
    :key="todoIndex"
    class="todo-item"
  >
    <Checkbox 
        :id="'checkbox-' + todoIndex"
        :index="todoIndex"
        :label="todo.content"
        v-model="todo.checked"
    />
    <Todo
      :typedTodos="typedTodos"
      :todo="todo"
      :index="todoIndex"
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
