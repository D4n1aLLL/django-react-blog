import axios from "axios";
import { ADD_POST, GET_POSTS, UPDATE_POST } from "./types";

export const getPosts = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/posts/")
    .then((res) => {
      //console.log(res.data);
      dispatch({ type: GET_POSTS, payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const addPost = (post) => (dispatch, getState) => {
  axios
    .post("http://127.0.0.1:8000/api/posts/", post)
    .then((res) => dispatch({ type: ADD_POST, payload: res.data }))
    .catch((err) => console.log(err));
};

export const updatePost = (post) => (dispatch, getState) => {
  console.log("UPDATE_POST");
  console.log(post);
  axios
    .put(`http://127.0.0.1:8000/api/posts/${post.id}/`, post)
    .then((res) => dispatch({ type: UPDATE_POST, payload: res.data }))
    .catch((err) => console.log(err));
};
