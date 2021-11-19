import { actionType } from "../actions/type";

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_ME:
      state = action.payload;
      return { ...state };
    case actionType.CANCEL_ATTEND_COURSE:
      let cloneAccont = { ...state };
      let indexx = state.chiTietKhoaHocGhiDanh.findIndex((item) => {
        return item.maKhoaHoc === action.payload.maKhoaHoc;
      });
      cloneAccont.chiTietKhoaHocGhiDanh.splice(indexx, 1);
      state = cloneAccont;
      return { ...state };
    case actionType.LOGOUT_ACCOUNT: {
      state = null;
      return { ...state };
    }
    default:
      return state;
  }
};

export default reducer;
