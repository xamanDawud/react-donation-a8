const Card = ({ card }) => {
  let {
    Picture,
    Description,
    id,
    Title,
    Category,
    Price,
    card_bg,
    category_bg,
    title_color,
  } = card;

  //   let bg={
  //     background:card_
  //   }

  return (
    <div style={{ background: card_bg }} className="rounded-b-md">
      <img src={Picture} alt="" />
      <span className="px-6 flex-col">
        <p
          className="inline-block font-semibold my-3 p-1 rounded-sm px-2"
          style={{ background: category_bg, color: title_color }}
        >
          {Category}
        </p>
        <h1
          className="block mx-6 text-1xl font-bold"
          style={{ color: title_color }}
        >
          {Title}
        </h1>
      </span>
    </div>
  );
};

export default Card;
