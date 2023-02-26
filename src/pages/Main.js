import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/Card/Card";
import { Pagination } from "../components/Pagination/Pagination";
import { addToCart } from "../store/slices/cartSlice";

export const Main = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductPerPage] = useState(20);
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = items.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="main-container">
      <div className="product-container">
        {currentProducts.map((item) => {
          return <Card key={item.id} item={item} onClick={handleAddToCart} />;
        })}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        productsNumber={items.length}
        paginate={paginate}
      />
    </div>
  );
};
