import Notification from "./components/Notification";
import UserNotification from "./hooks/UserNotification";
import "./App.css";
const App = () => {
  const { NotificationComponent, triggerNotification } =
    UserNotification("top-right");
  return (
    <div className="container">
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
      </button>
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
      <button
        onClick={() =>
          triggerNotification({
            type: "info",
            duration: 3000,
            message: "File sent Processing.",
          })
        }
      >
        Info
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: "warning",
            duration: 3000,
            message: "File sent Warning!",
          })
        }
      >
        Warning
      </button>
      {NotificationComponent}
    </div>
  );
};

export default App;
