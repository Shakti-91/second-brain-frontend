import {  useState } from "react"
import { BrainIcon } from "../assets/Icons"
import { Tweet } from "../assets/Icons"
import { Youtube} from "../assets/Icons"
import { Link} from "../assets/Icons"
import { useNavigate } from "react-router-dom"

export const Sidebar=()=>{
    const navigate=useNavigate();
    const [searchTitle,setSearch]=useState('');
    return(
        <div className=" w-68 border-r-2 pl-4 flex flex-col gap-8 fixed top-0  left-0 h-screen border-gray-200">
            <div className="flex pt-8   items-center">
                <div className="text-blue-400">
               <BrainIcon/>
               </div>
               <h1 className="text-2xl font-semibold">Second Brain</h1> 
            </div>
            <div className="flex ml-2 flex-col gap-4 ">
                <input onKeyDown={(e)=>{if(e.key=== "Enter"){
                    if(searchTitle===''){navigate('/homepage')}
                    else navigate(`/search/${searchTitle}`)
                    }}} onChange={(e)=>setSearch(e.target.value)} className="h-8  w-42 rounded-md border border-gray-300" type="text" placeholder="search" />
                <div onClick={()=>navigate('/tweet')} className="flex items-center cursor-pointer hover:underline">
                    <div className="h-5  w-5">
                    <Tweet/>
                    </div>
                    <h1 className="text-xl ml-1 font-normal text-gray-500">Tweets</h1>
                </div>
                <div onClick={()=>navigate('/youtube')} className="flex items-center cursor-pointer hover:underline">
                    <div className="h-5  w-5">
                    <Youtube/>
                    </div>
                    <h1 className="text-xl ml-1 font-normal text-gray-500">YouTube</h1>
                </div>
                <div onClick={()=>navigate('/link')} className="flex items-center cursor-pointer hover:underline">
                    <div className="h-5 pt-0.5 w-5">
                    <Link/>
                    </div>
                    <h1 className="text-xl ml-1 font-normal text-gray-500">Links</h1>
                </div>
            </div>
            
        </div>
    )
}