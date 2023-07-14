import profilePic from "../../../../assets/profile-pic.jpg";

import InputIcons from "./InputIcons";
const TweetInput = () => {
  return (
    <div className="w-full">
      <div className="flex w-full mt-4 px-4 gap-3 border-b border-borderGray">
        <img className="rounded-full w-12 h-12 p-0" src={profilePic} />
        <div className="w-full flex flex-col flex-1 ">
          <textarea
            cols="20"
            rows="4"
            name="text-area"
            className="resize-none w-full bg-transparent outline-none"
            placeholder="Neler oluyor?"
          ></textarea>
          <div className="flex items-center justify-between mb-2">
            <InputIcons />
            <button className="bg-twitterBlue hover:bg-twitterBlue/80 duration-200 font-bold px-4 py-2 rounded-full">
              Tweetle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetInput;
