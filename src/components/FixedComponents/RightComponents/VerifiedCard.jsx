import { NavLink } from "react-router-dom";

const VerifiedCard = () => {
  return (
    <div className="bg-[#16181C] mt-6 p-4 rounded-xl">
      <h1 className="mb-2 text-xl font-bold">Onaylanmış Hesaba Sahibi Ol</h1>
      <h2 className="mb-2 font-bold">
        Yeni özelliklerden yararlanmak için abone ol.
      </h2>
      <NavLink to="/verified">
        <button className="bg-twitterBlue rounded-full px-5 font-[700] py-2 hover:bg-twitterBlue/80 hover:duration-200">
          Onaylanmış Hesaba Sahip Ol
        </button>
      </NavLink>
    </div>
  );
};

export default VerifiedCard;
