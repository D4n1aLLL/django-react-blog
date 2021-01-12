import {
  ADD_POST,
  DELETE_POST,
  GET_POSTS,
  UPDATE_POST,
} from "../actions/types";

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload };
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case UPDATE_POST:
      return { ...state, posts: action.payload };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((_p) => _p.id !== action.payload),
      };
    default:
      return state;
  }
};

export default postReducer;
