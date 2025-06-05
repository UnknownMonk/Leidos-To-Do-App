# Todo App

A simple, filterable, and sortable Todo application built with **React** and bootstrapped using **Vite**. This app allows users to manage their tasks, filter by status and priority, sort by creation date or priority, and persist data using **localStorage**.

## Features

* ✅ Add new todos with title and priority.
* 🔄 Toggle todo completion.
* 🗑️ Delete existing todos.
* 🔍 Filter by status: All, Active, Completed.
* 🎯 Filter by priority: Low, Medium, High.
* 🔃 Sort todos by date or priority.
* 💾 Local storage persistence.

## File Structure

```
src/
├── App.jsx                # Main app component
├── App.css               # App styling
├── data/
│   └── initialTodos.js   # Initial default todos
├── components/
│   ├── TodoForm.jsx      # Form for adding todos
|   ├── TodoItem.jsx      # li list with spans to label todos
│   ├── TodoList.jsx      # Display list of todos
│   └── TodoStats.jsx     # Display stats about todos
├── utils/
│   └── todoUtils.js      # Filtering and sorting helpers
```

## Setup

### 1. Install dependencies using pnpm

```bash
pnpm install
```

### 2. Run the app using Vite

```bash
pnpm run dev
```

The app will open in your default browser at `http://localhost:5173`.

## Code Highlights

### Initial State with LocalStorage

```js
const [todos, setTodos] = useState(() => {
  const stored = localStorage.getItem('todos');
  return stored ? JSON.parse(stored) : initialTodos;
});
```

### Persisting Todos

```js
useEffect(() => {
  if (initialized) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}, [todos, initialized]);
```

### Filtering and Sorting

Handled via utility functions in `utils/todoUtils.js`:

```js
sortTodos(
  filterTodosByPriority(
    filterTodosByStatus(todos, filter),
    priorityFilter
  ),
  sortBy
);
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
