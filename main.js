const app = Vue.createApp({
  data() {
    return {
      newTodoText: "",
      todos: [
        {
          id: 1,
          title: "aaa",
        },
        {
          id: 2,
          title: "bbb",
        },
        {
          id: 3,
          title: "ccc",
        },
      ],
      nextTodoId: 4,
    };
  },
  methods: {
    addNewTodo() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
      });
      this.newTodoText = "";
    },
  },
});

app.component("todo-item", {
  template: `
    <li>
        {{ title }}
        <button @click="$emit('remove')">Remove</button>
</li>
    `,
  props: ["title"],
  emits: ["remove"],
});

app.mount("#app");
