<script setup lang="ts">
import Todo from "./Todo.vue";

defineProps(["todoList"]);

/* 
  Тут лучше вынести проход по циклу на template
  
  Сейчас ты сделал так, что у тебя на сущности туду - цикл и сам компонент
  Так можно, но если можешь упростить - упрости. Лучше сказать, что сейчас 
  будет цикл, в котором будет такая переменная
*/

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
  <template
    v-for="(todo, todoIndex) in todoList"
    :key="todoIndex"
  >
    <Todo
      :todo="todo"
      :index="todoIndex"
    />
  </template>
</template>
