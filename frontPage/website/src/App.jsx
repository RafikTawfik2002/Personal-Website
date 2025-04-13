import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen min-w-screen bg-gray-800'>
      <div className='flex justify-between text-white font-bold bg-gray-900 backdrop-blur-3xl p-4 px-10 shadow-lg '>
        <div>Social links + menus (right)</div>
        <div>Content toolbar (left)</div>
      </div>
    </div>
  )
}

export default App
