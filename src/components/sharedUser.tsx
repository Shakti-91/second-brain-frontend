
import { useShare } from "../hook/shareable"

import { SharedCardContent } from "./SharedContentCard"
import { Sidebar } from "./sidebar"
import { useParams } from "react-router-dom"
export const Shareduser=()=>{
    const {sharelink}=useParams<{ sharelink: string }>();
    
    const contents=useShare(sharelink);
    if(contents.length!==0){
     return (
         
        
             <div className='flex bg-gray-100'>
              
    <Sidebar/>
    <div className='h-screen w-full ml-68 pt-12 flex pl-12 flex-col gap-12 pr-8'>
      <div className='flex  justify-between items-center '>
        <h1 className='font-extrabold text-4xl'>ALL LINKS</h1>
      </div>
      <div className='flex gap-6  flex-wrap'>
        { contents.map(({type,title,link,})=>
          <SharedCardContent title={title} link={link} type={type} />
        )
        
        }
      </div>
    </div>
    </div>
    
    )
}
return(
    <div className="h-screen w-screen flex flex-col items-center justify-center"><div className="w-full flex justify-center">404</div><br /><div className="w-full flex justify-center">sharelink is wrong or not activated</div></div>
)

}

