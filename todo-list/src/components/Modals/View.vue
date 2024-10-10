<template>
    <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div class="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 class="text-xl font-bold mb-4">Task Details</h2>

            <p><strong>Title:</strong> {{ todo.title }}</p>
            <p><strong>Description:</strong> {{ todo.description }}</p>
            <p><strong>Status:</strong> {{ todo.completed ? 'Done' : 'Pending' }}</p>
            <p><strong>Created Date:</strong> {{ formatDate(todo.createdAt) }}</p>
            <p><strong>Done Date:</strong> {{ todo.completed ? formatDate(todo.doneAt) : 'N/A' }}</p>

            <div class="flex justify-end mt-4">
                <button @click="$emit('close')"
                    class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
                    Close
                </button>
            </div>
        </div>
    </div>
</template>
<script src="./View"></script>
<style>
@import './View.css';
</style>