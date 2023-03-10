import { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../../hoc/LoginProvider";
import { Button } from "../Button/Button";
import "./NavBar.css";

export const NavBar = () => {
  const {isLoggedIn, changeLoginStatus} = useContext(LoginContext)
  const cart = useSelector((state) => state.cart);
  const active = {
    color: "#61dafb",
  };
  const handleLogOut = () => {
    changeLoginStatus(false)
  }
  return (
    <header className="App-header">
      <h1>Shop</h1>
      <nav className="nav-block">
        <NavLink
          style={({ isActive }) => (isActive ? active : undefined)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? active : undefined)}
          to="about"
        >
          About
        </NavLink>
        {isLoggedIn ? <Button onClick={handleLogOut} name='Logout'/> : <NavLink to="/login">Login</NavLink>}
      </nav>
      <div className="cart">
        <NavLink to="/cart">
          <div className="nav-bag">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-basket"
              viewBox="0 0 16 16"
            >
              <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
            </svg>
            <span className="items-quantity">
              <span>{cart.cartItemsQuantity}</span>
            </span>
          </div>
        </NavLink>
        <div>Total: {cart.cartItemsCost}$</div>
      </div>
    </header>
  );
};
