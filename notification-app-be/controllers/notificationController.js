import { fetchTopNotifications } from "../services/notificationService.js";

export const getTopNotifications = async (req, res) => {

    try {

        const top = await fetchTopNotifications();

        return res.status(200).json({
            success: true,
            count: top.length,
            notifications: top
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal Server Error"});

    }

};