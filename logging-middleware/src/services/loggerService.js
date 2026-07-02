import axios from "axios";
import dotenv from "dotenv";
import { CONSTANTS } from "../log_constants.js";

dotenv.config();

export const loggerService = async (payload) => {

    const response = await axios.post(
        CONSTANTS.LOG_API,
        payload,
        {
            headers: {
                Authorization: `Bearer ${process.env.TOKEN}`,
                "Content-Type": "application/json"
            }
        }
    );

    return response.data;
};