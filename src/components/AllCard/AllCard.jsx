/* eslint-disable react/prop-types */

import Banner from "../Banner/Banner";
import Card from "../Card/Card";

const AllCard = ({ data, setData }) => {
  return (
    <>
      <section id="banner">
        <Banner setData={setData}></Banner>
      </section>
      <section id="all-Card">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 px-10 my-20 ">
          {data.map((card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default AllCard;
