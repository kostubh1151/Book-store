import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";
// import { Navigate } from 'react-router-dom';
function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
 
    formState: { errors },
  } = useForm();

  const onSubmit  = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <>
    <div className='flex h-screen w-screen items-center justify-center '>
       <div  className=" shadow-md w-1/2">
  <div className="modal-box dark:text-black">
  <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
  
  <h3 className="font-bold dark:text-black text-center text-2xl">Sign Up</h3>
  
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      

{/* Name */}
<div className='mt-4'>
        <span>Name</span><br />
        <input type="text" {...register("fullname", { required: true })}className='p-1 mt-2 border-[2px] rounded-md w-80' placeholder='Enter your name' />
        {errors.fullname && <span classname="text-sm text-red-500">This field is required</span>}
    </div>

    {/* email */}
    <div className='mt-4'>
        <span>Email</span><br />
        <input type="text" className='p-1 mt-2 border-[2px] rounded-md w-80' 
        {...register("email", { required: true })}placeholder='Enter your email' />
        {errors.email && <span classname="text-sm text-red-500">This field is required</span>}
    </div>

    {/* password */}
    <div className='mt-4'>
        <span>Password</span><br />
        <input type="text" {...register("password", { required: true })}className='p-1 mt-2 border-[2px] rounded-md w-80' placeholder='Enter your passcode' />
        {errors.password && <span classname="text-sm text-red-500">This field is required</span>}
    </div>
    <div className='flex justify-between mt-4' >
        <button className='border rounded-md bg-pink-600 p-2 w-20 hover:bg-pink-400'>Sign Up</button>
        <span>
        Have Account?{" "} <button className='cursor-pointer text-blue-500 underline' onClick={()=>{
         document.getElementById("my_modal_3").showModal()
        }}>Login</button>
        <Login/>
        </span>
    </div>
    </form>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup