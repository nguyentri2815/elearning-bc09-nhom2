import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import course from "./reducers/course";
import thunk from "redux-thunk";
import me from "./reducers/me";
import cart from "./reducers/cart";
import adminUsers from "./reducers/adminUsers";

const reducer = combineReducers({
  // khai báo reducer con
  course,
  me,
  cart,
  adminUsers
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
