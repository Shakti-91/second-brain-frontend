import axios from "axios";
import { backend_url } from "../components/url";

//update ki request kaise jayegi vo kaam yaha kiya hai
export async function useUpdate(_id:string,title:any,type:string,link:any){
 try{
    
    await axios.patch(`${backend_url}/api/v1/update/content`,{
                                    
    
        contentId:_id,
        title,
        type,
        link
      },{
      headers:{
        'authorization':localStorage.getItem('token')
      }
    })
    
  }catch(error:any){
    console.log(error);
    return;
  }
}