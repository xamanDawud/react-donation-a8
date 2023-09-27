import { getStoredJobApplication } from "../../Utility/localStorage";
import { useLoaderData } from "react-router-dom";
import DonationDisplay from "../DonationDisplay/DonationDisplay";

const Donation = () => {
  let donationAllData = useLoaderData();
  let getDonation = getStoredJobApplication();
  let filteredData = donationAllData.filter((data) =>
    getDonation.includes(data.Id)
  );

  return (
    <div className="grid grid-cols-2 gap-6 m-12">
      {filteredData.map((data) => (
        <DonationDisplay key={data.Id} data={data}></DonationDisplay>
      ))}
    </div>
  );
};

export default Donation;
