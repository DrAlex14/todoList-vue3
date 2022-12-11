<template>
    <div class="list">
      <Item v-for="(todo, index) in todos" :key="todo.id" :index="index" :todo="todo" @delItem="delItem" @updateTodo="updateTodo" ></Item>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, defineProps, defineEmits } from 'vue';
import Item from './Item.vue'
import { Todo } from '../types/Todo'
/**
* 数据部分
*/
defineProps<{todos: Todo[]}>()
const emits = defineEmits(['delItem', 'updateTodo'])
const data = reactive({})

const delItem = (index: number) => {
  emits('delItem', index)
}

const updateTodo = (index: number, val: boolean) => {
  emits('updateTodo', index, val)
}

</script>
<style scoped>
.list {
  overflow: auto;
  height: 50vh;
}
</style>