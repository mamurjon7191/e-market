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
const addCountReducer = function (history = [], obj) {
  if (obj.type === "Count") {
    return (history = [...history, obj.payload]);
  } else return history;
};

const deleteCountReducer = function (history = [], obj) {
  if (obj.type === "DeleteCount") {
    const kerak = obj.info.findIndex((val) => {
      return val.id === obj.payload.id;
    });
    obj.info.splice(kerak, 1);
    return (history = obj.info);
  } else return history;
};

const deleteCartReducer = function (history = [], obj) {
  if (obj.type === "Delete") {
    const kerak = obj.info.findIndex((val) => {
      return val.id === obj.payload.id;
    });
    obj.info.splice(kerak, 1);
    return (history = obj.info);
  } else return history;
};

const allReducers = combineReducers({
  addCartReducer,
  deleteCartReducer,
  deleteCountReducer,
  addCountReducer,
});

export default allReducers;
