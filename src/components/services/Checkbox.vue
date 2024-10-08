<template>
  <div>
    <input type="checkbox" :id="id" class="checkbox" v-model="localChecked">
    <label :for="id" class="checkmark"></label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits();

const localChecked = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});
</script>

<style scoped>

.checkmark { 
  float: left; /* Плаваем влево */
  margin-right: 10px; /* Отступ справа от метки */
  display: flex;
  width: 20px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.5); 
  border: 2px solid rgb(110, 107, 107); 
  border-radius: 50%; 
  position: relative;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
}

.checkbox:checked + .checkmark {
    background-color: rgba(255, 255, 255, 0.5); 
    border-color: white; 
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.checkbox:checked + .checkmark:after {
    display: block;
}

.checkmark:after {
    left: 9px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

.checkbox {
  display: none; 
}

</style>