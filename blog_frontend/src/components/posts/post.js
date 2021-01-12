import React, { Component } from "react";
import { Link } from "react-router-dom";
import Comment from "./comment";
import { connect } from "react-redux";

class Post extends Component {
  handleDelete = (id) => {
    this.props.onDelete(id);
  };
  render() {
    var _p = this.props._p;
    return (
      <div className="row pt-3 pb-5">
        <div className="col-lg-8">
          <h1 className="mt-4">{_p.title}</h1>
          <button
            className="btn btn-danger float-right"
            onClick={this.handleDelete.bind(this, _p.id)}
          >
            Delete
          </button>
          <Link
            to={{ pathname: `/${_p.id}`, query: _p }}
            className="btn btn-info float-right"
          >
            Edit
          </Link>
          <p className="lead">
            <span>by </span>
            <a href="!#">Danial Ahmed</a>
          </p>
          <hr />
          <p>{_p.created_on}</p>
          <hr />
          <img
            className="img-fluid rounded"
            src="http://placehold.it/900x300"
            alt=""
          />
          <hr />
          <p className="lead">{_p.body}</p>
          <hr />
          {_p.id &&
            _p.comments.map((_c) => <Comment key={_c.id} comment={_c} />)}
        </div>
      </div>
    );
  }
}
export default connect()(Post);
