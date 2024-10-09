<script setup lang="ts">
import TodoList from "./components/TodoList.vue";
import InputPanel from "./components/services/InputPanel.vue";
import { ref } from "vue";
import type { Ref } from "vue";
// import { maxLenghtTodo_CONFIG } from "./config.ts"
import { useTodoStore } from "./storage/todoStore.ts";
import type { Todos } from "./storage/todoStore.ts";
import AddTodoIcon from "./components/UI/Icons/AddTodo/AddTodoIcon.vue";

const { todos, addTodo } = useTodoStore();
// Инжект потом попробуй
// const typedTodos = todos as Ref<Todos>;

const modalActive: Ref<Boolean> = ref(false);
// modal выступает в качестве ссылки на инпут-компонент, и здесь же проверка, указывает ли он на компонент либо он равен нулю
// И присваиваем ему ноль с начала выполнения скрипта, так как в родительский он еще не передался
const modal = ref<InstanceType<typeof InputPanel> | null>(null);

const showModal = () => {
  if (modal.value) modal.value.openModal();
};
</script>

<template>
  <header>
    <h2>Todo-list</h2>
    <button @click="showModal"></button>
    <InputPanel ref="modal" />
    <button @click="console.log(todos)"></button>
    <!-- <div
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
    </div> -->
    <button
      @click="modalActive = !modalActive"
      class="add-todo-button"
    >
      <AddTodoIcon :additionalClass="'icon'" />
    </button>
  </header>
  <div class="todoColumn">
    <TodoList :todos="todos" />
  </div>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: rgba(255, 0, 0, 0.8);
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
@media (min-width=1px) {
  :root {
    width: auto;
    height: auto;
  }
}
</style>
