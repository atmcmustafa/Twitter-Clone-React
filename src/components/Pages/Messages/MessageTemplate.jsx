import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Icon from "../Home/TopSide/Icon";

const MessageTemplate = ({ image, name, username, timestamp, message }) => {
  return (
    <div className="px-4 w-full hover:bg-borderGray/50 py-4 cursor-pointer duration-200">
      <div className="flex gap-4">
        <img className="rounded-full w-10 h-10" src={image} />
        <div className=" w-full">
          <div className="flex gap-2 items-center ">
            <span className="font-bold">{name}</span>
            <span className="text-gray-500">@{username}</span>
            <span className="text-gray-500">{timestamp}</span>
            <div className="flex justify-end w-full">
              <Icon iconName={faEllipsis} />
            </div>
          </div>
          <p className="mt-1 text-gray-500 text-base">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default MessageTemplate;
