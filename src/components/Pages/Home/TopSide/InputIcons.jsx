import { faCalendar, faImage } from "@fortawesome/free-regular-svg-icons";
import {
  faFaceGrinWide,
  faList,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import Icon from "./Icon";
const InputIcons = () => {
  return (
    <div className="text-twitterBlue flex gap-1  items-center">
      <Icon iconName={faImage} />
      <Icon iconName={faList} />
      <Icon iconName={faFaceGrinWide} />
      <Icon iconName={faCalendar} />
      <Icon iconName={faLocationDot} />
    </div>
  );
};

export default InputIcons;
