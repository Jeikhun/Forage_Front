const GithubReducer = (state, action) => {
  switch (action.type) {
    case "Get_Fags":
      return {
        ...state,
        fags: action.payload,
      };
    case "Get_Partners":
      return {
        ...state,
        partners: action.payload,
      };
    default:
      return state;
  }
};
export default GithubReducer;
