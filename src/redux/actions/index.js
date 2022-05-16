//Add product to card!
export const addCartAction = function (obj) {
  return {
    type: "Add",
    payload: obj,
  };
};
// Delete product to cart!
export const deleteCartAction = function (obj, info) {
  return {
    type: "Delete",
    payload: obj,
    info: info,
  };
};
