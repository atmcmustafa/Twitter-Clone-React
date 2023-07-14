import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserProfile = ({ userimg, name, username }) => {
  return (
    <div className="mr-0 md:mr-12  flex gap-4 items-center ms-auto  mb-4 rounded-full cursor-pointer duration-200 hover:bg-grayBackground px-4 py-2">
      <img src={userimg} className="rounded-full" />
      <div className="md:block hidden">
        <h2 className="font-bold">{name}</h2>
        <span className="text-gray-500 text-sm">@{username}</span>
      </div>
      <FontAwesomeIcon className="ml-2 md:block hidden" icon={faEllipsis} />
    </div>
  );
};

export default UserProfile;
