import React, { useState, useEffect } from "react";

const Products = function () {
  // const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  let componentMounted = true;
  useEffect(() => {
    setLoading(true);

    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setFilter(await response.json());
        console.log(filter);
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
      // componentMounted = false;
    };
    // getProducts();
    console.log(componentMounted);
  }, [filter]);
  const Loading = function () {
    return (
      <div>
        <div className="ui active centered inline loader"></div>
      </div>
    );
  };
  // const readyProducts = function () {};
  return (
    <div>
      <div className="main-title">
        <h1>Latest Products</h1>
        <hr />
      </div>
      <Loading />
    </div>
  );
};

export default Products;
