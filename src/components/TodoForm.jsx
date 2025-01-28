import React, { useState } from 'react'
import { Plus } from 'lucide-react'

const TodoForm = ({ addTodo, darkMode }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex">
        <input
          type="text"
          className={`flex-grow p-2 border-2 rounded-l-lg focus:outline-none ${
            darkMode
              ? 'bg-gray-800 text-white border-gray-600'
              : 'bg-white text-gray-900 border-gray-300'
          }`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button
          type="submit"
          className={`p-2 rounded-r-lg ${
            darkMode
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-blue-500 hover:bg-blue-600'
          } text-white`}
        >
          <Plus size={24} />
        </button>
      </div>
    </form>
  )
}

export default TodoForm
