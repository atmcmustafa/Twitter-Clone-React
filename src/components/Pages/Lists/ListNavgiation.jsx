import Icon from "../Home/TopSide/Icon";
import {
  faArrowLeft,
  faEllipsis,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import Right from "../../FixedComponents/RightComponents/RightInput";

const ListNavgiation = () => {
  return (
    <div className="flex w-full items-center gap-4 ">
      <span className="ml-2">
        <Icon iconName={faArrowLeft} />
      </span>
      <div className="w-full">
        <Right placeholderName={"Liste Ara"} />
      </div>
      <span>
        <Icon iconName={faList} />
      </span>
      <span className="mr-2">
        <Icon iconName={faEllipsis} />
      </span>
    </div>
  );
};

export default ListNavgiation;
