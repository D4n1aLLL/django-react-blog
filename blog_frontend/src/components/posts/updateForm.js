import React, { Component } from "react";
import { connect } from "react-redux";
import PostForm from "./form";
import { updatePost } from "../../actions/posts";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class UpdateForm extends Component {
  static propTypes = {
    updatePost: PropTypes.func.isRequired,
  };

  onSubmit = (post) => {
    this.props.updatePost(post);
  };
  render() {
    const post = this.props.location.query;
    return (
      <div>
        <center>
          <h1>Update Post</h1>
        </center>
        <PostForm
          handleSubmit={this.onSubmit}
          buttonLabel="Update"
          post={post}
        />
      </div>
    );
  }
}
export default connect(null, { updatePost })(withRouter(UpdateForm));
