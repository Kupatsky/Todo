import { defineStore } from "pinia";
import { ref, watch } from "vue";
import type { Ref } from "vue";
import { useToast } from 'primevue/usetoast';

// Определяем интерфейс сущности Todo, который будет реализовывать обьект сущности
export interface Todo {
  checked: boolean;
  id: number;
  content: string | null;
  date: string | null
}

// Определяем тип с массивом обьектов Todo, либо пустым массивом
export type Todos = Todo[];

export const useTodoStore = defineStore("todoStore", () => {

  const toast = useToast();
  // Получаем по ключу значение из хранилища в формате JSON, которое преобразуем в тип Ref<Todos>
  const todos: Ref<Todos> = ref(
    JSON.parse(localStorage.getItem("todos") ?? "[]")
  );

  // Сохранение задач в локальное хранилище при изменении
  watch(todos, (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  });

watch(
		() => todos.value.length,
		(newTodos, oldTodos) => {
			if (newTodos > oldTodos) {
				toast.add({
					severity: 'success',
					summary: 'Готово!',
					detail: 'Новая сущность добавлена',
					life: 3000,
				});
			} else if (newTodos < oldTodos) {
				toast.add({
					severity: 'error',
					summary: 'Внимание!',
					detail: 'Вы удалили сущность',
					life: 3000,
				});
			} else {
				toast.add({
					severity: 'warn',
					summary: 'Готово!',
					detail: 'Error',
					life: 3000,
				});
			}
		},
    { deep: true}
	);



  // Созранение новой сущность
  const addTodo = (content: string | null, date: string | null): void => {
    const newTodo: Todo = {
      checked: false,
      id: Date.now(),
      content,
      date
    };
    // Тупо добавляем его в массив
    todos.value.push(newTodo);
  };
  // Функция удаления по айди
  const removeTodo = (todos: Todos, id: number): void => {
    if (Array.isArray(todos)) {
      const index = todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        todos.splice(index, 1);
      }
    } else {
      console.error("todos.value не является массивом:", todos);
    }
  };

  return {
    todos,
    addTodo,
    removeTodo,
  };
});
