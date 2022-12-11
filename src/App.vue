<template>
  <div class="todo_container">
    <h2>Todo_List</h2>
    <Header @addList="addList" />
    <List :todos="data.todos" @delItem="delItem" @updateTodo="updateTodo" />
    <Footer :todos="data.todos" />
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  import Footer from './components/Footer.vue'
  import Header from './components/Header.vue'
  import List from './components/List.vue'
  import {Todo} from './types/Todo'

  const data = reactive<{todos: Todo[]}>({
    todos: [
      {id: 1, title: '新任务', isCompeleted: false},
      {id: 2, title: '完成的任务', isCompeleted: true}
    ]
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
</script>

<style scoped>
  .todo_container {
    border: 2px solid #fff;
    width: 50vw;
    height: 80vh;
  }
</style>
