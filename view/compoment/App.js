import React, { Component } from 'react';
import './app.css';
import subscribeToTimer from "./Socket";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { timestamp: "no timestamp yet" };
    subscribeToTimer((err, timestamp) => this.setState({ timestamp }));
  }
  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();

  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };

  render() {
    return <div className="App">
        <div>
          <p className="App-intro">
            This is the timer value: {this.state.timestamp}
          </p>
        </div>
        <ul id="messages" />
        <form action="">
          <input id="m" autocomplete="off" />
          <button>Send</button>
        </form>
      </div>;
  }
}

export default App;