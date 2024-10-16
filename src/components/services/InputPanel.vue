<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <input type="date" class="input-date" v-model="newTodoDate"/> 
      <input type="text" v-model="newTodoContent" placeholder="Введите текст" class="input_panel" @keyup.enter="addNewTodo" />
      <div class="btn_container">
        <button @click="addNewTodo">Добавить</button>
        <button @click="closeModal">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue' 
import { ref } from 'vue';
import { useTodoStore } from '../../storage/todoStore.ts';

const newTodoDate = ref() as Ref<Date | null>
const { addTodo } = useTodoStore()
const newTodoContent: Ref<string | null> = ref('')
const isVisible = ref(false);

function addNewTodo() { 
  if (newTodoContent.value, newTodoDate.value) {
    addTodo(newTodoContent.value, newTodoDate.value);
    console.log(newTodoDate.value)
    newTodoContent.value = null;
    newTodoDate.value = null;
    closeModal() 
  }
}

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
.input-date {
  width: auto;
  height: auto;

}

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

.btn_container { 
  display: flex;
  justify-content: space-between; 
  width: 100%; 
  max-width: 100%; 
  margin-bottom: 0px;
}

button { 
  text-align: center;
  background-color: white;
  color:#333;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 10px;
  
}

.modal-content {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 120px;
  
}

.input_panel { 
  max-width: 100%;
  margin-bottom: 15px;
  width: 290px; 
  padding-left: 6px; 
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: bold; 
  font-size: 16px; 
  border: 2px solid rgba(0, 0, 0, 0.5); 
  border-radius: 5px; 
  background-color: rgba(255, 255, 255, 0.6); 
  color: #333;
  transition: border-color 0.3s; 
}

.input_panel::placeholder {
    color: rgba(0, 0, 0, 0.5); 
}

.input-panel:focus {
    border-color: rgba(95, 95, 95, 0.4); 
    outline: none; 
}

</style>