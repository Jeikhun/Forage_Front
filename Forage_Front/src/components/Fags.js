import React, { useContext } from "react";
import Fag from "./Fag";
import GithubContext from "../context/GithubContext";

const Fags = () => {
  const githubContext = useContext(GithubContext);
  const { fags } = githubContext;
  if (fags.items !== undefined) {
    return fags.items.map((fag) => <Fag key={fag.id} fag={fag} />);
  }
};

export default Fags;
