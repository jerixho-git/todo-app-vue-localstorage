<template>
    <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div class="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 class="text-xl font-bold mb-4">
                {{ isEditMode ? 'Edit Task' : 'Add New Task' }}
            </h2>

            <!-- Task title input -->
            <input v-model="taskTitle" type="text" class="border border-gray-300 p-2 w-full mb-4"
                placeholder="Enter task title" />

            <!-- Task description input -->
            <textarea v-model="taskDescription" class="border border-gray-300 p-2 w-full mb-4"
                placeholder="Enter task description"></textarea>

            <div class="flex justify-end">
                <button @click="$emit('close')"
                    class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200">
                    Cancel
                </button>
                <button @click="handleConfirm"
                    class="bg-blue-500 text-white px-4 py-2 rounded ml-2 hover:bg-blue-600 transition duration-200">
                    {{ isEditMode ? 'Save' : 'Add' }}
                </button>
            </div>
        </div>
    </div>
</template>
<script src="./Modal"></script>
<style>
@import './Modal.css';
</style>