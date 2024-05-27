import { createSlice } from "@reduxjs/toolkit";
// Load tasks from local storage if available, otherwise use an empty array
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
const initialState = {
  todos: savedTodos,
  toggleForm: true,
  todoUpdate: {},
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    todosAdded: (state, action) => {
      state.todos = [...state.todos, action.payload];
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    todosCleared: (state) => {
      state.todos = [];
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    todoDeleted: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    todoToggleform: (state, action) => {
      state.toggleForm = !state.toggleForm;
      state.todoUpdate = { ...state.todoUpdate, ...action.payload };
    },
    todoUpdated: (state, action) => {
      const todoToUpdate = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      todoToUpdate.name = action.payload.name;
      state.toggleForm = !state.toggleForm;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});
export const {
  todosAdded,
  todosCleared,
  todoDeleted,
  todoToggleform,
  todoUpdated,
} = todoSlice.actions;
export default todoSlice.reducer;
