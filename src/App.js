import React,{useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Common/Header'
import Home from './Components/Home/Home'
import './App.css'
import Sidebar from './Components/Common/Sidebar'
import { Route, Routes } from 'react-router-dom'
import SingleVideo from './Components/Common/SingleVideo'
import { Outlet } from 'react-router-dom';
import Login from './Components/Auth/Login'

function App() {

  const [language, setlanguage] = useState("");
  const handleLanguage = (data) => {
    console.log(data)
    setlanguage(data);
  }
  const SidebarLayout = () => (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
  return (
    <>
      {
        window.location.pathname !== '/' ? (<Header langChange = {handleLanguage}/>):("")
      }
      
      <div className='container-fluid px-0 d-flex'>
        <Routes>
          {/* without Sidebar */}
          
          <Route exact path="/videos/:id" element={<SingleVideo />} />
          <Route exact path="/" element={<Login />} />
            
          {/* with sidebar */}
          
          <Route element={<SidebarLayout />}>
            <Route exact path="/home" element={<Home />} />
          </Route>

        </Routes>

      </div>
    </>
  )
}

export default App