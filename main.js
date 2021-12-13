const app = new Vue({
  el: "#app",
  data: {
    // 使用するデータ
  },
  methods: {
    // 使用するメソッド
  },
});

var STRAGE_KEY = "todos-vuejs-demo";
var todoStrage = {
  fetch: function () {
    var todos = JSON.parse(localStorage.getItem(STRAGE_KEY) || "[]");
    todos.forEach(function (todo, index) {
      todo.id = index;
    });
    todoStrage.uid = todos.length;
    return todos;
  },
  save: function (todos) {
    localStorage.setItem(STRAGE_KEY, JSON.stringify(todos));
  },
};
