import React from 'react';
import Rainbow from "../hoc/Rainbow";

const Content = (props) => {
  // setTimeout(() => {
  //   props.history.push('/about') // 重定向
  // }, 2000)
  return (
    <div>
      <div className="container">
        <h3 className="center">Content页面</h3>
        <p>内容页！</p>
      </div>
    </div>
  )
}

export default Rainbow(Content);