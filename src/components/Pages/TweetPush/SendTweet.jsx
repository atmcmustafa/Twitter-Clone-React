import { faX } from "@fortawesome/free-solid-svg-icons";
import Icon from "../Home/TopSide/Icon";
import TweetInput from "../Home/TopSide/TweetInput";
import { useState } from "react";

const SendTweet = () => {
  const [close, setClose] = useState(true);

  const handleClose = () => {
    setClose(false);
  };
  return (
    <>
      <div className="w-full relative border-r border-borderGray">
        <div
          className={`${
            close ? "bg-white/20 fixed" : "absolute"
          } w-full h-screen  flex items-center   top-0 left-0 z-20`}
        >
          <div
            className={`${
              close
                ? "flex flex-col gap-3 justify-center items-center  py-20   mx-auto  max-h-60  max-w-xl w-full bg-black rounded-xl relative"
                : "hidden"
            }`}
          >
            <div className="flex gap-4 px-8 w-full">
              <div className="h-screen flex justify-center items-center z-30 w-full">
                <div className="w-full ">
                  <span onClick={handleClose}>
                    <Icon iconName={faX} />
                  </span>
                  <TweetInput />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className={`${
          close
            ? ""
            : "absolute left-0 top-0 right-0 bottom-0 min-h-screen bg-white/20"
        }`}
      ></div>
      <div className="w-full border-r border-borderGray relative h-screen ">
        <div className="bg-red-500 -z-20">
          <Post />
        </div>
        <div className="h-screen flex justify-center items-center z-30">
          <div
            className={`fixed top-1/3 bg-black rounded-xl p-4 w-full z-30 max-w-2xl ${
              close ? "hidden" : ""
            }`}
          >
            <span className="w-fit" onClick={handleClose}>
              <Icon iconName={faX} />
            </span>
            <TweetInput />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SendTweet;
