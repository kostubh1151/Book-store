import React from 'react'
import Course from '../components/Course'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
function Courses() {
  // console.log(list);
  return (
    <>
    <Nav/>
    <div className='min-h-screen'>
    <Course/>
    </div>
   
    <Footer/>
        </>

  )
}

export default Courses