import axios from "axios";
import dotenv from "dotenv";
import { CONSTANTS } from "../log_constants.js";

dotenv.config();

export const loggerService = async (payload) => {
    console.log(payload);
    console.log(process.env.TOKEN);
    const response = await axios.post(
        CONSTANTS.LOG_API,
        payload,
        {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzEyMDQ3QG5lYy5lZHUuaW4iLCJleHAiOjE3ODI5NzQ3NDgsImlhdCI6MTc4Mjk3Mzg0OCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjIwOWUwNzVhLTRjZWItNDMxNC1iOTRiLTMzYzdiYmNjYjMxNiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImR1cmdhIGRldmkgcyIsInN1YiI6Ijk5NGEzYzg4LWJhZjAtNDk1Yy05YWJhLWNhM2UwZDc5NmZiNSJ9LCJlbWFpbCI6IjIzMTIwNDdAbmVjLmVkdS5pbiIsIm5hbWUiOiJkdXJnYSBkZXZpIHMiLCJyb2xsTm8iOiIyMzEyMDQ3IiwiYWNjZXNzQ29kZSI6IkVSelV5eCIsImNsaWVudElEIjoiOTk0YTNjODgtYmFmMC00OTVjLTlhYmEtY2EzZTBkNzk2ZmI1IiwiY2xpZW50U2VjcmV0IjoiQlRQVU10dW5hdmV1QVFTcSJ9.YJfNgoPLYUglqxKvqHwMW6lTgxHFmsnKDRfJBrElHmA`,
                "Content-Type": "application/json"
            }
        }
    );
    console.log(response);

    return response.data;
};