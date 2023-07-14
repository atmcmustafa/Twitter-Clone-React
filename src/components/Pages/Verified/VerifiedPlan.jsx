import { useState } from "react";

const VerifiedPlan = ({ topHeader, planName, planContent }) => {
  const [isFirstButtonActive, setFirstButtonActive] = useState(true);
  const [isSecondButtonActive, setSecondButtonActive] = useState(false);

  const handleClickFirstButton = () => {
    setFirstButtonActive(true);
    setSecondButtonActive(false);
  };

  const handleClickSecondButton = () => {
    setFirstButtonActive(false);
    setSecondButtonActive(true);
  };

  return (
    <div className="flex gap-4">
      <div
        className={`rounded-xl p-4 border-2 ${
          isFirstButtonActive ? "border-twitterBlue" : ""
        } flex justify-center flex-col bg-grayBackground w-full cursor-pointer`}
        onClick={handleClickFirstButton}
      >
        <span className="text-gray-500">Twitter Blue</span>
        <h3 className="font-bold">Bireyim</h3>
        <span className="text-gray-500">Bireyler ve içerik üreticileri</span>
      </div>

      <div
        className={`rounded-xl p-4 border-2 ${
          isSecondButtonActive ? "border-twitterBlue" : ""
        } flex justify-center flex-col bg-grayBackground w-full cursor-pointer`}
        onClick={handleClickSecondButton}
      >
        <span className="text-gray-500">Onaylı Kuruluşlar</span>
        <h3 className="font-bold">Kuruluş</h3>
        <span className="text-gray-500">İşletmeler, devler kurumları</span>
      </div>
    </div>
  );
};

export default VerifiedPlan;
