import React, { Component } from "react";
import { getPosts, deletePost } from "../../actions/posts";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Post from "./post";

class Posts extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    getPosts: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.getPosts();
  }
  // componentDidUpdate() {
  //   this.props.getPosts();
  // }
  onDelete = (id) => {
    this.props.deletePost(id);
  };

  render() {
    return (
      <React.Fragment>
        {this.props.posts.map((_p) => (
          <Post _p={_p} onDelete={this.onDelete} key={_p.id} />
        ))}
      </React.Fragment>
    );
  }
}

const mapToPropTypes = (state) => {
  return { posts: state.posts.posts };
};

export default connect(mapToPropTypes, { getPosts, deletePost })(Posts);
