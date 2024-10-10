import Modal from '@/components/Modals/Modal.vue';
import ModalView from '@/components/Modals/View.vue';

export default {
  components: { Modal, ModalView },
  data() {
    return {
      todos: [], // Your to-do items
      isModalVisible: false,
      isViewModalVisible: false,
      isEditMode: false,
      currentTodoIndex: null,
      currentTodoTitle: '',
      currentTodoDescription: '',
      viewTodo: null, // Task to be viewed
    };
  },
  created() {
    this.loadTodos();
  },
  methods: {
    loadTodos() {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        this.todos = JSON.parse(storedTodos);
      }
    },
    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    openModal(todo = null, index = null) {
      this.isModalVisible = true;
      this.isEditMode = !!todo;
      if (todo) {
        this.currentTodoTitle = todo.title;
        this.currentTodoDescription = todo.description;
        this.currentTodoIndex = index;
      } else {
        this.currentTodoTitle = '';
        this.currentTodoDescription = '';
        this.currentTodoIndex = null;
      }
    },
    closeModal() {
      this.isModalVisible = false;
    },
    openViewModal(todo) {
      this.viewTodo = todo;
      this.isViewModalVisible = true;
    },
    closeViewModal() {
      this.isViewModalVisible = false;
    },
    updateTodo({ title, description }) {
      if (this.isEditMode && this.currentTodoIndex !== null) {
        this.todos[this.currentTodoIndex].title = title;
        this.todos[this.currentTodoIndex].description = description;
      } else {
        this.todos.push({
          id: Date.now(),
          title,
          description,
          completed: false,
          createdAt: new Date().toISOString(),
          doneAt: null,
        });
      }
      this.saveTodos(); // Save to local storage after update
      this.closeModal();
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
      this.saveTodos(); // Save to local storage after deletion
    },
    toggleComplete(index) {
      const todo = this.todos[index];
      todo.completed = !todo.completed;
      todo.doneAt = todo.completed ? new Date().toISOString() : null;
      this.saveTodos(); // Save to local storage after toggling
    },
    formatDate(date) {
      return new Date(date).toLocaleString();
    }
  }
};