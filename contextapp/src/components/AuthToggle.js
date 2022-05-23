import React, { Component } from 'react';
import { AuthContext } from '../contexts/AuthContext';

class ThemeToggle extends Component {
  static contextType = AuthContext;
  render() {
    const { toggleAuth } = this.context;
    return (
      <button onClick={toggleAuth}>主题认证</button>
    )
  }
}

export default ThemeToggle;
