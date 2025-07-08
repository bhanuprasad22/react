import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Class from './Class'
import Trail from './Trail'


let name="React"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Class/>
    {name}
    <Trail/>
    </>
  )
}

export default App
