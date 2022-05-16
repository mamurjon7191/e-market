import { combineReducers } from "redux";

const addCartReducer = function (history = [], obj) {
  if (obj.type === "Add") {
    const exist = history.some((a) => {
      return a === obj.payload;
    });
    if (exist) {
      return history;
    } else {
      return (history = [...history, obj.payload]);
    }
  } else return history;
};
const deleteCartReducer = function (history = [], obj) {
  if (obj.type === "Delete") {
    const kerak = obj.info.findIndex((val) => {
      return val.id === obj.payload.id;
    });
    return (history = obj.info.splice(kerak, 1));
  } else return history;
};

const allReducers = combineReducers({
  addCartReducer,
  deleteCartReducer,
});

export default allReducers;
