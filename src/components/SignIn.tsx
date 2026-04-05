import Button from "./Button"
import { useNavigate } from "react-router-dom"
import { useRef, useState } from "react";
import axios from "axios";
import { backend_url } from "./url";
export const SignIn=()=>{
    const navigate=useNavigate();
    const [error,setError]=useState('');
    const usernameRef=useRef<HTMLInputElement|null>(null);
   const passwordRef=useRef<HTMLInputElement|null>(null);
    async function signin(){
      const username=usernameRef.current?.value;
      const password=passwordRef.current?.value;
      if(!username || !password){
        setError("*input feilds can not be empty");
        return
      }
      try{
       const res = await axios.post(`${backend_url}/api/v1/signIn`,{
        username,
        password
      })
      
      localStorage.setItem("token", res.data.token);
      navigate('/homepage')
    }catch(error:any){
        if( error.response?.status==400){
        setError('invalid credentials');
        return;
      }else{
        setError('server crash');
      }
        return;
    }
    
    }
    return(
        <div className="h-screen w-screen flex items-center justify-center bg-violet-500">
           <div className="h-98 w-98 bg-amber-50 rounded-2xl border-2 flex flex-col items-center justify-around border-gray-200">
              
                <h1 className="font-normal text-3xl">SignIn</h1>
                <input type="text" ref={usernameRef} className="text-lg h-12 border-2 border-gray-300 rounded-md w-72" placeholder="username"/>
                 <div><input type="text" ref={passwordRef} className="text-lg h-12 w-72 border-2 border-gray-300 rounded-md" placeholder="password" />
                {error && (<span><p className="text-red-500">{error}</p></span>)} 
                </div> 
                <div>
                <Button size="lg" text="SignIn" onClick={signin} variant="signUp"/>
                <span>New user?<span className="text-violet-500 cursor-pointer  hover:text-violet-600 hover:underline" onClick={()=>{navigate('/')}}>SignUp</span></span>
                </div>
           </div>
        </div>
    )
}