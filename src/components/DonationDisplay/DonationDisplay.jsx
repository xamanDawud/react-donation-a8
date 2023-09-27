import React from "react";
import { NavLink } from "react-router-dom";

const DonationDisplay = ({ data }) => {
  let {
    Picture,
    Description,
    Id,
    Title,
    Category,
    Price,
    card_bg,
    category_bg,
    title_color,
  } = data;
  //   console.log(data);
  return (
    <div style={{ background: card_bg }} className="flex">
      <div>
        <img className="w-[200px] h-full" src={Picture} alt="" />
      </div>
      <div className="ml-4 my-6">
        <h3
          className="px-2 rounded-sm inline block py-1 font-semibold"
          style={{ background: category_bg, color: title_color }}
        >
          {Category}
        </h3>
        <h1 className="text-black font-bold text-2xl my-1">{Title}</h1>
        <p className="font-semibold my-2" style={{ color: title_color }}>
          {Price}
        </p>
        <NavLink to={`/detailsDonation/${Id}`}>
          <button
            style={{ background: title_color }}
            className="text-white bold px-2 py-2 rounded-md"
          >
            View Details
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default DonationDisplay;
