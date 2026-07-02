import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const priority = {
    Placement: 3,
    Result: 2,
    Event: 1
};

export const fetchTopNotifications = async () => {
    console.log(process.env.TOKEN);
    const response = await axios.get
    (
        "http://4.224.186.213/evaluation-service/notifications",
        {
            headers: {
                Authorization: `Bearer ${process.env.TOKEN}`
            }
        }
    );
    //console.log(response.data);
    const notifications = response.data.notifications;

    const unreadNotifications = notifications.filter(notification => !notification.isRead);

    unreadNotifications.sort((a, b) => {

        const priorityDifference =
            priority[b.Type] - priority[a.Type];
        return priorityDifference;

    });
    return unreadNotifications.slice(0, 10);
};