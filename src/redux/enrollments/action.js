import origin from "../../configs/api";
import axios from "axios";
import routenames from "../../configs/routes";
import EnrollmentsConstants from "./constant";

export const getEnrollmentdata=(payload)=>{
    return async(dispatch)=>{
        try{
            const {data} =await axios.get(`${origin}${routenames.getenrollments}?token=${payload?.token}&&id=${payload?.id}`) 
        dispatch({
            type:EnrollmentsConstants.getEnrollments,
            payload:data.data
        })
        }
        catch(e)
        {
            console.log(e)
        }

    } 
}