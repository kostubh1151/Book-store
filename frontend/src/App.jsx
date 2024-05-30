import React from 'react';
import Homes from './homes/Homes';
// import Course from './components/Course';
import Signup from './components/Signup';
import Courses from './courses/Courses';
import {Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import { Toaster } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser);
  return (
   <>
   <div className="bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Homes/>}/>
      <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup" />}/>
      <Route path="/signup" element={<Signup/>}/>
      
    </Routes>

    <Toaster/>
    </div>
   </>
  )
}

export default App