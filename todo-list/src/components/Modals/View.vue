<template>
    <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
        <div class="bg-white p-6 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/3">
            <h2 class="text-xl font-bold mb-4">Task Details</h2>

            <div class="mb-2">
                <p><strong>Title:</strong> {{ todo.title }}</p>
            </div>

            <div class="mb-2">
                <p><strong>Description:</strong></p>
                <p class="whitespace-pre-wrap">{{ todo.description }}</p> <!-- Updated with pre-wrap -->
            </div>

            <div class="mb-2">
                <p><strong>Status:</strong> 
                    <span :class="{ 'text-green-500': todo.completed, 'text-red-500': !todo.completed }">
                        {{ todo.completed ? 'Done' : 'Pending' }}
                    </span>
                </p>
            </div>

            <div class="mb-2">
                <p><strong>Created Date:</strong> {{ formatDate(todo.createdAt) }}</p>
            </div>

            <div class="mb-2">
                <p><strong>Done Date:</strong> {{ todo.completed ? formatDate(todo.doneAt) : 'N/A' }}</p>
            </div>

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