
import { useState } from "react"
import { CrossIcon, Youtube } from "../assets/Icons"
import Button from "./Button"
import { useRef } from "react"
import type { ModalInterface } from "./config"
import axios from "axios"
import { backend_url } from "./url"

export const ShareModal=(props:ModalInterface)=>{
   
          const[copy,setCopy]=useState(false);    
           
        if(props.open){
            return(
                <div className="h-screen w-screen fixed top-0 left-0  bg-black/50 z-30 flex justify-center items-center">
                    
                   <div className="bg-white z-50 opacity-100 flex flex-col h-52 w-88 rounded-md">
                    <div onClick={()=>{props.onClose();setCopy(false)}} className="w-full flex justify-end p-4 text-red-500 cursor-pointer"><CrossIcon/></div>
                    <div className="items-center justify-between  gap-4 mb-6 ml-6 mr-6 flex-col flex">
                   
                     <input type="text" className="rounded-md  w-full h-12 border border-black" value={props.text} />
                     <button onClick={async()=>{try {
                                       if(props.text)
                                       await navigator.clipboard.writeText(props.text);
                                       setCopy(true)
                                 
                                       } catch (err) {
                                      console.error('Failed to copy: ', err);
  }}} className={`w-28 h-12 rounded-md text-white font-serif$ ${(!copy)?' bg-green-700':'bg-green-600'}  cursor-pointer`}>{(!copy)?'copy':'copied'}</button>
                     </div>
                     </div>
                     
                </div>
            )
        }
        else return(
            <div></div>
        )
    
}