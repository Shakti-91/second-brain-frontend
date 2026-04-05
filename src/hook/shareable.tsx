import axios from "axios";
import { useEffect, useState } from "react";
import { backend_url } from "../components/url";

export function useShare(ShareLink:string|undefined){
    const [contents,setContent]=useState([]);
    function getContent(){
        axios.get(`${backend_url}/api/v1/share/${ShareLink}`,{
        headers:{
            'authorization':localStorage.getItem('token')
        }
      }).then((res)=>setContent(res.data.content)).catch((error)=>console.log(error));
    }
    useEffect(()=>{
      getContent();
    },[])

    return contents;
}