import React, { Component } from 'react';

class AddTodos extends Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.content) {
      this.props.addTodo(this.state)
    }
    this.setState({content: ''})
  }
  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s8">
              <input placeholder="任务" onChange={this.handleChange} value={this.state.content} type="text" className="validate" />
            </div>
            <div className="input-field col s4">
               <span onClick={this.handleSubmit} className="waves-effect waves-light btn">新增</span>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default AddTodos;