import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
import { motion } from 'framer-motion'

function AddTodo() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <motion.form
      onSubmit={addTodoHandler}
      className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 shadow-lg max-w-md mx-auto mt-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex space-x-3">
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          className="flex-1 bg-zinc-800 rounded border border-zinc-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-gray-100 py-2 px-3 outline-none transition"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md"
        >
          Add
        </motion.button>
      </div>
    </motion.form>
  )
}

export default AddTodo
