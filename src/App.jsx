import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddRegistration from './components/AddRegistration'
import SearchStudent from './components/SearchStudent'
import DeleteReg from './components/DeleteReg'
import ViewRegistration from './components/ViewRegistration'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/"element={<AddRegistration/>}/>
      <Route path="/search"element={<SearchStudent/>}/>
      <Route path="/delete"element={<DeleteReg/>}/>
      <Route path="/view"element={<ViewRegistration/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
