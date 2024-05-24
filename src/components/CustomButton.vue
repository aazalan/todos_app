<script lang="ts">
  import {defineComponent} from 'vue';
  import type {PropType} from 'vue';
  import type {ButtonType} from "@/types/main";

  export default defineComponent({
    props: {
      color: {
        type: String as PropType<ButtonType>,
        default: "primary",
      },
      text: {
        type: String,
        default: 'Ok',
      }
    }
  });
</script>

<template>
  <button class="custom-button" :class="color">{{ text }}</button>
</template>

<style scoped>
  .custom-button {
    padding: 10px;
    border-radius: 5px;
    color: aliceblue;
    border: 0;
    margin: 5px;
    cursor: pointer;
  }
</style>