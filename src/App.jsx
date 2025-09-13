import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './features/counter/counterSlice'

function App() {

const count = useSelector((state) => state.counter.value)
const dispatch = useDispatch()
   
  function handleIncrementClick() {
   dispatch(increment())
  }

  function handleDecrementClick(){
   dispatch(decrement())
  }

   function handleResetClick(){
   dispatch(reset())
  }





  return (
   <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Counter</h1>
        <div className="flex items-center gap-6 justify-center">
          <button
            onClick={handleDecrementClick}
            className="px-4 py-2 bg-red-500 text-white text-xl rounded-lg shadow-md hover:bg-red-600 transition"
          >
            -
          </button>
          <p className="text-2xl font-semibold text-gray-700">Count:{count}</p>
          <button
            onClick={handleIncrementClick}
            className="px-4 py-2 bg-green-500 text-white text-xl rounded-lg shadow-md hover:bg-green-600 transition"
          >
            +
          </button>
          <button onClick={handleResetClick} className='px-4 py-2 bg-yellow-500 text-white text-xl rounded-lg shadow-md hover:bg-yellow-600 transition'>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
