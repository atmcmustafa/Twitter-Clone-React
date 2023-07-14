import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Bookmarks from "../Bookmarks/Bookmarks";
import VerifiedPlan from "./VerifiedPlan";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Verified = () => {
  const [modalActive, modalSetActive] = useState(true);

  const handleChange = () => {
    modalSetActive(false);
  };

  return (
    <div className="w-full relative">
      <div
        className={`${
          modalActive ? "bg-white/20 fixed" : "absolute"
        } w-full h-screen  flex items-center   top-0 left-0 z-20`}
      >
        <div
          className={`${
            modalActive
              ? "flex flex-col gap-3 justify-center items-center  py-20   mx-auto  max-w-xl w-full bg-black rounded-xl relative"
              : "hidden"
          }`}
        >
          <span
            onClick={handleChange}
            className="absolute left-6 top-4 cursor-pointer"
          >
            <FontAwesomeIcon icon={faX} />
          </span>
          <span className="absolute flex top-4 cursor-pointer text-xl">
            <FontAwesomeIcon icon={faTwitter} />
          </span>
          <h1 className="text-3xl font-bold">Hesabının türü hangisi?</h1>
          <h1>Sana uygun doğru Onaylı aboneliğini seç:</h1>
          <div className="flex gap-4 px-8">
            <VerifiedPlan />
          </div>
          <div className="w-full text-center px-8 mt-3">
            <button className="w-full bg-white text-black rounded-full py-3 font-bold text-lg">
              Abone Ol
            </button>
          </div>
          <div className="mt-4">
            Daha fazla bilgi al:
            <a className="text-twitterBlue mx-2" href="#">
              Twitter Blue
            </a>
            ve
            <a className="text-twitterBlue ml-2" href="#">
              Onaylı Kuruluşlar
            </a>
          </div>
        </div>
      </div>
      <div>
        <Bookmarks />
      </div>
    </div>
  );
};

export default Verified;
