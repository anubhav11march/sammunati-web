import "antd/dist/antd.css";
import React, { Suspense } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChangePassword from "./Components/Auth/ChangePassword";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import Login from "./Components/Auth/Login";
import ProtectedRoutes from "./Components/Auth/ProtectedRoutes";
import Signup from "./Components/Auth/Signup/Signup";
import Blogs from "./Components/Blogs/Blogs";
import Singleblog from "./Components/Blogs/Singleblog";
import Categories from "./Components/Categories/Categories";
import Header from "./Components/Common/Header";
import Sidebar from "./Components/Common/Sidebar";
import SingleVideo from "./Components/Common/SingleVideo";
import Contactus from "./Components/ContactUs/Contactus";
import Faq from "./Components/Faq/Faq";
import Home from "./Components/Home/Home";
import Playlist from "./Components/Playlist/Playlist";
import PlaylistSingleVideo from "./Components/Playlist/Singleplaylist/PlaylistSingleVideo";
import SinglePlaylist from "./Components/Playlist/Singleplaylist/SinglePlaylist";
import EditProfile from "./Components/Profile/EditProfile";
import Query from "./Components/Query/Query";

function App() {
  const location = useLocation();


  
  const SidebarLayout = () => (
    <>
      <Sidebar />
      <Outlet />
    </>
  );

  return (
      <Suspense fallback={null}>
          {location.pathname === "/login" ||
          location.pathname === "/signup" ||
          location.pathname === "/changepassword" ||
          location.pathname === "/forgotpassword" ? null : (
              <Header />
          )}

          <div className="container-fluid px-0 d-flex">
              <Routes>
                  <Route exact path="/videos/:id" element={<SingleVideo />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/signup" element={<Signup />} />
                  <Route
                      exact
                      path="/changepassword"
                      element={<ChangePassword />}
                  />
                  <Route
                      exact
                      path="/forgotpassword"
                      element={<ForgotPassword />}
                  />
                  <Route
                      exact
                      path="/playlist/:id1/video/:id2"
                      element={<PlaylistSingleVideo />}
                  />
                  <Route exact path="/blogs/:id" element={<Singleblog />} />

                  <Route element={<SidebarLayout />}>
                      <Route exact path="/" element={<Home />} />
                      <Route exact path="/playlist" element={<Playlist />} />
                      <Route
                          exact
                          path="/playlist/:id"
                          element={<SinglePlaylist />}
                      />
                      <Route
                          exact
                          path="/categories"
                          element={<Categories />}
                      />
                      <Route exact path="/contactus" element={<Contactus />} />
                      <Route exact path="/query" element={<Query />} />
                      <Route exact path="/blogs" element={<Blogs />} />
                      <Route exact path="/faq" element={<Faq />} />
                      <Route element={<ProtectedRoutes />}>
                          <Route
                              exact
                              path="/editprofile"
                              element={<EditProfile />}
                          />
                      </Route>
                  </Route>
              </Routes>
          </div>
      </Suspense>
  );
}

export default App;
