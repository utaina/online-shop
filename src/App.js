import { Route, Routes } from "react-router-dom";
import { Main, About, NotFound, AboutItem, Login, Cart } from "./pages";
import { Layout } from "./components/Layout";
import "./App.css";
import { LoginProvider } from "./hoc/LoginProvider";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "./store/slices/cartSlice";
import { productsFetch } from "./store/slices/ProductsSlice";
import { RequireAuth } from "./hoc/RequireAuth";

function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsFetch());
  }, []);
  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  return (
    <LoginProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/items/:id" element={<AboutItem />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/cart"
            element={
              <RequireAuth>
                <Cart />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </LoginProvider>
  );
}

export default App;
