import { actionType } from "../actions/type";

const initialState = {
  // allUser:{},
  allUser:{},
  UserEdit:{},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_ALLUSERS:
      let cloneStateAll={...state};
      cloneStateAll.allUser = action.payload;

      return {...cloneStateAll};
    case actionType.EDIT_USER:
      // let cloneAccont = { ...state };
      // let indexx = state.chiTietKhoaHocGhiDanh.findIndex((item) => {
      //   return item.maKhoaHoc === action.payload.maKhoaHoc;
      // });
      // cloneAccont.chiTietKhoaHocGhiDanh.splice(indexx, 1);
      // state = cloneAccont;
      let cloneState={...state}
      cloneState.UserEdit=action.payload
      // console.log(cloneState);
      return cloneState;
    default:
      return state;
  }
};

export default reducer;
