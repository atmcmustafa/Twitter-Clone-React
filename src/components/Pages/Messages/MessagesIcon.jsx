import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MessagesIcon = () => {
  return (
    <div className="flex gap-4 items-center px-4 text-xl">
      <FontAwesomeIcon className="cursor-pointer" icon={faGear} />
      <FontAwesomeIcon className="cursor-pointer" icon={faEnvelope} />
    </div>
  );
};

export default MessagesIcon;
