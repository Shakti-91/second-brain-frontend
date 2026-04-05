import { useRef, useState } from "react";
import Button from "./Button"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { backend_url } from "./url";
export const SignUp=()=>{
    const navigate=useNavigate();

    const usernameRef=useRef<HTMLInputElement|null>(null);
    const passwordRef=useRef<HTMLInputElement|null>(null);
     const [error,setError]=useState('');
  async  function  signup(){
      const  username=usernameRef.current?.value;
      const password=passwordRef.current?.value;

      if(!username || !password){
        setError("*input feilds can not be empty");
        return
      }
       try{
        console.log(`${backend_url}/api/v1/signUp`);
      const res=await axios.post(`${backend_url}/api/v1/signUp`,{
        username,
        password
      })
      
      console.log(res.data);
      navigate('/signin');
    }
    catch(e:any){
      if(e.response?.status===409){
        setError('username already exsist try another')
      }
      else{
        setError('server crash');
      }
    }
    return;
    }

    return(
        <div className="h-screen w-screen flex items-center justify-center bg-violet-500">
           <div className="h-98 w-98 bg-amber-50 rounded-2xl border-2 flex flex-col items-center justify-around border-gray-200">
              
                <h1 className="font-normal text-3xl">SignUp</h1>
                <input type="text" ref={usernameRef} className="text-lg h-12 border-2 border-gray-300 rounded-md w-72" placeholder="username"/>
                <div><input type="text" ref={passwordRef} className="text-lg h-12 w-72 border-2 border-gray-300 rounded-md" placeholder="password" />
                {error && (<span><p className="text-red-500">{error}</p></span>)} 
                </div> 
                <div>
                  
                <Button size="lg" text="SignUp" variant="signUp" onClick={signup}/>
                <span>Already have a account?<span className="text-violet-500 cursor-pointer  hover:text-violet-600 hover:underline" onClick={()=>{navigate('/signin')}}>SignIn</span></span>
                </div>
           </div>
        </div>
    )
}