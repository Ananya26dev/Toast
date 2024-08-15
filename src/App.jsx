import Notification from "./components/Notification";
import UserNotification from "./hooks/UserNotification";

const App = () => {
  const { NotificationComponent, triggerNotification } =
    UserNotification("top-right");
  return (
    <div>
      <button
        onClick={() =>
          triggerNotification({
            type: "success",
            duration: 3000,
            message: "File sent successfully",
          })
        }
      >
        Success
      </button>{" "}
      &nbsp;
      <button
        onClick={() =>
          triggerNotification({
            type: "error",
            duration: 3000,
            message: "File sent Failed!",
          })
        }
      >
        Error
      </button>
      {NotificationComponent}
    </div>
  );
};

export default App;
