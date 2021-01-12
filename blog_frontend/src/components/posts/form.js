import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../../actions/posts";
import PropTypes from "prop-types";

class PostForm extends Component {
  state = {
    id: -1,
    title: "",
    body: "",
    status: -1,
  };
  constructor(props) {
    super(props);
    this.state = { ...props.post };
  }
  static propTypes = {
    addPost: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const post = this.state;
    // console.log(post);
    this.props.handleSubmit(post);
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { title, body, status } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>New Post</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.onChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Content:</label>
            <textarea
              type="text"
              name="body"
              rows="15"
              value={body}
              onChange={this.onChange}
              className="form-control"
            />
          </div>
          <div className="form-group" onChange={this.onChange}>
            <label>Status: &nbsp;</label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                id="inlineRadio1"
                defaultChecked={status === 0}
                value={0}
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Draft
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                id="inlineRadio2"
                defaultChecked={status === 1}
                value={1}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Publish
              </label>
            </div>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              {this.props.buttonLabel}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addPost })(PostForm);
