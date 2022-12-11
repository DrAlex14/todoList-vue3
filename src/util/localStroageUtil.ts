import {Todo} from '../types/Todo'

export function saveTodos(todos: Todo[]) {
    localStorage.setItem('todo_key', JSON.stringify(todos))
}

export function readTodos() {
    return JSON.parse(localStorage.getItem('todo_key') || '[]')
}