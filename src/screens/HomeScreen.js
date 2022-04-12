import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../state/actions/productActions";

function HomeScreen({}) {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  const location = useLocation();
  const category = location.search ? location.search.split("=")[1] : "";
  category ? console.log(category) : console.log("category");

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  const ShowProdacts = (product) => {
    return (
      <li key={product._id}>
        <div className="product">
          <Link to={"/product/" + product._id}>
            <img
              className="product-image"
              src={product.image}
              alt={product.name}
            />
          </Link>
          <div className="product-name">
            <Link to={"/product/" + product._id}>{product.name}</Link>
          </div>
          <div className="product-brand">{product.brand}</div>
          <div className="product-price">${product.price}</div>
          <div className="product-rating"></div>
        </div>
      </li>
    );
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ul className="products">
          {category
            ? products
                .filter((product) => product.category === category)
                .map((product) => ShowProdacts(product))
            : products.map((product) => ShowProdacts(product))}
        </ul>
      )}
    </>
  );
}
export default HomeScreen;
