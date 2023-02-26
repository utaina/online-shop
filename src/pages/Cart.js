import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../components/CartItem/CartItem";
import { Button } from "../components/Button/Button";
import { clearCart, getTotals } from "../store/slices/cartSlice";
import { useEffect } from "react";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);
  return (
    <div className="cart-container">
      {cart.cartItems.length ? (
        <div>
          <div className="titles">
            <h3>#</h3>
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems?.map((item) => {
              return <CartItem key={item.id} item={item}></CartItem>;
            })}
          </div>
          <div className="cart-checkout">
            <Button onClick={() => handleClearCart()} name="Clear Cart" />
            <div className="checkout-block">
              <div>Total: {cart.cartItemsCost}</div>
              <Button name="Buy" />
            </div>
          </div>
        </div>
      ) : (
        <p> Cart is empty</p>
      )}
    </div>
  );
};
