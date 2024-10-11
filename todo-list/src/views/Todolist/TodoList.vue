<template>
    <div class="container mx-auto p-4 max-w-full md:max-w-2xl lg:max-w-4xl">
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
                        <th class="py-3 px-2 sm:px-4 text-left">#</th>
                        <th class="py-3 px-2 sm:px-4 text-left text-center">Title</th>
                        <th class="py-3 px-2 sm:px-4 text-left text-center">Status</th>
                        <th class="py-3 px-2 sm:px-4 text-left text-center hidden sm:table-cell">Created Date</th>
                        <th class="py-3 px-2 sm:px-4 text-left text-center hidden sm:table-cell">Done Date</th>
                        <th class="py-3 px-2 sm:px-4 text-left text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(todo, index) in todos" :key="todo.id" class="border-b hover:bg-gray-100">
                        <td class="py-3 px-2 sm:px-4">{{ index + 1 }}</td>
                        <td class="py-3 px-2 sm:px-4"><span :class="{ 'line-through': todo.completed }">{{ todo.title
                                }}</span></td>
                        <td class="py-3 px-2 sm:px-4 text-center">
                            <span :class="{ 'text-green-500': todo.completed, 'text-red-500': !todo.completed }">
                                {{ todo.completed ? 'Done' : '' }}
                            </span>
                        </td>
                        <td class="py-3 px-2 sm:px-4 text-center hidden sm:table-cell">{{ formatDate(todo.createdAt) }}
                        </td>
                        <td class="py-3 px-2 sm:px-4 text-center hidden sm:table-cell">{{ todo.completed ?
                            formatDate(todo.doneAt) : 'N/A' }}</td>
                        <td class="py-3 px-2 sm:px-4 text-center">
                            <div class="flex justify-center gap-2">
                                <button @click="openViewModal(todo, index)"
                                    class="bg-blue-500 text-white p-1 rounded hover:bg-blue-600 transition duration-200"
                                    title="View Task">
                                    <i class="fas fa-eye"></i>
                                </button>

                                <button @click="openModal(todo, index)"
                                    class="bg-yellow-500 text-white p-1 rounded hover:bg-yellow-600 transition duration-200"
                                    title="Edit Task">
                                    <i class="fas fa-pencil-alt"></i>
                                </button>

                                <button @click="toggleComplete(index)"
                                    class="bg-green-500 text-white p-1 rounded hover:bg-green-600 transition duration-200"
                                    title="Toggle Completion">
                                    <i class="fas" :class="todo.completed ? 'fa-undo' : 'fa-check'"></i>
                                </button>

                                <button @click="deleteTodo(index)"
                                    class="bg-red-500 text-white p-1 rounded hover:bg-red-600 transition duration-200"
                                    title="Delete Task">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
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
