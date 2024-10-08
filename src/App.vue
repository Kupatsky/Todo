<script setup lang="ts">
import TodoList from "./components/TodoList.vue";
import { ref } from "vue";
import type { Ref } from "vue";
// import { maxLenghtTodo_CONFIG } from "./config.ts"
import { useTodoStore } from './storage/todoStore.ts'
import type { Todos } from "./storage/todoStore.ts"

const { todos, addTodo } = useTodoStore()
const newTodoContent: Ref<string | null> = ref('')
  // Инжект потом попробуй
const typedTodos = todos as Ref<Todos>

  const addNewTodo = () => {
  if (newTodoContent.value) {
    addTodo(newTodoContent.value);
    newTodoContent.value = null; // Очищаем поле ввода после добавления
  }
};

const modalActive: Ref<Boolean> = ref(false);

</script>

<template>
  <header>
    <h2>Todo-list</h2>
    <div
      class="input-container"
      v-if="modalActive"
    >
    <input
      class="input-panel"
      type="text"
      v-model="newTodoContent"
      placeholder="What u gonna do today"
      @keyup.enter="addNewTodo"
    />
    </div>
    <button  
      @click="modalActive = !modalActive"
      class="add-todo-button"
    >
      <img src="./images/file-plus-svgrepo-com.svg" alt="Добавить" class="icon" />
    </button>
    <button  
      @click="console.log(todos)"
      class="add-todo-button"
    >
      <img src="./images/file-plus-svgrepo-com.svg" alt="Добавить" class="icon" />
    </button>
  </header>
  <div class="todoColumn">
    <TodoList 
      :typedTodos="typedTodos" 
  />
  </div>
</template>
<!-- хуй -->
<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: rgba(255, 0, 0, 0.800);
  display: flex;
  align-items: center;
  justify-content: space-between; /* Распределяет пространство между элементами */
  padding: 0 20px;
  color: white;
  z-index: 1000;
}

header .title {
  flex: 1;
}

.add-todo-button {
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

.add-todo-button:hover {
  background-color: rgba(255, 255, 255, 0.462); /* Цвет фона при наведении */
}

.icon { 
  width: 20px; /* Ширина иконки */
  height: 20px; /* Высота иконки */
}

.todoColumn { 
  color: black;
  background-color: aliceblue;
}

.input-container {
  flex: 1; /* Занимает доступное пространство в центре */
  display: flex;
  justify-content: center; /* Центрирует input-панель */
}

.input-panel {
  margin-bottom: 0px;
  width: 200px; /* Ширина панели ввода */
  padding: 10px; /* Отступы внутри */
  font-weight: lighter; /* Жирный шрифт */
  font-size: 12px; /* Размер шрифта */
  border: 2px solid rgba(255, 255, 255, 0.5); /* Полупрозрачная рамка */
  border-radius: 5px; /* Закругленные углы */
  background-color: rgba(255, 255, 255, 0.6); /* Полупрозрачный фон */
  color: #333; /* Цвет текста */
  transition: border-color 0.3s; /* Плавный переход для рамки */
}

.input-panel::placeholder {
    color: rgba(0, 0, 0, 0.5); /* Цвет текста плейсхолдера */
}

.input-panel:focus {
    border-color: rgba(95, 95, 95, 0.4); /* Цвет рамки при фокусе */
    outline: none; /* Убираем стандартный контур */
}

@media (min-width=1px) { 
  :root { 
    width: auto;
    height: auto;
  }
}


</style>
