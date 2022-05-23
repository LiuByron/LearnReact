import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions'

class Post extends Component {
  // state = {
  //   postContent: null
  // }
  // componentDidMount() {
  //   let id = this.props.match.params.post_id;
  //   axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
  //     this.setState({ postContent: res.data })
  //   })
  // }
  handleDelete = () => {
    const {post, deletePost, history} = this.props;
    deletePost(post.id);
    history.push('/')
  }
  render() {
    const { post } = this.props;
    const content = post ? (
      <div className="post card">
        <div className="card-content">
          <span className="card-title">{post.title}</span>
          <p>{post.body}</p>
        </div>
        <div className="center">
          <span className="waves-effect waves-light btn" onClick={this.handleDelete}>删除</span>
        </div>
      </div>
    ) : (
      <div className="center">未搜索到详情！</div>
    )
    return (
      <div className="container">
        {content}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const _id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(item => item.id == _id)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deletePost: (id) => dispatch(deletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
