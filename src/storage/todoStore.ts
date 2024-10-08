import { ref, watch } from 'vue';
import type { Ref } from 'vue'

// Определяем интерфейс сущности Todo, который будет реализовывать обьект сущности
export interface Todo { 
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
      id: Date.now(),
      content
    };
    // Тупо добавляем его в массив
    todos.value.push(newTodo) 
  };
  // Функция удаления по айди
  const removeTodo = (id: number) => { 
    console.log('Удаляем задачу с ID:', id);
    todos.value = todos.value.filter(todo => todo.id !== id);
    console.log('Текущий список задач:', todos.value);
  };

  return { 
    todos, 
    addTodo,
    removeTodo
  }
}