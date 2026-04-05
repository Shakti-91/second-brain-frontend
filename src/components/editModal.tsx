
import { useState } from "react"
import { CrossIcon, Youtube } from "../assets/Icons"
import Button from "./Button"
import { useRef } from "react"
import type { ModalInterface } from "./config"
import axios from "axios"
import { backend_url } from "./url"
import { useUpdate } from "../hook/useUpdate"
interface editInterface{
    title:string,
    type:string,
    link:string,
    id:string,
    handleRender?:()=>void
}

type newInterface=editInterface & ModalInterface

export const EditModal=(props:newInterface)=>{
    const [type,setType]=useState(props.type);
    const titleRef=useRef<HTMLInputElement|null>(null);
    const linkRef=useRef<HTMLInputElement|null>(null);
    
    async function handleClick() {
        const title=titleRef.current?.value;
        const link=linkRef.current?.value; 

        if(title=="" || link==""){
            alert('feilds can not be empty')
            return;
        }
        await useUpdate(props.id,title,type,link);
         props.onClose();
         //@ts-ignore
         props.handleRender();
            return;
        
    }
        if(props.open){
            return(
                <div className="h-screen w-screen fixed top-0 left-0  bg-black/50 z-30 flex justify-center items-center">
                    
                   <div className="bg-white z-50 opacity-100 flex flex-col h-74 w-88 rounded-md">
                    <div onClick={props.onClose} className="w-full flex justify-end p-4 text-red-500 cursor-pointer"><CrossIcon/></div>
                    <div className="items-center justify-between  gap-4 mb-6 ml-6 mr-6 flex-col flex">
                    <input type="text" defaultValue={props.title} ref={titleRef} className="h-12 w-72 border border-gray-300 rounded-md" placeholder="Title" />
                    <input type="text"  defaultValue={props.link} ref={linkRef} className="h-12 w-72 border border-gray-300 rounded-md" placeholder="Link" />
                    <div className="flex mr-1 gap-2"><p>Type:</p><span className="flex gap-2"><div onClick={()=>{setType('Tweet')}} className={`p-2 cursor-pointer ${type==='Tweet'?'bg-blue-600': 'bg-blue-400'} rounded-md h-8 w-18 flex justify-center items-center text-amber-50`}>Tweet</div><div onClick={()=>{setType('Youtube')}} className={`p-2 cursor-pointer ${type==='Youtube'?'bg-blue-600':'bg-blue-400'}  rounded-md h-8 flex justify-center items-center text-amber-50`}>Youtube</div><div onClick={()=>{setType('Link')}} className={`p-2 cursor-pointer ${type==='Link'?'bg-blue-600':'bg-blue-400'} rounded-md h-8 flex justify-center items-center text-amber-50 w-18`}>Link</div></span></div>
                     <div className="pb-2"><Button onClick={handleClick}  variant='secondry' size='sm' text='Submitt ' /></div>
                     </div>
                     </div>
                     
                </div>
            )
        }
        else return(
            <div></div>
        )
    
}