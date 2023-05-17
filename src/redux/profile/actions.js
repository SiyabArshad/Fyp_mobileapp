import ProfileConstants from "./constants";
import api from "../../configs/api";
import routenames from "../../configs/routes";
export const getProfile=(payload)=>{
    return async(dispatch)=>{
        try{
            const {data}=await api.get(`${routenames.getprofile}?token=${payload?.token}`)
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