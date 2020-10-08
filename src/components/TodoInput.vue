<template>
  <form @submit.prevent="addTodo">
    <input type="text" name="title" v-model="todoText" placeholder="Add todo" />
    <input type="submit" value="Add to list" />
  </form>
</template>

<script lang="ts">
import { TodoItem } from "@/types";
import { ref } from "vue";
export default {
  emits: ["add-todo"],

  setup(props: any, context: any) {
    const todoText = ref("");

    const addTodo = () => {
      if (!todoText.value) {
        alert("Please input todo title");
        return;
      }

      const item: TodoItem = {
        id: Date.now(),
        text: todoText.value
      };

      context.emit("add-todo", item);
      todoText.value = "";
    };

    return {
      todoText,
      addTodo
    };
  }
};
</script>
