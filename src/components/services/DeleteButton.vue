<script setup lang="ts">
// import { inject } from "vue";
// import { removeTodo_Key } from "../../assets/keys.ts";
// import type { removeTodoFunc } from "../../assets/keys.ts";


// defineProps(["todo", "index"]);
// const deleteItem = inject(removeTodo_Key) as removeTodoFunc;

import { defineProps } from 'vue';
import type { Todo } from '../../storage/todoStore'; // Убедитесь, что путь к вашему интерфейсу правильный

// Определяем свойства, которые будут переданы в компонент
const props = defineProps<{
  todo: Todo;
  removeTodo: (id: number) => void;
}>();

// Функция для удаления задачи
const removeTodo = () => {
  console.log('Запрос на удаление задачи с ID:', props.todo.id);
  props.removeTodo(props.todo.id);
};
</script>

<template>
  <button  
    @click="removeTodo" 
    class="delete-button"
  >
    <img src="../../images/box-svgrepo-com.svg" alt="Корзинка" />
  </button>
</template>

<style scope>

.delete-button {
    background-color: transparent; /* Прозрачный фон */
    border: none; /* Убираем рамку */
    border-radius: 50%; /* Делаем кнопку круглой */
    width: 40px; /* Ширина кнопки */
    height: 40px; /* Высота кнопки */
    cursor: pointer; /* Курсор в виде указателя */
    display: flex; /* Для центрирования иконки */
    align-items: center; /* Вертикальное центрирование */
    justify-content: center; /* Горизонтальное центрирование */
    transition: background-color 0.3s; /* Плавный переход цвета фона */
}

.delete-button:hover {
    background-color: rgba(255, 0, 0, 0.1); /* Цвет фона при наведении */
}

.delete-button img {
    width: 20px; /* Ширина иконки */
    height: 20px; /* Высота иконки */
}
</style>