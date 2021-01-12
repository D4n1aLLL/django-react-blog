import axios from "axios";
import { ADD_POST, DELETE_POST, GET_POSTS, UPDATE_POST } from "./types";

export const getPosts = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/posts/")
    .then((res) => {
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
  axios
    .put(`http://127.0.0.1:8000/api/posts/${post.id}/`, post)
    .then((res) => dispatch({ type: UPDATE_POST, payload: res.data }))
    .catch((err) => console.log(err));
};

export const deletePost = (postID) => (dispatch, getState) => {
  axios
    .delete(`http://127.0.0.1:8000/api/posts/${postID}/`)
    .then((res) => dispatch({ type: DELETE_POST, payload: postID }))
    .catch((err) => console.log(err));
};
