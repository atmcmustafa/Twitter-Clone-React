import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Icon from "../Home/TopSide/Icon";

const NewList = ({ listImg, listName, listMember, listFollowers }) => {
  return (
    <div className="flex justify-between items-center hover:bg-borderGray/50 py-3 px-4">
      <div className="flex gap-5 items-center">
        <img className="w-12 h-12 rounded-full" src={listImg} />
        <div>
          <h1 className="font-bold">
            {listName} <span className="text-gray-500"> • {listMember}</span>
          </h1>
          <span className="text-gray-500">{listFollowers}</span>
        </div>
      </div>
      <span className="bg-white text-black rounded-full">
        <Icon iconName={faPlus} />
      </span>
    </div>
  );
};

export default NewList;
