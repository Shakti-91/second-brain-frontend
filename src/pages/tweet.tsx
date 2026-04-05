// searching ke option ka kaam kar le 
import { ShareIcon, PlusIcon } from "../assets/Icons"
import Button from "../components/Button"
import { Card } from "../components/card"
import { Sidebar } from "../components/sidebar"
import { Tweet } from "../assets/Icons"
import { useEffect, useState } from "react"
import { Modal } from "../components/addModal"
import { useConten } from "../hook/content"
import axios from "axios"
import { ShareModal } from "../components/sharemodal"
import { backend_url } from "../components/url"
import { DeleteModal } from "../components/deleteModal"
import { EditModal } from "../components/editModal"
export const TweetPage=()=>{
  const[openModal,setModal]=useState(false);
  const {contents,getContent}=useConten();
  const [cr,setCr]=useState(false);
  const [share,setShare]=useState(false);
   const [link,setLink]=useState('');
   const [render,setRender]=useState(false);
  useEffect(()=>{
    getContent();
  },[openModal,cr,render]);
    
  async function shareContent(){
    try{
    const res= await axios.post(`${backend_url}/api/v1/share`,null,{
      headers:{
                'authorization':localStorage.getItem('token')
              }
    })
    setLink(`${res.data.link_share}`);
    
    setShare(true);
  }catch(error:any){
    console.log('server crash');
    return;
  }
  }
 
    return (
        
             <div className='flex bg-gray-100'>
             
              
              <Modal open={openModal} onClose={()=>{
                setModal(false)
              }}/>
              
    <Sidebar/>
    <div className='h-screen w-full ml-68 pt-12 flex pl-12 flex-col gap-12 pr-8'>
      <div className='flex  justify-between items-center '>
        <h1 className='font-extrabold text-4xl'>ALL LINKS</h1>
         <div className='flex gap-3'>
         
          
         </div>
      </div>
      <div className='flex gap-6  flex-wrap'>
        { contents.map(({type,title,link,_id})=>type==='Tweet'?
          <Card title={title} link={link} type={type} _id={_id} 
            handleYes={()=>{setCr(!cr)}} handleRender={()=>setRender(!render)} 
        />:null
        )
        
        }
      </div>
    </div>
    </div>
        
    )
}

