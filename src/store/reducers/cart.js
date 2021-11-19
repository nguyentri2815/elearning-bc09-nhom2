import { actionType } from "../actions/type";

const initialState = {
  listCart: [],
  listOfEnrolled: [],
  discount: {
    code: "elearning",
    rate: "0.3",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      const cloneCart = [...state.listCart];
      cloneCart.push(action.payload);
      state.listCart = cloneCart;
      return { ...state };
    case actionType.DET_INTHE_CART:
      let cloneListCart = [...state.listCart];
      let indexx = state.listCart.findIndex((item) => {
        return item.maKhoaHoc === action.payload;
      });
      cloneListCart.splice(indexx, 1);
      state.listCart = cloneListCart;
      return { ...state };
    case actionType.RELOAD_CART:
      state.listCart = [];
      return { ...state };
    default:
      return state;
  }
};
export default reducer;
