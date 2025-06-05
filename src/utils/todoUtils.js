export const filterTodosByStatus = (todos, filter) => {
  return todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });
};

export const filterTodosByPriority = (todos, priorityFilter) => {
  return todos.filter((todo) => {
    if (priorityFilter !== "all") return todo.priority === priorityFilter;
    return true;
  });
};

export const sortTodos = (todos, sortBy) => {
  return todos.sort((a, b) => {
    if (sortBy === "priority") {
      const priorityValues = { Low: 1, Medium: 2, High: 3 };
      return priorityValues[b.priority] - priorityValues[a.priority];
    }
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
};
