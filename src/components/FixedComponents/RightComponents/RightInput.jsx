import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";

const Right = ({ placeholderName }) => {
  const [active, setActive] = useState(false);
  const inputRef = useRef(null);

  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setActive(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex bg-grayBackground items-center rounded-full  relative">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={`absolute ml-4 ${
          active ? "text-[#1C9BF1]" : "text-gray-500"
        }`}
      />
      <input
        placeholder={placeholderName}
        ref={inputRef}
        onFocus={handleClick}
        type="text"
        className="rounded-full w-full bg-transparent outline-none border border-transparent px-12 focus:border-twitterBlue py-2"
      />
    </div>
  );
};

export default Right;
