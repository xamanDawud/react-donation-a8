const Card = ({ card }) => {
  let {
    Picture,
    Description,
    id,
    Title,
    Category,
    Price,
    health_card_bg,
    health_category_bg,
    health_title_color,
  } = card;
  return (
    <div>
      <img src={Picture} alt="" />
      <p>{Category}</p>
      <h1>{Title}</h1>
    </div>
  );
};

export default Card;
