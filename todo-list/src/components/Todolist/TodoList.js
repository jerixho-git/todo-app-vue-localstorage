export default {
    data() {
        return {
            newTodo: '',
            todos: []
        };
    },
    created() {
        this.loadTodos();
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim() === '') return;

            const newTodoItem = {
                id: Date.now(),  // Unique ID based on timestamp
                text: this.newTodo,
                completed: false
            };

            this.todos.push(newTodoItem);
            this.newTodo = '';
            this.saveTodos();
        },
        editTodo(index) {
            const updatedText = prompt('Edit task:', this.todos[index].text);
            if (updatedText !== null) {
                this.todos[index].text = updatedText;
                this.saveTodos();
            }
        },
        deleteTodo(index) {
            this.todos.splice(index, 1);
            this.saveTodos();
        },
        toggleComplete(index) {
            this.todos[index].completed = !this.todos[index].completed;
            this.saveTodos();
        },
        saveTodos() {
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        loadTodos() {
            const storedTodos = localStorage.getItem('todos');
            if (storedTodos) {
                this.todos = JSON.parse(storedTodos);
            }
        }
    }
};