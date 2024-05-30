import React from 'react'
import Signup from './Signup'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'
// import signUp from './signUp';
import { Link } from 'react-router-dom' 
function Login() {
    const {
        register,
        handleSubmit,
     
        formState: { errors },
      } = useForm();

      const onSubmit = async (data) => {
        const userInfo = {
          email: data.email,
          password: data.password,
        };
        await axios
          .post("http://localhost:4001/user/login", userInfo)
          .then((res) => {
            console.log(res.data);
            if (res.data) {
              toast.success("Loggedin Successfully");
              document.getElementById("my_modal_3").close();
              setTimeout(() => {
                window.location.reload();
                localStorage.setItem("Users", JSON.stringify(res.data.user));
              }, 1000);
            }
          })
          .catch((err) => {
            if (err.response) {
              console.log(err);
              toast.error("Error: " + err.response.data.message);
              setTimeout(() => {}, 2000);
            }
          });
      };
  return (
    <div>
        
        <dialog id="my_modal_3" className="modal" >
  <div className="modal-box dark:text-black">
 {/* if there is a button in form, it will close the modal */}
 <form onSubmit={handleSubmit(onSubmit)} method="dialog" >
 <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>
  <h3 className="font-bold dark:text-black text-center text-2xl">Login</h3>
  
     
  
 
    {/* email */}
    <div className='mt-4'>
        <span>Email</span><br />
        <input type="text" className='p-1 mt-2 border-[2px] rounded-md w-80' placeholder='Enter your email' 
        {...register("email", { required: true })} />
        {errors.email && <span classname="text-sm text-red-500">This field is required</span>}
    </div>

    {/* password */}
    <div className='mt-4'>
        <span>Password</span><br />
        <input type="text" className='p-1 mt-2 border-[2px] rounded-md w-80' placeholder='Enter your passcode' 
        {...register("password", { required: true })}/>
        {errors.password && <span  className="text-sm text-red-500">This field is required</span>}
    </div>
    <div className='flex justify-between mt-4' >
        <button className='border rounded-md bg-pink-600 p-2 w-20 hover:bg-pink-400'>Login</button>
        <span>
        Not Registered? <Link to="signup" className='cursor-pointer text-blue-500 underline '>Signup</Link>{""}
       
        </span>
    </div>
    </form>
  </div>
</dialog>
    </div>
  );
}

export default Login