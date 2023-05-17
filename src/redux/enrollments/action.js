import api from "../../configs/api";
import routenames from "../../configs/routes";
import EnrollmentsConstants from "./constant";

export const getEnrollmentdata=(payload)=>{
    return async(dispatch)=>{
        try{
            const {data} =await api.get(`${routenames.getenrollments}?token=${payload?.token}&&id=${payload?.id}`) 
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