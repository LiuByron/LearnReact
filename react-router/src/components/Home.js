import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Acc from '../acc.png';
import { connect } from 'react-redux';

class Home extends Component {
  // state = {
  //   posts: []
  // }
  // componentDidMount() {
  //   axios.get('http://jsonplaceholder.typicode.com/posts').then(res => {
  //     this.setState({
  //       posts: res.data.slice(0, 20)
  //     })
  //   })
  // }
  render() {
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Acc} alt="图片" />
            <div className="card-content">
              <Link to={`/${post.id}`}>
                 <span className="card-title text-cyan">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="cnter">没有博客文章进行展示！</div>
    )
    return (
      <div>
        <div className="container home">
          <h3 className="center">Home页面</h3>
          {postList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home);