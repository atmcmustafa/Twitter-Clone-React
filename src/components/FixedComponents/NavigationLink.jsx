import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationLink = ({ icon, title }) => {
  return (
    <li className="flex gap-5 ms-auto md:ms-0 items-center text-xl hover:bg-grayBackground/50 hover:duration-200 rounded-full py-3 w-fit px-6">
      <FontAwesomeIcon className="w-6 h-6" icon={icon} />
      <span className="md:block hidden">{title}</span>
    </li>
  );
};

export default NavigationLink;
