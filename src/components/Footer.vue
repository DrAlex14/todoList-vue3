<template>
    <div class="footer">
      <div style="line-height: 36px">
        <input type="checkbox">
        <span>已完成{{compeletedMissions}}/全部{{allMissions}}</span>
      </div>
      <button>清除已完成任务</button>
    </div>
</template>
<script setup lang="ts">
import {ref, defineProps, computed} from 'vue'
import {Todo} from '../types/Todo'

const props = defineProps<{todos: Todo[]}>()
const compeletedMissions = computed(() => {
  let count = 0
  props.todos.map(i => {
    i.isCompeleted === true ? count++ : null
  })
  return count
})
const allMissions = computed(() => {
  return props.todos.length
})
</script>
<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  margin: 0 40px;
}
</style>
