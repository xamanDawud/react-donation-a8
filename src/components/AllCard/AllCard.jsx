import { useState } from "react";
import { useEffect } from "react";

const AllCard = () => {
  let [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("/public/data.json")
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   }, []);
  console.log(data);
  return <div>Here will come all card</div>;
};

export default AllCard;
