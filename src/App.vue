<script setup lang="ts">
import TodoList from "./components/TodoList.vue";
import { provide, ref } from "vue";
import type { Ref } from "vue";
import { removeTodo_Key } from "./assets/keys.ts";

const maxLengthTodo_CONFIG = 5;

const itemTodo: Ref<String> = ref("");
const modalActive: Ref<Boolean> = ref(false);
const itemsTodo: Ref<String[]> = ref([]);

const addTodo = function () {
  if (itemsTodo.value.length < maxLengthTodo_CONFIG) {
    return itemsTodo.value.push(itemTodo.value);
  } else {
    return console.log("Maximum length of Todo");
  }
};

const deleteItem = function (index: number) {
  itemsTodo.value.splice(index, 1);
};

provide(removeTodo_Key, deleteItem);
</script>

<template>
  <div class="header">
    <h2>Todo-list</h2>
  </div>
  <div class="body">
    <h2>Todo Items</h2>
    <button
      @click="modalActive = !modalActive"
      class="todoButton"
    >
      Add new Todo
    </button>
    <button @click="console.log(itemsTodo)">CHeck</button>
  </div>
  <div
    class="input_template"
    v-if="modalActive"
  >
    <p>Что вы хотите сделать</p>
    <input
      type="text"
      v-model="itemTodo"
      placeholder="What u gonna do today"
      @keyup.enter="addTodo"
    />
  </div>
  <TodoList :todoList="itemsTodo" />
</template>

<style scoped>
.header {
  position: fixed;
  top: 0px;
  left: 30px;
  display: inline-flex;
}

.modal {
  display: flow-root;
}

.todoButton {
  border-radius: 5px;
}

.body {
  display: inline-flex;
}
</style>
