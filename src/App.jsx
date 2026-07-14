import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddStudent from './Components/AddStudent'
import ViewStudent from './Components/ViewStudent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <AddStudent/>
      <ViewStudent/>

    </>
  )
}

export default App
