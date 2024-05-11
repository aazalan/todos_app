<script lang="ts">
  import {defineComponent} from "vue";
  import TodoList from "@/components/TodoList.vue";
  import type {Todo} from "@/types/main";
  import {getTodos} from "@/helpers/getTodos";
import { todo } from "node:test";
  import TodoCreator from "@/components/TodoCreator.vue";

  export default defineComponent({
    components: {
      TodoCreator,
      TodoList,
    },

    data() {
      return {
        actualTodos: [] as Todo[],
        doneTodos: [] as Todo[],
      }
    },

    async created() {
      const todos = await this.getTodos();
      this.actualTodos.push(...todos.filter(todo => !todo.isDone));
      this.doneTodos.push( ...todos.filter(todo => todo.isDone));
    },

    methods: {
       async getTodos(): Promise<Todo[]> {
        return await getTodos();
      },
    }
  });
</script>

<template>
  <TodoCreator />

  <TodoList :todos="actualTodos" />
  <TodoList :todos="doneTodos" :isDone="true"/>
</template>

<style scoped>

</style>
