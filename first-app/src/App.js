import { Component } from "react";
import Contact from './Contact';
import AddContact from './AddContact';

class App extends Component {
  state = {
    contactForm: [
      { name: 'zmg', age: 32, sex: 'male1', id: 1},
      { name: 'polo', age: 36, sex: 'female2', id: 2},
      { name: 'dlt', age: 28, sex: 'male3', id: 3},
      { name: 'had', age: 33, sex: 'male4', id: 4}
    ]
  };
  handleData = (contact) => {
    contact.id = Math.random();
    let newArr = [...this.state.contactForm, contact]
    this.setState({
      contactForm: newArr
    })
  }
  deleteContact = (id) => {
    let oldArr = this.state.contactForm.filter(contact => contact.id !== id);
    this.setState({
      contactForm: oldArr
    })
  }
  componentDidMount() {
    console.log('挂载完成');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("更新完了");
    console.log(prevProps);
    console.log(prevState);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>first App 程序</h1>
          <Contact infoList={this.state.contactForm} deleteContact={this.deleteContact} />
          <AddContact handleData={this.handleData} />
        </header>
      </div>
    );
  }
}

export default App;
