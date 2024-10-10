<template>
    <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold mb-6 text-center">My Todo List</h1>

        <!-- Button to add new task -->
        <div class="flex justify-end mb-4">
            <button @click="openModal()"
                class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200">
                Add New Task
            </button>
        </div>

        <!-- Task table -->
        <div class="overflow-x-auto">
            <table class="min-w-full bg-white border rounded-lg shadow-lg">
                <thead class="bg-gray-200 text-gray-600 text-sm uppercase font-bold">
                    <tr>
                        <th class="py-3 px-6 text-left">#</th>
                        <th class="py-3 px-6 text-left text-center">Title</th>
                        <th class="py-3 px-6 text-left text-center">Status</th>
                        <th class="py-3 px-6 text-left text-center">Created Date</th>
                        <th class="py-3 px-6 text-left text-center">Done Date</th>
                        <th class="py-3 px-6 text-left text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(todo, index) in todos" :key="todo.id" class="border-b hover:bg-gray-100">
                        <td class="py-3 px-6">{{ index + 1 }}</td>
                        <td class="py-3 px-6"><span :class="{ 'line-through': todo.completed }">{{ todo.title }}</span>
                        </td>
                        <td class="py-3 px-6 text-center">
                            <span :class="{ 'text-green-500': todo.completed, 'text-red-500': !todo.completed }">
                                {{ todo.completed ? 'Done' : '' }}
                            </span>
                        </td>
                        <td class="py-3 px-6 text-center">{{ formatDate(todo.createdAt) }}</td>
                        <td class="py-3 px-6 text-center">{{ todo.completed ? formatDate(todo.doneAt) : 'N/A' }}</td>
                        <td class="py-3 px-6 text-center">
                            <button @click="openViewModal(todo, index)"
                                class="bg-blue-500 text-white p-1 rounded hover:bg-blue-600 transition duration-200 mr-2"
                                title="View Task">
                                <i class="fas fa-eye"></i>
                            </button>

                            <button @click="openModal(todo, index)"
                                class="bg-yellow-500 text-white p-1 rounded hover:bg-yellow-600 transition duration-200 mr-2"
                                title="Edit Task">
                                <i class="fas fa-pencil-alt"></i>
                            </button>

                            <button @click="toggleComplete(index)"
                                class="bg-green-500 text-white p-1 rounded hover:bg-green-600 transition duration-200 mr-2"
                                title="Toggle Completion">
                                <i class="fas" :class="todo.completed ? 'fa-undo' : 'fa-check'"></i>
                            </button>

                            <button @click="deleteTodo(index)"
                                class="bg-red-500 text-white p-1 rounded hover:bg-red-600 transition duration-200 mr-2"
                                title="Delete Task">
                                <i class="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Modal for add/edit -->
        <Modal :isVisible="isModalVisible" :isEditMode="isEditMode" :initialValue="currentTodoTitle"
            :descriptionValue="currentTodoDescription" :doneAt="todos[currentTodoIndex]?.doneAt" @confirm="updateTodo"
            @close="closeModal" />

        <!-- Modal for view -->
        <ModalView :isVisible="isViewModalVisible" :todo="viewTodo" @close="closeViewModal" />
    </div>
</template>

<script src="./TodoList.js"></script>


<style>
/* Add your custom styles here */
</style>
