import React, { Component } from 'react';

class AddContact extends Component {
  state = {
    name: null,
    age: null,
    sex: null
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleData(this.state);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="sex">Sex:</label>
          <input type="text" id="sex" onChange={this.handleChange} />
        </div>
        <div>
          <button>提交表单</button>
        </div>
      </form>
    )
  }

}

export default AddContact;