import NotificationContent from "./NotificationContent";
import notificationData from "./DataNotification";
const Notif = () => {
  return (
    <div className="border border-borderGray">
      {notificationData.map((data, index) => (
        <NotificationContent
          key={index}
          content={data.content}
          icon={data.icon}
        />
      ))}
    </div>
  );
};

export default Notif;
