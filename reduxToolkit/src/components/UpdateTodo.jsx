import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTodo } from '../features/todo/todoSlice'

function UpdateTodo() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const [selectedId, setSelectedId] = useState('')
  const [newText, setNewText] = useState('')

  const handleUpdate = (e) => {
    e.preventDefault()
    if (!selectedId || !newText.trim()) return
    dispatch(updateTodo({ id: selectedId, newText }))
    setNewText('')
  }

  return (
    <form
      onSubmit={handleUpdate}
      className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 shadow-lg max-w-md mx-auto mt-6"
    >
      <h2 className="text-xl font-semibold text-white mb-4">Update Todo</h2>
      <div className="flex flex-col space-y-3">
        <select
          className="bg-zinc-800 border border-zinc-700 text-gray-100 py-2 px-3 rounded"
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
        >
          <option value="">Select a Todo</option>
          {todos.map((todo) => (
            <option key={todo.id} value={todo.id}>
              {todo.text}
            </option>
          ))}
        </select>

        <input
          type="text"
          className="bg-zinc-800 border border-zinc-700 text-gray-100 py-2 px-3 rounded"
          placeholder="New text..."
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg"
        >
          Update
        </button>
      </div>
    </form>
  )
}

export default UpdateTodo
