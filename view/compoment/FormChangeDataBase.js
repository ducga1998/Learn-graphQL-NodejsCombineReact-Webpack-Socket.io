import React from 'react';
import PropTypes from 'prop-types';

class FormChangeDataBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      Address: ""
    };
   
  
  }
  handOnChange(event) {
    this.setState({ name: event.target.value });
   
  }
  handOnChangeDuc(event){
    this.setState({Address:event.target.value})
    
  }
  handSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
   
    fetch("/api/createSendJson", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        name: this.state.name,
        duc: this.state.Address
      })
    }).then(response => {
      console.log(response);
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handSubmit.bind(this)}>
          <input type="text" name="name" onChange={this.handOnChange.bind(this)} />
          <input
            type="text"
            name="duc"
            onChange={this.handOnChangeDuc.bind(this)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}



export default FormChangeDataBase;
