<template>
  <div>Composition</div>

  <p>{{ state.count }}</p>
  <button @click="decrease">-</button>
  <button @click="increase">+</button>

  <hr />
  <todo-input @add-todo="addTodo" />
  <div :key="todo" v-for="todo in state.todos">
    {{ todo.id }}: {{ todo.text }}
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
import { TodoItem } from "@/types";
import TodoInput from "@/components/TodoInput.vue";

export default {
  components: {
    TodoInput
  },
  setup() {
    /**
     * reactive state object
     */
    const state = reactive({
      count: 0,
      todos: [] as TodoItem[]
    });

    /**
     * Counter related
     */
    const increase = () => {
      state.count++;
    };
    const decrease = () => {
      state.count--;
    };

    /**
     * Todos related
     */
    const addTodo = (item: TodoItem) => {
      state.todos.push(item);
    };

    const removeTodo = (id: number) => {
      const i = state.todos.findIndex(item => item.id == id);
      state.todos.splice(i, 1);
    };

    // explicit set of data to be exposed
    return {
      state,
      increase,
      decrease,
      addTodo,
      removeTodo
    };
  }
};
</script>
