<template>
  <div class="todo_container">
    <h2>Todo_List</h2>
    <Header @addList="addList" />
    <List :todos="data.todos" @delItem="delItem" @updateTodo="updateTodo" />
    <Footer :todos="data.todos" @setAllCheck="setAllCheck" @clearAllCompeletedTodo="clearAllCompeletedTodo" />
  </div>
</template>

<script setup lang="ts">
  import { onMounted, reactive, watch, toRefs } from 'vue'
  import Footer from './components/Footer.vue'
  import Header from './components/Header.vue'
  import List from './components/List.vue'
  import {Todo} from './types/Todo'
  import {saveTodos, readTodos} from './util/localStroageUtil'

  const data = reactive<{todos: Todo[]}>({
    // todos: [
    //   {id: 1, title: '新任务', isCompeleted: false},
    //   {id: 2, title: '完成的任务', isCompeleted: true}
    // ]
    todos: []
  })
  const addList = (todo: Todo) => {
    data.todos.unshift(todo)
  }

  const delItem = (index: number) => {
    // for (let i = 0; i < data.todos.length; i++) {
    //   if (data.todos[i].id === id) {
    //     data.todos.splice(i, 1)
    //   }
    // }
    data.todos.splice(index, 1)
  }

  // 修改todos中todo中的compeleted状态
  const updateTodo = (index: number, val: boolean) => {
    data.todos[index].isCompeleted = val
  }

  const setAllCheck = (checkState: boolean) => {
    data.todos.forEach(todo => {
      todo.isCompeleted = checkState
    })
  }

  const clearAllCompeletedTodo = () => {
    data.todos = data.todos.filter(todo => !todo.isCompeleted)
  }

  onMounted(() => {
    data.todos = readTodos()
  })

  watch(()=>data.todos, saveTodos, {deep: true})

</script>

<style scoped>
  .todo_container {
    border: 2px solid #fff;
    width: 50vw;
    height: 80vh;
  }
</style>
