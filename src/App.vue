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
        todos: [] as Todo[],
      }
    },

    async created() {
      this.todos = await this.getTodos();
      this.actualTodos.push(...this.todos.filter(todo => !todo.isDone));
      this.doneTodos.push( ...this.todos.filter(todo => todo.isDone));
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

      deleteTodo(deletingTodo: Todo) {
        if (deletingTodo.isDone) {
          this.doneTodos = this.doneTodos.filter(todo => todo.id !== deletingTodo.id);
        } else {
          this.actualTodos = this.actualTodos.filter(todo => todo.id !== deletingTodo.id);
        }
      },

      addTodo(todo: Todo) {
        const newTodoId = this.todos.reduce((max, obj) => obj.id > max.id ? obj : max, this.todos[0]).id + 1;
        this.todos.push({...todo, id: newTodoId});
        this.actualTodos.push({...todo, id: newTodoId});
      }
    }
  });
</script>

<template>
  <TodoCreator @add-todo="addTodo" />

  <TodoList :todos="actualTodos" @on-status-change="replaceToDoneList" @delete-todo="deleteTodo" />
  <TodoList v-if="doneTodos.length > 0" :todos="doneTodos"  @on-status-change="replaceToNotDoneList" @delete-todo="deleteTodo" :isDone="true" />
</template>

<style scoped>

</style>
