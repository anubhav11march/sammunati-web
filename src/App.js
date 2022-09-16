import React,{useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Common/Header'
import Home from './Components/Home/Home'
import './App.css'
import Sidebar from './Components/Common/Sidebar'
import { Route, Routes } from 'react-router-dom'
function App() {

  const [language, setlanguage] = useState("");

  const handleLanguage = (data) => {
    console.log(data)
    setlanguage(data);
  }
  return (
    <>

      <Header langChange = {handleLanguage}/>
      <div className='container-fluid px-0 d-flex'>
        <Sidebar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
        </Routes>

      </div>
    </>
  )
}

export default App