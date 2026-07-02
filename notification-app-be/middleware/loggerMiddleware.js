import { logger } from "../../logging-middleware/src/index.js";

export const loggerMiddleware = async (req, res, next) => {

    try {

        await logger({
            stack: "backend",
            level: "info",
            package: "middleware",
            message: `${req.method} ${req.originalUrl}`
        });

    } catch (error) {

        console.log("Logger Error:", error.message);
    }

    next();
};