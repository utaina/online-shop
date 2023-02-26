import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { ItemQuantityButton } from "../ItemQuantityButton/ItemQuantityButton";
import { useSelector } from "react-redux";

export const Card = ({ item, onClick, decQuantity }) => {
  const cart = useSelector((state) => state.cart);
  const itemInCart = cart.cartItems?.find((el) => el.id === item.id);
  return (
    <div className="card-container">
      <div className="img-card-block">
        <img src={item.images[1]}></img>
      </div>
      <div className="main-card-block">
        <Link to={`items/${item.id}`}>
          <h3>{item.title}</h3>
        </Link>
        <p>${item.price}</p>
      </div>
      {itemInCart ? (
        <ItemQuantityButton item={itemInCart} />
      ) : (
        <Button onClick={() => onClick(item)} name="Add to cart" />
      )}
    </div>
  );
};
