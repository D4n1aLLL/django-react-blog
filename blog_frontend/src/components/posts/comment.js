import { connect } from "react-redux";

const Comment = (props) => {
  const _c = props.comment;
  return (
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
  );
};

const mapPropTypes = (state) => ({ comment: state.comment });
export default connect(mapPropTypes)(Comment);
