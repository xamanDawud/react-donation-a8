import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";

const AllCard = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("/public/data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  //   for (let card of data) {
  //     console.log(card.Picture);
  //   }
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 px-10 my-20 ">
      {data.map((card) => (
        <Card key={card.id} card={card}></Card>
      ))}
    </div>
  );
};

export default AllCard;
