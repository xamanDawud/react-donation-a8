/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./Banner.css";
const Banner = ({ setData }) => {
  let [getData, setGetData] = useState([]);
  let inputRef = useRef();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setGetData(data));
  }, []);

  let serchBtnHandler = () => {
    let search = inputRef.current.value.toLowerCase();
    let filteredSearch = getData.filter((data) =>
      data.Category.toLowerCase().includes(search)
    );
    console.log(filteredSearch);
    if (filteredSearch.length == 0) {
      toast("Search data is not available");
      return;
    }
    setData(filteredSearch);
    inputRef.current.value = "";
  };

  return (
    <div className="block text-center lg:py-28 md:py-18 banner my-2 lg:pb-40 ">
      <h1 className="lg:text-3xl md:text-2xl font-bold my-6">
        I Grow By Helping People In Need
      </h1>
      <span>
        <input
          ref={inputRef}
          className="border  border-gray-300 pe-12 ps-4   py-2 rounded-md rounded-e-none"
          type="text"
          placeholder="Search"
        />
        <button
          onClick={serchBtnHandler}
          className="bg-[#ff444a] text-white p-2 rounded-md rounded-l-none"
        >
          Search
        </button>
      </span>
      <Toaster />
    </div>
  );
};

export default Banner;
