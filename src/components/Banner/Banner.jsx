import "./Banner.css";
const Banner = () => {
  return (
    <div className="block text-center py-28 banner my-2 lg:pb-40 ">
      <h1 className="lg:text-3xl md:text-2xl font-bold my-6">
        I Grow By Helping People In Need
      </h1>
      <span>
        <input
          className="border  border-gray-300 pe-12 ps-4 py-2 rounded-md rounded-e-none"
          type="text"
          placeholder="Search"
        />
        <button className="bg-[#ff444a] text-white p-2 rounded-md rounded-l-none">
          Search
        </button>
      </span>
    </div>
  );
};

export default Banner;
