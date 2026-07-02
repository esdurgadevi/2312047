import axios from "axios";
import { CONSTANTS } from "../log_constants";
import dotenv from "dotenv";

dotenv.config();

export const loggerService = async (req,res)=>{
    const { stack,level,package,message } = req.body;
        
    if(!stack || !level || !package || !message )
    {
        return res.status(400).json({"Error":"Provide all the parameters"});
    }
    if(!isValidParameters(stack,level,package))
    {
        return res.status(400).json({"Error":"Provide the Parameters as per the standards"});
    }

    const response = await axios.post
    (
        CONSTANTS.LOG_API,
        payload,
        {
            headers:
            {
                Authorization : `Bearer ${process.env.TOKEN}`
            }
        }
    )
    return response;
}