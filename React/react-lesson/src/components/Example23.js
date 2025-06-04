"use client";

export default function TodoList({ todos = [] }) {
  return (
    <ul>
      {todos.length > 0 ? (
        todos.map((task, index) => <li key={task.id}>{task.text}</li>)
      ) : (
        <li>No tasks available</li>
      )}
    </ul>
  );
}
