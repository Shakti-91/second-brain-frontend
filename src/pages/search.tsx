
import { Card } from "../components/card"
import { Sidebar } from "../components/sidebar"

import { useEffect, useState } from "react"
import { Modal } from "../components/addModal"
import { useConten } from "../hook/content"



import { useParams } from "react-router-dom"
export const SearchPage=()=>{
     const { id } = useParams();
  const[openModal,setModal]=useState(false);
  const {contents,getContent}=useConten();
  const [cr,setCr]=useState(false);
 
   const [render,setRender]=useState(false);
  useEffect(()=>{
    getContent();
  },[openModal,cr,render]);
    
  
 
    return (
        
             <div className='flex bg-gray-100'>
             
              
              <Modal open={openModal} onClose={()=>{
                setModal(false)
              }}/>
              
    <Sidebar/>
    <div className='h-screen w-full ml-68 pt-12 flex pl-12 flex-col gap-12 pr-8'>
      <div className='flex  justify-between items-center '>
        <h1 className='font-extrabold text-4xl'>{id}</h1>
         <div className='flex gap-3'>
         
          
         </div>
      </div>
      <div className='flex gap-6  flex-wrap'>
        {contents.map(({ title, link, _id, type }) =>
    String(title).includes(String(id)) ? (
      <Card
        key={_id}
        title={title}
        link={link}
        type={type}
        _id={_id}
        handleYes={() => setCr(!cr)}
        handleRender={() => setRender(!render)}
      />
    ) : null
        )
        
        }
      </div>
    </div>
    </div>
        
    )
}

