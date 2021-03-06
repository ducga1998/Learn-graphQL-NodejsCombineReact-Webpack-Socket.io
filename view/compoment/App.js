import React, { Component } from 'react';
import './app.css';
import subscribeToTimer from "./Socket";
import Form from "./FormChangeDataBase";
//import compoment redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../../reducer";
import { toggleTodo } from "../../action/index";
const store = createStore(rootReducer);
console.log(store.dispatch(toggleTodo(2)));
console.log(store.getState());


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { timestamp: "no timestamp yet", toggle:true,array:[] };
    subscribeToTimer((err, timestamp) => this.setState({ timestamp }));
    this.SendMess=this.SendMess.bind(this);
  }
  
  componentDidMount() {
   setInterval(() => {
     fetch("/api/all")
       .then(result => {
         return result.json();
       })
       .then(data => {
       

         this.setState({ array: data });
       });
   }, 200);
  }

    
  SendMess(){
console.log("send Main");
this.setState({ toggle: !this.state.toggle });
  }
  render() {
          var arrayTest = this.state.array;
          
        const JSX=  arrayTest.map((element)=>{
          
        return <div>
            <li>
              <h1 key={element._id}>{element._id}</h1>
            </li>
            <li>
              <h1 key={element._id}>{element.duc}</h1>
            </li>
          </div>;
          })
         
    return <Provider store={store}>
        <div className="App">
          <div>
            <p className="App-intro">
              This is the timer value: {this.state.timestamp}
            </p>
          </div>
          <Form />
          <ul>{JSX}</ul>

          <form action="">
            <input id="m" autocomplete="off" />
          </form>
          <button className="btnToggle" onClick={this.SendMess}>
            {this.state.toggle ? "Bật" : "Tắt"}
          </button>
        </div>
      </Provider>;
  }
}

export default App;