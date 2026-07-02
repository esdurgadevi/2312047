import express from "express"
import dotenv from "dotenv";
import { logger } from "../logging-middleware/src/index.js";
dotenv.config()

const app = express();
app.use(express.json());
const port = process.env.PORT;
app.post("/log", async (req, res) => {

    try {

        const response = await logger(req.body);

        return res.status(200).json(response);

    } catch (error) {

        return res.status(500).json({
            error: error.message
        });

    }

});
app.use("/api", notificationRoutes);

app.listen(port,()=>{
    console.log(`Server run on ${port}`);
})