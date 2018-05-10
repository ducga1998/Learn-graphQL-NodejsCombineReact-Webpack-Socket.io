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
