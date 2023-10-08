import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllCard from "../AllCard/AllCard";

const Home = () => {
  let [data, setData] = useState(useLoaderData());
  // console.log(data);
  return (
    <div>
      <AllCard data={data} setData={setData}></AllCard>
    </div>
  );
};

export default Home;
