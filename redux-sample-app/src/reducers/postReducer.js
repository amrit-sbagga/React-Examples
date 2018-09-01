import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log("postReducer: FETCH_POSTS");
      return {
        ...state, //spread operator
        items: action.payload
      };

    case NEW_POST:
      console.log("postReducer: NEW_POST");
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
