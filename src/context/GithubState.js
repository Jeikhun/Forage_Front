import React, { useReducer, useEffect } from "react";
import GithubReducer from "./GithubReducer";
import GithubContext from "./GithubContext";
import axios from "axios";
const GithubState = (props) => {
  const initialState = {
    fags: [],
    partners: [],
  };
  useEffect(() => {
    axios.get("https://localhost:7297/api/Question").then((res) => {
      dispatch({ type: "Get_Fags", payload: res.data });
      axios.get("https://localhost:7297/api/Partner").then((res) => {
        dispatch({ type: "Get_Partners", payload: res.data });
      });
    });
  }, [props]);
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        fags: state.fags,
        partners: state.partners,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
