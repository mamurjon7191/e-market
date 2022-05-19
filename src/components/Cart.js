import React, { useState } from "react";
import { connect } from "react-redux";
import { needForCountingAction } from "../redux/actions";
import { deleteCartAction } from "../redux/actions";
import { deleteCountAction } from "../redux/actions";

const Cart = function (props) {
  const [count, setCount] = useState(1);
  let needAdd;
  let needDelete;
  const adding = function (val) {
    props.needForCountingAction(val);
  };
  const deleting = function (val) {
    props.deleteCountAction(val, props.addCountReducer);
    if (props.addCountReducer.length == 0) {
      props.deleteCartAction(val, props.addCartReducer);
      console.log(val);
      console.log(props);
    }
  };
  const ReadyProducts = () => {
    return props.addCartReducer.map((val) => {
      return (
        <div>
          <div
            style={{
              display: "grid",
              // justifyContent: "center",
              gridTemplateColumns: "1fr 1fr",
              alignItems: "center",
              marginTop: "3rem",
            }}
          >
            <img
              src={val.image}
              style={{ height: "300px", width: "300px", justifySelf: "center" }}
            ></img>
            <div class="inline">
              <h1>{val.title}</h1>
              <h2>
                {props.addCountReducer.filter((a) => {
                  return a == val;
                }).length + 1}
                X ${val.price}= $
                {(props.addCountReducer.filter((a) => {
                  return a == val;
                }).length +
                  1) *
                  val.price}
              </h2>
              <div
                style={{ display: "flex", gap: "0.5rem", marginTop: "2rem" }}
              >
                <div>
                  <i
                    onClick={() => {
                      deleting(val);
                    }}
                    class="minus icon circle"
                    style={{
                      fontSize: "3rem",
                      cursor: "pointer",
                      color: "purple",
                    }}
                  ></i>
                </div>
                <div>
                  <i
                    onClick={() => {
                      adding(val);
                    }}
                    class="plus icon circle"
                    style={{
                      fontSize: "3rem",
                      cursor: "pointer",
                      color: "green",
                      // opacity: 0.7,
                    }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div style={{ padding: "3rem" }}>
      <ReadyProducts />
    </div>
  );
};

const getMyState = function (state) {
  return state;
};

export default connect(getMyState, {
  needForCountingAction,
  deleteCartAction,
  deleteCountAction,
})(Cart);
