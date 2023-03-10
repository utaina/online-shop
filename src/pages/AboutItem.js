import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { ItemQuantityButton } from "../components/ItemQuantityButton/ItemQuantityButton";
import { LoginContext } from "../hoc/LoginProvider";
import { addToCart, decreaseQuantity } from "../store/slices/cartSlice";
import { NotFound } from "./NotFound";

export const AboutItem = () => {
  const {isLoggedIn} = useContext(LoginContext)
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState();
  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Something went wrong");
      })
      .then(setItem)
      .catch(setError);
  }, []);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const cart = useSelector((state) => state.cart);
  const itemInCart = cart.cartItems?.find((el) => el.id === item?.id);
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity(item));
  };

  return (
    <>
      {error ? (
        <NotFound />
      ) : (
        <div className="about-container">
          <img src={item?.images[1]} />
          <div className="about-main-block">
            <h2>{item?.title}</h2>
            <p>{item?.description}</p>
            {!isLoggedIn ? <div className="button-link"><Link to="/login"><p>Login</p></Link></div> : itemInCart ? (
              <ItemQuantityButton
                decQuantity={() => handleDecreaseQuantity(item)}
                incQuantity={() => handleAddToCart(item)}
                item={itemInCart}
              />
            ) : (
              <Button
                onClick={() => handleAddToCart(item)}
                name="Add to cart"
              />
            )}
            <Button onClick={goBack} name="Go Back" />
          </div>
        </div>
      )}
    </>
  );
};
