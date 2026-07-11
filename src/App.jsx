import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddRegistration from './components/AddRegistration'
import SearchStudent from './components/SearchStudent'
import DeleteReg from './components/DeleteReg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddRegistration/>
      <SearchStudent/>
    <DeleteReg/>
    </>
  )
}

export default App
