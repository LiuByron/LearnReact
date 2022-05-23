import React from 'react';
import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div>
      <div className="container">
        <h3 className="center">About页面</h3>
        <p>关于我们！</p>
      </div>
    </div>
  )
}

export default Rainbow(About);