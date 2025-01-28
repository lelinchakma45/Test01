import React from 'react'
import { Check, Trash2 } from 'lucide-react'

const TodoItem = ({ todo, toggleTodo, deleteTodo, darkMode }) => {
  return (
    <li
      className={`flex items-center justify-between p-3 rounded-lg ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      } shadow`}
    >
      <div className="flex items-center">
        <button
          onClick={() => toggleTodo(todo.id)}
          className={`mr-2 p-1 rounded-full ${
            todo.completed
              ? 'bg-green-500 text-white'
              : darkMode
              ? 'bg-gray-700'
              : 'bg-gray-200'
          }`}
        >
          <Check size={16} />
        </button>
        <span
          className={`${
            todo.completed ? 'line-through text-gray-500' : ''
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        <Trash2 size={20} />
      </button>
    </li>
  )
}

export default TodoItem
