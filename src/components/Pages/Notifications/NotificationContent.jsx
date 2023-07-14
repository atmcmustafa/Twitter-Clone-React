const NotificationContent = ({ icon, content }) => {
  return (
    <div className="w-full flex gap-4 text-lg border border-borderGray p-4">
      <img className="w-12 h-12 rounded-full" src={icon} />
      {content}
    </div>
  );
};

export default NotificationContent;
