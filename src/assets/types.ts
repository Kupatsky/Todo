import type { InjectionKey } from "vue";
export type removeTodoFunc = (index: number) => void;

export const removeTodo_Key = Symbol() as InjectionKey<removeTodoFunc>;
