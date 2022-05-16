import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";

const Products = function () {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
    };
    getProducts();
  }, []);
  const Loading = function () {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          padding: "3rem",
          gap: "2rem",
        }}
      >
        <Skeleton height={340} />
        <Skeleton height={340} />
        <Skeleton height={340} />
        <Skeleton height={340} />
        <Skeleton height={340} />
        <Skeleton height={340} />
        <Skeleton height={340} />
        <Skeleton height={340} />
      </div>
    );
  };
  const ReadyProducts = function () {
    return filter.map((val, a) => {
      return (
        <div
          key={a}
          className="ui link cards"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="card">
            <div className="image">
              <img src={val.image} style={{ width: "100%", height: "300px" }} />
            </div>
            <div className="extra content">
              <div className="right floated">{val.price}$</div>
              <span>{val.title}</span>
            </div>
            <div style={{ textAlign: "center", paddingBottom: "1rem" }}>
              <div
                className="ui horizontal animated button"
                tabindex="0"
                style={{ width: "50%" }}
              >
                <NavLink to={`/products/:${val.id}`}>
                  <div className="hidden content">Buy Now</div>
                  <div className="visible content">
                    <i className="shop icon"></i>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  const filterProduct = (key) => {
    const obj = data.filter((val) => {
      return val.category == key;
    });
    setFilter(obj);
  };
  const Categories = function () {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "2rem" }}
      >
        <div
          class="ui animated fade button"
          tabindex="0"
          onClick={() => {
            setFilter(data);
          }}
        >
          <div class="visible content">All</div>
          <div class="hidden content">
            <i
              class="hand point up outline icon"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </div>
        </div>
        <div
          class="ui animated fade button"
          tabindex="0"
          onClick={() => {
            filterProduct("men's clothing");
          }}
        >
          <div class="visible content">Men's Clothing</div>
          <div class="hidden content">
            <i
              class="hand point up outline icon"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </div>
        </div>
        <div
          class="ui animated fade button"
          tabindex="0"
          onClick={() => {
            filterProduct("women's clothing");
          }}
        >
          <div class="visible content">Woman's Clothing</div>
          <div class="hidden content">
            <i
              class="hand point up outline icon"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </div>
        </div>
        <div
          class="ui animated fade button"
          tabindex="0"
          onClick={() => {
            filterProduct("jewelery");
          }}
        >
          <div class="visible content">Jewelery</div>
          <div class="hidden content">
            <i
              class="hand point up outline icon"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </div>
        </div>
        <div
          class="ui animated fade button"
          tabindex="0"
          onClick={() => {
            filterProduct("electronics");
          }}
        >
          <div class="visible content">Electronics</div>
          <div class="hidden content">
            <i
              class="hand point up outline icon"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="main-title">
        <h1>Latest Products</h1>
        <hr />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Categories />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
            }}
          >
            <ReadyProducts />
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
