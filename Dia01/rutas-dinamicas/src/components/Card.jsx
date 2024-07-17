import "./Card.css";

function Card({ product }) {
  return (
    <div className="card">
      <picture className="card_picture">
        <img
          width={200}
          height={200}
          className="card_image"
          src={product.image}
          alt=""
        />
      </picture>
      <h3 className="card_title">{product.title}</h3>
      <div className="card_description">
        <h4 className="card_price">{product.price}</h4>
        <h5 className="card_rate">{product.rating.rate}</h5>
      </div>
    </div>
  );
}

export default Card;
