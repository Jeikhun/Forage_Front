import React, { useContext } from "react";
import Fag from "./Fag";
import GithubContext from "../context/GithubContext";

const Fags = () => {
  const githubContext = useContext(GithubContext);
  const { fags } = githubContext;
  return fags.map((fag) => <Fag key={fag.id} fag={fag} />);
};

export default Fags;
