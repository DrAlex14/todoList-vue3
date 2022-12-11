<template>
    <div class="footer">
      <div style="line-height: 36px">
        <input type="checkbox" v-model="isCheckAll">
        <span>已完成{{compeletedMissions}}/全部{{allMissions}}</span>
      </div>
      <button @click="() => {emits('clearAllCompeletedTodo')}">清除已完成任务</button>
    </div>
</template>
<script setup lang="ts">
import {ref, defineProps, computed, defineEmits} from 'vue'
import {Todo} from '../types/Todo'

const emits = defineEmits(['setAllCheck', 'clearAllCompeletedTodo'])
const props = defineProps<{todos: Todo[]}>()
const compeletedMissions = computed(() => {
  return props.todos.reduce((pre, todo) => pre + (todo.isCompeleted ? 1 : 0), 0)
})
const allMissions = computed(() => {
  return props.todos.length
})
const isCheckAll = computed({
  get() {
    return compeletedMissions.value > 0 && compeletedMissions.value === allMissions.value
  },
  set(val) {
    emits('setAllCheck', val)
  }
})
</script>
<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  margin: 0 40px;
}
</style>
