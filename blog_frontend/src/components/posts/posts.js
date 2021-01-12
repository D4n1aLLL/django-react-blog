import React, { Component } from "react";
import { getPosts } from "../../actions/posts";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Posts extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    getPosts: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    return (
      <React.Fragment>
        {this.props.posts.map((_p) => (
          <div className="row pt-3 pb-5" key={_p.id}>
            {/*Post Content Column*/}
            <div className="col-lg-8">
              {/* <!-- Title --> */}
              <h1 className="mt-4">{_p.title}</h1>
              <button className="btn btn-danger float-right">Delete</button>
              <Link
                to={{ pathname: `/${_p.id}`, query: _p }}
                className="btn btn-info float-right"
              >
                Edit
              </Link>
              {/* <!-- Author --> */}
              <p className="lead">
                <span>by </span>
                <a href="!#">Danial Ahmed</a>
              </p>
              <hr />
              {/* <!-- Date/Time --> */}
              <p>{_p.created_on}</p>
              <hr />
              {/* <!-- Preview Image --> */}
              <img
                className="img-fluid rounded"
                src="http://placehold.it/900x300"
                alt=""
              />
              <hr />
              {/* <!-- Post Content --> */}
              <p className="lead">{_p.body}</p>
              <hr />
              {_p.comments.map((_c) => (
                <div className="media mb-4" key={_c.id}>
                  {/* <img
                    class="d-flex mr-3 rounded-circle"
                    src="http://placehold.it/50x50"
                    alt=""
                  /> */}
                  <div className="media-body">
                    <h5 className="mt-0">noobmaster69 ({_c.created_on})</h5>
                    {_c.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

const mapToPropTypes = (state) => ({ posts: state.posts.posts });

export default connect(mapToPropTypes, { getPosts })(Posts);
