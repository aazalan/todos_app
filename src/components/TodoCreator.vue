<script lang="ts">
  import {defineComponent} from 'vue';
  import type {Todo, todoType} from '@/types/main';
  import CustomButton from "@/components/CustomButton.vue";
  export default defineComponent({
    components: {CustomButton},
    data() {
        return {
          types: {
            default: 'Без временных ограничений',
            timeframed: 'С временными ограничениями',
            urgent: 'Срочная, выполнить сегодня',
          },
          newTodo: {type: 'default'} as Todo,
        };
    },

    methods: {
      createTodo() {

      }
    }
  });
</script>

<template>
  <div>
    <form @submit.prevent="createTodo">
      <input class="todo-text-input" type="text" id="name" name="text" v-model="newTodo.text">
      <select class="todo-select" name="type" id="type" v-model="newTodo.type">
        <option v-for="[typeName, typeValue] in Object.entries(types)" :value="typeName">{{typeValue}}</option>
      </select>

      <CustomButton text="Создать" color="primary" />
    </form>
  </div>
</template>

<style scoped>
  .todo-text-input {
    padding: 10px;
    border-radius: 5px;
    margin: 5px;
  }

  .todo-select {
    padding: 10px;
    border-radius: 5px;
    margin: 5px;
  }
</style>