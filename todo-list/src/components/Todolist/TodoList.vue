<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">My To-Do List</h1>
        <form @submit.prevent="addTodo" class="flex mb-4">
            <input type="text" v-model="newTodo" placeholder="Add a new task" class="border p-2 flex-1" />
            <button type="submit" class="bg-blue-500 text-white p-2 ml-2">Add</button>
        </form>
        <ul>
            <li v-for="(todo, index) in todos" :key="todo.id" class="flex justify-between mb-2">
                <span :class="{ 'line-through': todo.completed }">{{ todo.text }}</span>
                <div>
                    <button @click="editTodo(index)" class="bg-yellow-500 text-white p-1 mr-2">Edit</button>
                    <button @click="deleteTodo(index)" class="bg-red-500 text-white p-1">Delete</button>
                    <button @click="toggleComplete(index)" class="bg-green-500 text-white p-1">
                        {{ todo.completed ? 'Undo' : 'Complete' }}
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script src="./TodoList"></script>

<style>
@import './TodoList.css';
</style>