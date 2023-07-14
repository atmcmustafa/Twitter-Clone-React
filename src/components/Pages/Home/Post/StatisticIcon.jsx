import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StatisticIcon = ({ icon, number, hoverEffect }) => {
  return (
    <div className={`hover:text-${hoverEffect} duration-200 drop-shadow-2xl`}>
      <FontAwesomeIcon className={`mr-2`} icon={icon} />
      <span>{number}</span>
    </div>
  );
};

export default StatisticIcon;
