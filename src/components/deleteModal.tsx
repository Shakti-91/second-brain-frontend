
import { useEffect, useState } from "react";
import type { ModalInterface } from "./config";
import { useConten } from "../hook/content";


export const DeleteModal=(props:ModalInterface)=>{
   
        if(props.open){
            return(
                <div className="h-screen w-screen fixed top-0 left-0  bg-black/50 z-30 flex justify-center items-center">
                    
                   <div className="bg-white z-50 opacity-100 flex flex-col h-52 w-88 rounded-md gap-6 justify-center items-center">
                    <div> Are you sure to Delete ?</div>
                    <div className="flex gap-4">
                        <button onClick={()=>{props.onClose()}} className="bg-red-600 hover:bg-red-500 cursor-pointer font-mono font-bold text-2xl  w-18 rounded-md text-white">NO</button>
                        <button onClick={()=>{props.onDelete?.()}} className="bg-green-600 hover:bg-green-500 cursor-pointer font-mono font-bold text-2xl  w-18 rounded-md text-white">YES</button>
                    </div>
                     </div>
                     
                </div>
            )
        }
        else return(
            <div></div>
        )
    
}