<script setup lang="ts">
import TodoList from "./components/TodoList.vue";
import { provide, ref } from "vue";
import type { Ref } from "vue";
import { removeTodo_Key } from "./assets/keys.ts";

/* 
  Зачем это тут, если есть переменна в конфиге
*/
const maxLengthTodo_CONFIG = 5;

const itemTodo: Ref<String> = ref("");
const modalActive: Ref<Boolean> = ref(false);
const itemsTodo: Ref<String[]> = ref([]);

/* 
  В этой функции ты просто добавляешь в тудулист ещё одно тудулист
  Поэтому возвращать значение не надо (ты же результат выполнения никуда не присваиваешь)
*/
const addTodo = function () {
  if (itemsTodo.value.length < maxLengthTodo_CONFIG) {
    itemsTodo.value.push(itemTodo.value);
  } else {
    console.log("Maximum length of Todo");
  }
};

const deleteItem = function (index: number) {
  itemsTodo.value.splice(index, 1);
};

provide(removeTodo_Key, deleteItem);

/* 
  В строчках 48 | 53 сделать как в строчке 66 -> функции лучше вынести в отдельные которые будут в script 
  Потому что ты заебешься менять функции внутри шаблона
  Плюсом в template содержаться должна только верстка, а в script только логика 
*/
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
