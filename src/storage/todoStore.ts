import { ref, watch } from 'vue';
import type { Ref } from 'vue'

// Определяем интерфейс сущности Todo, который будет реализовывать обьект сущности
export interface Todo { 
  checked: boolean
  id: number;
  content: string | null
}

// Определяем тип с массивом обьектов Todo, либо пустым массивом
export type Todos = Todo[]

export function useTodoStore() { 
  // Получаем по ключу значение из хранилища в формате JSON, которое преобразуем в тип Ref<Todos>
  const todos = ref(JSON.parse(localStorage.getItem('todos') ?? "[]")) as Ref<Todos>

  // Сохранение задач в локальное хранилище при изменении
  watch(todos, (newTodos) => { 
    localStorage.setItem('todos', JSON.stringify(newTodos))
  });
  // Созранение новой сущность
  const addTodo = (content: string | null): void => { 
    const newTodo: Todo = {
      checked: false, 
      id: Date.now(),
      content
    };
    // Тупо добавляем его в массив
    todos.value.push(newTodo) 
    console.log(todos.value)
  };
  // Функция удаления по айди
  const removeTodo = (todos: Todos, id: number):void => { 
    if (Array.isArray(todos)) {
      const index = todos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        todos.splice(index, 1);
      }
    } else {
      console.error('todos.value не является массивом:', todos);
    }
  };

  return { 
    todos, 
    addTodo,
    removeTodo
  }
}