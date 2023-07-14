import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import hashtags from "./DataHastag";
import Icon from "../../Pages/Home/TopSide/Icon";

const Hastags = () => {
  return (
    <div>
      <div className="bg-[#16181C] overflow-y-auto mt-4 rounded-xl ">
        <h1 className="text-xl font-bold p-4 mb-3">
          İlgini çekebilecek gündemler
        </h1>

        {hashtags.map((hashtag, index) => (
          <div
            key={index}
            className=" hover:bg-white/5 p-4 cursor-pointer relative"
          >
            <div className="absolute right-8 top-4 h-6 w-6 hover:bg-blue-700/20 hover:duration-200  rounded-full flex items-center justify-center text-sm">
              <span>
                <Icon iconName={faEllipsis} />
              </span>
            </div>

            <span className="text-gray-500 text-sm">{hashtag.subject}</span>
            <h2 className="font-bold">{hashtag.header}</h2>
            <span className="text-gray-500 text-sm">
              {hashtag.tweetNumbers}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hastags;
