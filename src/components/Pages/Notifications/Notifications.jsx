import BlockBar from "../Header/BlockBar";
import Header from "../Header/Header";
import Notif from "./Notif";

const Notifications = () => {
  return (
    <div className="w-full pt-4 border-r border-borderGray">
      <Header pageTitle={"Bildirimler"} />
      <div className="flex">
        <BlockBar blockName={"Tümü"} isActive={true} />
        <BlockBar blockName={"Onaylanmış"} isActive={false} />
        <BlockBar blockName={"Bahsedenler"} isActive={false} />
      </div>
      <Notif />
    </div>
  );
};

export default Notifications;
