<template>
    <div class="todo_header">
        <div style="line-height: 60px">
            <input 
                style="width: 80%;height: 30px;margin: auto" 
                type="text" 
                placeholder="请输入要完成的任务, 按回车确认" 
                v-model="input_value"
                @keyup.enter="add"
            >
        </div>
    </div>
</template>

<script setup="props" lang="ts">
import { ref, reactive, onMounted, defineProps, defineEmits } from 'vue';
const emits = defineEmits(['addList'])
/**
* 数据部分
*/
const input_value = ref('')
const data = reactive({})
const add = (props: any) => {
    if (!input_value.value.trim()) {
        return
    }
    const todo = {
        id: Date.now(),
        title: input_value.value,
        isCompeleted: false
    }    
    // 调用方法
    emits('addList', todo)
    // 清空文本框
    input_value.value = ''
}
onMounted(() => {
})


</script>
<style scoped>
.todo_header {
    /* border: 1px solid #c7c7c7; */
    margin: 20px 40px;
    height: 60px;
}
</style>