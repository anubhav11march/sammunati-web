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
import { useLocation } from 'react-router-dom'
import Signup from './Components/Auth/Signup/Signup'
import Playlist from './Components/Playlist/Playlist'
import SinglePlaylist from './Components/Playlist/Singleplaylist/SinglePlaylist'
import PlaylistSingleVideo from './Components/Playlist/Singleplaylist/PlaylistSingleVideo'
import Categories from './Components/Categories/Categories'
import Faq from './Components/Faq/Faq'
import Contactus from './Components/ContactUs/Contactus'
import Query from './Components/Query/Query'
import Blogs from './Components/Blogs/Blogs'
import Singleblog from './Components/Blogs/Singleblog'
import EditProfile from './Components/Profile/EditProfile'

function App() {
  const location=useLocation()
  const [language, setlanguage] = useState("");

  const handleLanguage = (data) => {
    setlanguage(data);
  }
  const SidebarLayout = () => (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
  console.log(window.location)
  return (
    <>
      {
        location.pathname === '/login' || location.pathname === '/signup'  ? (null):(<Header langChange = {handleLanguage}/>)
      }
      
      <div className='container-fluid px-0 d-flex'>
        <Routes>
          
          <Route exact path="/videos/:id" element={<SingleVideo />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/playlist/:id1/video/:id2" element={<PlaylistSingleVideo />} />
          <Route exact path="/blogs/:id" element={<Singleblog />} />
                      
          <Route element={<SidebarLayout />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/playlist" element={<Playlist />} />
            <Route exact path="/playlist/:id" element={<SinglePlaylist />} />
            <Route exact path="/categories" element={<Categories />} />
            <Route exact path="/faq" element={<Faq />} />
            <Route exact path="/contactus" element={<Contactus />} />
            <Route exact path="/query" element={<Query />} />
            <Route exact path="/blogs" element={<Blogs />} />
            <Route exact path="/editprofile" element={<EditProfile />} />
          </Route>

        </Routes>

      </div>
    </>
  )
}

export default App