import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import { motion, AnimatePresence } from 'framer-motion'

function Todos() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  return (
    <motion.div
      className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 shadow-lg max-w-md mx-auto mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <h2 className="text-xl font-semibold text-white mb-4">Your Todos</h2>
      <ul className="list-none space-y-3">
        <AnimatePresence>
          {todos.map((todo) => (
            <motion.li
              key={todo.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="flex justify-between items-center bg-zinc-800 px-4 py-3 rounded-lg border border-zinc-700"
            >
              <span className="text-gray-200">{todo.text}</span>
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => dispatch(removeTodo(todo.id))}
                className="p-2 rounded-full bg-red-500 hover:bg-red-600 text-white"
              >
                ✕
              </motion.button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </motion.div>
  )
}

export default Todos
