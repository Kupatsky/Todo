<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <h2>Модальное окно</h2>
      <input type="text" v-model="newTodoContent" placeholder="Введите текст" class="input_panel" @keyup.enter="addNewTodo" />
      <button @click="addNewTodo">Отправить</button>
      <button @click="console.log(newTodoContent)">Закрыть</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue' 
import { ref } from 'vue';
import { useTodoStore } from '../../storage/todoStore.ts'
const { addTodo } = useTodoStore()
const newTodoContent: Ref<string | null> = ref('')


const addNewTodo = () => {
  if (newTodoContent.value) {
    addTodo(newTodoContent.value);
    newTodoContent.value = null;
    closeModal() 
  }
};

const isVisible = ref(false);

const openModal = () => {
  isVisible.value = true;
};

const closeModal = () => {
  isVisible.value = false;
};

// Экспортируем функции для использования в родительском компоненте
defineExpose({ openModal });
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

.input_panel { 
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

.input_panel::placeholder {
    color: rgba(0, 0, 0, 0.5); /* Цвет текста плейсхолдера */
}

.input-panel:focus {
    border-color: rgba(95, 95, 95, 0.4); /* Цвет рамки при фокусе */
    outline: none; /* Убираем стандартный контур */
}

</style>