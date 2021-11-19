import { actionType } from "../actions/type";

const initialState = {
  coursesAll: [],
  courses: {
    currentPage: 1,
    count: "",
    totalPages: "",
    totalCount: "",
    items: [],
  },
  courseDetail: {},
  listCategoryCourse: [],
  courseByCategory: [],
  // courseEdit: {},
  courseUpdate: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_COURSES:
      state.courses = action.payload;
      return { ...state };
    case actionType.SET_ALLCOURSES:
      state.coursesAll = action.payload;
      return { ...state };
    case actionType.SELECTED_PRODUCT:
      state.courseDetail = action.payload;
      return { ...state };
    case actionType.GET_CATEGORY:
      state.listCategoryCourse = action.payload;
      return { ...state };
    case actionType.GET_COURSESBYCAT:
      state.courseByCategory = action.payload;
      return { ...state };
    case actionType.EDIT_COURSE:
      let clonestate={...state}
      clonestate.courseUpdate = action.payload;
      return { ...state,...clonestate };
    case actionType.UPDATE_COURSE:
      state.courseUpdate = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
