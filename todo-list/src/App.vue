<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script>
import TodoList from './views/Todolist/TodoList.vue';

export default {
  components: {
    TodoList,
  },
};
</script>