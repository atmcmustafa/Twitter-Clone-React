import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ iconName }) => {
  return (
    <span className="h-8 w-8 hover:bg-twitterBlue/30 flex items-center justify-center rounded-full duration-200 cursor-pointer hover:text-twitterBlue">
      <FontAwesomeIcon className="h-4 w-4" icon={iconName} />
    </span>
  );
};

export default Icon;
