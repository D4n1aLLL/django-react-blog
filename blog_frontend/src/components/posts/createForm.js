import React, { Component } from "react";
import { connect } from "react-redux";
import PostForm from "./form";
import { addPost } from "../../actions/posts";
import PropTypes from "prop-types";

class CreateForm extends Component {
  static propTypes = {
    addPost: PropTypes.func.isRequired,
  };
  onSubmit = (post) => {
    this.props.addPost(post);
  };
  render() {
    return (
      <div>
        <center>
          <h1>Create Post</h1>
        </center>
        <PostForm handleSubmit={this.onSubmit} buttonLabel="Submit" />
      </div>
    );
  }
}

export default connect(null, { addPost })(CreateForm);
