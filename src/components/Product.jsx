import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
// actions
import { addCartAction } from "../redux/actions";
//actions

const Product = function (props) {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const tayyor = id.slice(1);
  useEffect(() => {
    const getProduct = async function () {
      setLoading(true);
      const response = await fetch(
        `https://fakestoreapi.com/products/${tayyor}`
      );
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);
  const Loading = function () {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            paddingTop: "5rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "7rem",
          }}
        >
          <div>
            <Skeleton width={400} height={400} />
          </div>
          <div className="infoSide" style={{ lineHeight: "4rem" }}>
            <Skeleton height={50} width={300} />
            <Skeleton height={40} width={500} />
            <Skeleton height={30} width={100} />
            <Skeleton height={30} width={150} />
            <Skeleton height={100} width={500} />
          </div>
        </div>
      </div>
    );
  };

  const addCart = () => {
    props.addCartAction(product);
  };
  const ShowProduct = function () {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            paddingTop: "5rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            // gap: "7rem",
          }}
        >
          <div
            className="imgSide"
            style={{
              justifySelf: "center",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <img
              src={product.image}
              alt="rasm"
              style={{ width: "400px", height: "400px" }}
            />
            <button
              class="ui button"
              style={{ width: "50%", marginLeft: "25%" }}
              onClick={addCart}
            >
              Add to Cart
            </button>
            <div
              class="ui button"
              tabindex="0"
              style={{ width: "50%", marginLeft: "25%" }}
            >
              <NavLink className="cart" to="/cart">
                Go to Cart
              </NavLink>
            </div>
          </div>
          <div
            className="infoSide"
            style={{ fontFamily: "monospace", opacity: "1" }}
          >
            <h2
              style={{
                textTransform: "Uppercase",
                fontSize: "2.2rem",
                fontFamily: "monospace",
                opacity: "0.7",
              }}
            >
              {product.category}
            </h2>
            <p
              style={{
                textTransform: "Uppercase",
                letterSpacing: "5px",
                fontSize: "3.2rem",
              }}
            >
              {product.title}
            </p>
            <div style={{ marginTop: "-2rem", opacity: "0.8" }}>
              <h2>
                Rating: {product.rating && product.rating.rate}{" "}
                <i className="star icon"></i>
              </h2>
            </div>
            <div
              className="price"
              style={{ opacity: "100rem", paddingTop: "1rem" }}
            >
              <h1 style={{ fontSize: "4rem" }}>$ {product.price}</h1>
            </div>
            <div className="desc">
              <p style={{ marginTop: "1rem", fontSize: "1.3rem" }}>
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <div>{loading ? <Loading /> : <ShowProduct />}</div>;
};
// export default Product;

const getMyState = function (state) {
  return state;
};

export default connect(getMyState, {
  addCartAction,
})(Product);
