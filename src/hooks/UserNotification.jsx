import { useState } from "react";
import Notification from "../components/Notification";
import { useCallback } from "react";
const UserNotification = (position = "top-right") => {
  const [notification, setNotification] = useState(null);
  let timer;
  const triggerNotification = useCallback((notificationProps) => {
    clearTimeout(timer);
    timer = setNotification(notificationProps);
    setTimeout(() => {
      setNotification(null);
    }, notificationProps.duration);
  }, []);
  const NotificationComponent = notification ? (
    <div className={`${position}`}>
      <Notification {...notification} />
    </div>
  ) : null;
  return { NotificationComponent, triggerNotification };
};

export default UserNotification;
