
<template>
    <li @mouseenter="handleMouse(true)" @mouseleave="handleMouse(false)">
        <label style="margin: auto 0">
            <input type="checkbox" v-model="isCompeleted">
            <span>{{todo.title}}</span>
        </label>
        <button v-show="buttonShow" @click="delItem">删除</button>
    </li>
</template>
<script setup='props' lang="ts">
import { defineProps, onMounted, ref, defineEmits, computed } from 'vue'
import { Todo } from '../types/Todo'

const props = defineProps<{
    todo: Todo
    index: number
}>()

const buttonShow = ref(false)

const handleMouse = (flag: boolean) => {
    buttonShow.value = flag
}
const emits = defineEmits(['delItem', 'updateTodo'])

const isCompeleted = computed({
    set(val){
        emits('updateTodo', props.index, val)
    },
    get(){
        return props.todo.isCompeleted
    }
})

const delItem = () => {
    if (window.confirm('确定要删除任务吗？')) {
        // emits('delItem', props.todo.id)
        emits('delItem', props.index)
    }
}

</script>
<style scoped>
li {
    margin: 0 40px;
    border: 2px solid #fff;
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 4px;
}
li:hover {
    background: #001f2f;
}
</style>
