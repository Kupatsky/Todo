<script setup lang="ts">
import TodoList from "./components/TodoList.vue";
import InputPanel from "./components/services/InputPanel.vue";
import { ref } from "vue";
import type { Ref } from "vue";
// import { maxLenghtTodo_CONFIG } from "./config.ts"
import { useTodoStore } from "./storage/todoStore.ts";
import AddTodoIcon from "./components/UI/Icons/AddTodo/AddTodoIcon.vue";

const { todos } = useTodoStore();
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
    <InputPanel ref="modal" />
    <button
      @click="modalActive = !modalActive"
      class="add-todo-button"
    >
      <AddTodoIcon 
        :additionalClass="'icon'"
        @click="showModal" 
      />
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
  justify-content: space-between; 
  padding: 0 20px;
  color: white;
  z-index: 1000;
}

header .title {
  flex: 1;
}

.add-todo-button {
  background-color: transparent; 
  border: none; 
  border-radius: 50%; 
  width: 40px; 
  height: 40px; 
  cursor: pointer; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  transition: background-color 0.3s; 
}

.add-todo-button:hover {
  background-color: rgba(255, 255, 255, 0.462);
}

.icon {
  width: 20px; 
  height: 20px; 
}

.todoColumn {
  color: black;
  background-color: aliceblue;
  display: flex;
  max-width: 100%;
}

.input-container {
  flex: 1; /* Занимает доступное пространство в центре */
  display: flex;
  justify-content: center; 
}
@media (min-width=1px) {
  :root {
    width: auto;
    height: auto;
  }
}
</style>
