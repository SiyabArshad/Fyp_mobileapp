import ProfileConstants from "./constants";
import routenames from "../../configs/routes";
import origin from "../../configs/api";
import axios from "axios";

export const getProfile=(payload)=>{
    return async(dispatch)=>{
        try{
            const {data}=await axios.get(`${origin}${routenames.getprofile}?token=${payload?.token}`)
        dispatch({
            type:ProfileConstants.getProfile,
            payload:data.data
        })
        }
        catch(e)
        {
            console.log(e)
        }

    } 
}