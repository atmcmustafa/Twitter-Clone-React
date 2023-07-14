import { useState } from "react";

const BlockBar = ({ blockName, isActive }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="flex w-full mt-3 border-b border-borderGray text-sm">
      <div
        onClick={() => setActive(!isActive)}
        className="hover:bg-grayBackground w-full text-center py-3 cursor-pointer duration-200 font-bold"
      >
        <span
          className={`${
            isActive || active ? "border-b-[4px] border-twitterBlue" : ""
          }  py-2`}
        >
          {blockName}
        </span>
      </div>
    </div>
  );
};

export default BlockBar;
