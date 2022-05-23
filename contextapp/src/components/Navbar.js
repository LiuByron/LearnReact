import React, { Component } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
  // static contextType = ThemeContext;
  // render() {
  //   const { isLightTheme, light, dark } = this.context;
  //   const theme = isLightTheme ? dark : light;
  //   return (
  //     <nav style={{background: theme.bg, color: theme.syntax}}>
  //       <h1>Context App</h1>
  //       <ul>
  //         <li>Home</li>
  //         <li>About</li>
  //         <li>Contact</li>
  //       </ul>
  //     </nav>
  //   )
  // }
  render() {
    return (
      <AuthContext.Consumer>{(authContext) => (
        <ThemeContext.Consumer>{(themeContext) => {
          const { isAuthenticated, toggleAuth } = authContext;
          const { isLightTheme, light, dark } = themeContext;
          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{background: theme.bg, color: theme.syntax}}>
              <h1>Context App</h1>
              <div onClick={toggleAuth} style={{cursor: 'pointer'}}>
                {isAuthenticated ? '已登录' : '未登录'}
              </div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          )
        }}
        </ThemeContext.Consumer>
      )}
      </AuthContext.Consumer>
    )
  }
}

export default Navbar;