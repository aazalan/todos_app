<script lang="ts">
  import {defineComponent} from "vue";
  import TodoList from "@/components/TodoList.vue";
  import type {Todo} from "@/types/main";
  import {getTodos} from "@/helpers/getTodos";
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

      replaceToDoneList(replacingTodo: Todo) {
        this.doneTodos.unshift(replacingTodo);
        this.actualTodos = this.actualTodos.filter(todo => todo.id !== replacingTodo.id);
      },

      replaceToNotDoneList(replacingTodo: Todo) {
         this.actualTodos.push(replacingTodo);
         this.doneTodos = this.doneTodos.filter(todo => todo.id !== replacingTodo.id);
      },
    }
  });
</script>

<template>
  <TodoCreator />

  <TodoList :todos="actualTodos" @on-status-change="replaceToDoneList"/>
  <TodoList :todos="doneTodos"  @on-status-change="replaceToNotDoneList" :isDone="true"/>
</template>

<style scoped>

</style>
