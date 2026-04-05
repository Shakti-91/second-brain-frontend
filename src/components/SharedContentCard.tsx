import {  Youtube,Link,Tweet, LinkIcon, HyperLink} from "../assets/Icons"
import type { SharedInterface } from "./config"

export const SharedCardContent=(props:SharedInterface)=>{
 
 
 

    return (
      <div>
        
        <div className=" rounded-md border-2 border-gray-200 bg-white w-72  overflow-y-auto h-78">
          <div className="top-0 z-10 sticky bg-white flex flex-col">
            <div className="flex justify-between p-4  items-center">
               <div className="flex items-center gap-4">
                <div className="h-5 text-gray-600  w-5">
                {props.type==='Tweet'?(<Tweet/>):props.type==='Link'?(<div ><Link/></div>):<Youtube/>}
                </div>
               
                </div> 
                <div className="flex gap-4 h-5  text-gray-600 ">
                <div className="hover:text-black text-gray-600 cursor-pointer">
                 <a href={props.link} target="_blank"><HyperLink/></a>
                </div>  
                
                </div>
            </div>
             
            
            </div>
            <div className="w-full pl-4 font-serif text-gray-700 "><p>{props.title}</p></div>
    <div className="m-4 mt-2 mb-0 flex justify-center items-center">        
  {props.type === 'Tweet' ? (
    <blockquote className="twitter-tweet">
      <p lang="und" dir="ltr"></p>
      <a href={(props.link).replace('x.com','twitter.com')}></a>
    </blockquote>
  ) : props.type === 'Link' ? (
    <a href={props.link} className="text-gray-700">
      <LinkIcon />
    </a>
  ) : (
    <iframe  src={(props.link).replace('youtu.be','www.youtube.com/embed')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  )}
</div>

        </div>
        </div>
    )
}

