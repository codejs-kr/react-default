import React from 'react';
require('../css/style.css');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  render() {
    return (
      <div>
        <button onClick={() => { this.setState({name: 'New Start'}); }}>버튼</button>
        <h1>hello default!!! {this.state.name}</h1>
      </div>
    );
  }
}

export default App;
