<template>
  <div>Options</div>

  <p>{{ count }}</p>
  <button @click="decrease">-</button>
  <button @click="increase">+</button>

  <hr />
  <todo-input @add-todo="addTodo" />
  <div :key="todo" v-for="todo in todos">{{ todo.id }}: {{ todo.text }}</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TodoInput from "@/components/TodoInput.vue";
import { TodoItem } from "@/types";

@Options({
  components: {
    TodoInput
  }
})
export default class OtherSample extends Vue {
  count = 0;
  todos: TodoItem[] = [];

  /**
   * count related
   */
  increase() {
    this.count++;
  }
  decrease() {
    this.count--;
  }

  /**
   * Todo related
   */
  addTodo(item: TodoItem) {
    this.todos.push(item);
  }

  removeTodo(id: number) {
    const i = this.todos.findIndex(item => item.id == id);
    this.todos.splice(i, 1);
  }
}
</script>
