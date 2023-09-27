import { getStoredDonation } from "../../Utility/localStorage";
import { useLoaderData } from "react-router-dom";
import DonationDisplay from "../DonationDisplay/DonationDisplay";
import { useState } from "react";

const Donation = () => {
  let [data, setData] = useState(4);
  let donationAllData = useLoaderData();
  let getDonation = getStoredDonation();
  let filteredData = donationAllData.filter((data) =>
    getDonation.includes(data.Id)
  );

  return (
    <div>
      <div className="grid grid-cols-2 gap-6 m-12">
        {filteredData.slice(0, data).map((data) => (
          <DonationDisplay key={data.Id} data={data}></DonationDisplay>
        ))}
      </div>
      <div className={`${data > 4 ? "hidden" : ""}`}>
        <button
          onClick={() => {
            setData(getDonation.length);
          }}
          className={`text-white bold px-2 py-2 rounded-md bg-sky-300 text-center block mx-auto`}
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default Donation;
