<template>
  <Transition name="fade">
    <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <input type="date" class="input-date" v-model="newTodoDate" /> 
        <input type="text" v-model="newTodoContent" placeholder="Введите текст" class="input_panel" @keyup.enter="addNewTodo" />
        <div class="btn_container">
          <button @click="addNewTodo">Добавить</button>
          <button @click="closeModal">Закрыть</button>
        </div>  
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import type { Ref } from 'vue' 
import { ref } from 'vue';
import { useTodoStore } from '../../storage/todoStore.ts';

export type TodoDate = Ref<Date>   
export type TodoContent = Ref<string | null>

const todoDate: Ref<string> = ref('')
const newTodoDate: TodoDate = ref(new Date())
// const formatedDate: TodoDate = ref(null)
const { addTodo } = useTodoStore()
const newTodoContent: TodoContent = ref('')
const isVisible = ref(false);


function addNewTodo() { 
  if (newTodoContent.value, newTodoDate.value) {
    formatDate(todoDate)
    addTodo(newTodoContent.value, todoDate.value);
    newTodoContent.value = null;
    closeModal() 
  }
}

function formatDate(todoDate: Ref<string>): void { 
  const inputDate = new Date(newTodoDate.value) 
  const todoMonth = String(inputDate.getMonth() + 1);
  const todoOfDate = String(inputDate.getDate()).padStart(2, '0')

  todoDate.value = `${todoOfDate}.${todoMonth}`
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
/* С помощью встроенного компонента transition добавим анимацию появления инпут-панели */
.fade-enter-active {
  transition: all 0.2s ease;
}

.fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.6, 0.6, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
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