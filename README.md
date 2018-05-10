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
  
  Redux in project 
  create foler action contain all action. code action
  
    export const addTodo = text => ({
      type: "ADD_TODO",

      text
    });

    export const setVisibilityFilter = filter => console.log("Ok Tao dispatch Thành Công");

    export const toggleTodo = id => ({
      type: "TOGGLE_TODO",
      id
    });
    
    
  end code reducer
          const todos = (state = ["1",2,34,5,3], action) => {
      switch (action.type) {
    case "ADD_TODO":
      return [
      "Nguyễn minh ĐỨc","đuccadsc"
      ];
    case "TOGGLE_TODO":
      return ["csacsac","csacsacsa"]
      
    default:
      return state;
      }
    };

    export default todos;


thêm connect và tạo store cho reducer, cho một <Provider store={store}>

</Provider>
   Sử dụng this.props.todo.  => get state của reducer đó . cái return chố switch
 
     const mapStateToProps = (state, ownProps) => {
      return { todo: state.todos };
    }
    const mapDispatchToProps = (dispatch, ownProps) => {
      return { onClickA: () => dispatch(toggleTodo("csacsacsaca")), onClickB: () => dispatch(addTodo("Nguyễn Minh ĐỨc")) };
    }
     export default connect(mapStateToProps, mapDispatchToProps)(FormChangeDataBase);
 Cách sử dụng là this.props.todp.
 



