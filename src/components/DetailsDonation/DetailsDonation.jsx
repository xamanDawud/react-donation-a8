import { useLoaderData, useParams } from "react-router-dom";
import { saveDonation } from "../../Utility/localStorage";
import toast, { Toaster } from "react-hot-toast";

const DetailsDonation = () => {
  let datas = useLoaderData();
  let { Id } = useParams();
  let idInt = parseInt(Id);
  let cardDetails = datas.find((data) => data.Id === idInt);
  // console.log(datas);

  let donationHandler = (id) => {
    saveDonation(id);
    toast("Your donation is added");
  };
  return (
    <div>
      <div className="relative">
        <img
          className="w-4/5 mx-auto text-center mt-10 height-[600px] rounded-md"
          src={cardDetails.Picture}
          alt=""
        />
        <div className="bg-gray-400 w-4/5 ml-[128px] opacity-60 h-[100px] absolute bottom-0">
          <button
            onClick={() => {
              donationHandler(idInt);
            }}
            style={{ background: cardDetails.title_color }}
            className="p-3 rounded-md mx-8 my-6 text-white opacity-100"
          >
            Donate {cardDetails.Price}
          </button>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-black my-6 text-2xl w-4/5 mx-auto">
          {cardDetails.Title}
        </h1>
        <p className="my-6 text-1xl w-4/5 mx-auto">{cardDetails.Description}</p>
      </div>
      <Toaster />
    </div>
  );
};

export default DetailsDonation;
