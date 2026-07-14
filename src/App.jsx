import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddStudent from './Components/AddStudent'
import ViewStudent from './Components/ViewStudent'

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>

        <Route path='/' element={<AddStudent/>}/>
        <Route path='/view' element={<ViewStudent/>}/>

     </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
