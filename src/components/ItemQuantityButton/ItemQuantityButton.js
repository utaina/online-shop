import { useDispatch } from "react-redux";
import { addToCart, decreaseQuantity } from "../../store/slices/cartSlice";
import { Button } from "../Button/Button";
import "./ItemQuantityButton.css";

export const ItemQuantityButton = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity(item));
  };

  return (
    <div className="item-quantity">
      <Button
        onClick={() => handleDecreaseQuantity(item)}
        className="quant-button"
        name="-"
      />
      <div className="quantity">{item.itemQuantity}</div>
      <Button
        onClick={() => handleAddToCart(item)}
        className="quant-button"
        name="+"
      />
    </div>
  );
};
