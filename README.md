# Learn-graphQL-NodejsCombineReact-Webpack-Socket.io

Learn-graphQL-NodejsCombineReact-Webpack-Socket.io
Project use for learn Javascript.Practive Javasript both client(react) and server(nodejs)
Thanks You for care !!!!
Please. If You Start Project . Let follow 

B1: npm install
B2: yarn dev


above code . it use for send request to server.
note: server must use body-parse can be used

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
