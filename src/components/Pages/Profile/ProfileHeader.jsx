import { faArrowLeft, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";
import Icon from "../Home/TopSide/Icon";
import topHeader from "../../../assets/header-photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import BlockBar from "../Header/BlockBar";

const ProfileHeader = ({
  tweetNumber,
  profilePhoto,
  name,
  userName,
  location,
  joinTime,
  followers,
  following,
}) => {
  return (
    <div className="mt-1">
      <div className="flex items-center">
        <span className="ml-2 block">
          <Icon iconName={faArrowLeft} />
        </span>
        <div className="flex flex-col ml-3">
          <Header pageTitle={"Mustafa Atmaca"} />
          <span className="ml-4 text-gray-500">{tweetNumber} Tweets</span>
        </div>
      </div>
      <div className="relative">
        <img className="w-full max-h-72" src={topHeader} />
        <div className="absolute -bottom-14 rounded-full w-28 h-28 ml-6 border-[4px] border-black">
          <img className="w-full rounded-full" src={profilePhoto} />
        </div>
      </div>
      <div className="flex justify-end px-4 mt-3">
        <button className="border border-white/50 rounded-full px-4 py-2 font-bold">
          Profili Düzenle
        </button>
      </div>
      <div className="mt-4">
        <div className="px-4">
          <h2 className="font-bold text-lg">{name}</h2>
          <span className="text-gray-500">@{userName}</span>
          <span className="text-gray-500 flex items-center gap-2 mt-3">
            <div>
              <FontAwesomeIcon className="mr-2" icon={faLocationDot} />
              <span>{location}</span>
            </div>
            <div>
              <FontAwesomeIcon className="mr-2 ml-3" icon={faCalendar} />
              <span>{joinTime} tarihinde katıldı</span>
            </div>
          </span>
          <div className="flex items-center mt-4 gap-4">
            <span className="font-bold">
              {following}{" "}
              <span className="text-gray-500 font-normal">Takip edilen</span>
            </span>
            <span className="font-bold">
              {followers}
              <span className="text-gray-500 font-normal">Takipçi</span>
            </span>
          </div>
        </div>
        <div className="flex">
          <BlockBar blockName={"Profil"} />
          <BlockBar blockName={"Yanıtlar"} />
          <BlockBar blockName={"Öne Çıkanlar"} />
          <BlockBar blockName={"Medya"} />
          <BlockBar blockName={"Beğeni"} />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
