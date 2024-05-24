<script lang="ts">
  import {defineComponent} from 'vue';
  import type {PropType} from "vue";
  import type {Todo} from "@/types/main";

  export default defineComponent({
    props: {
      todos: Object as PropType<Todo[]>,
      isDone: Boolean,
    },

    emits: {
      onStatusChange: (todo: Todo) => true,
      deleteTodo: (todo: Todo) => true,
    },
  });
</script>

<template>
  <div class="todo-list" :class="{'done-todo-list': isDone}">
    <div class="todo-task" v-for="todo in todos" :key="todo.id" :class="`todo-${todo.type}`">
      <div>
        <input type="checkbox" name="isDone" id="isDone" v-model="todo.isDone" @change="$emit('onStatusChange', todo)"/>
        <span :class="{'crossed-text': isDone}">{{ todo.text }}</span>
      </div>
      <i class="pi pi-trash todo-delete-icon" @click="$emit('deleteTodo', todo)"></i>
    </div>
  </div>
</template>

<style scoped>
  .crossed-text {
    text-decoration: line-through;
  }

  .todo-list {
    margin: 15px;
    padding: 10px 0;
  }

  .done-todo-list {
    border-top: 1px solid #525860;
  }

  .todo-task {
    display: flex;
    justify-content: space-between;
  }

  .todo-delete-icon {
    align-self: center;
    cursor: pointer;
  }

  .todo-delete-icon:hover {
    color: #525860;
  }
</style>