import React, { useContext } from "react";
import GithubContext from "../context/GithubContext";
import Part from "./Part";
// import OwlCarousel from "../../node_modules/react-owl-carousel";
//import ReactOwlCarousel from "react-owl-carousel";
const Partner = () => {
  const homeContext = useContext(GithubContext);
  const { partners } = homeContext;
  if (partners.items != undefined) {
    return (
      <div id="owl-demo" className="owl-carousel owl-theme">
        {partners.items.map((partner) => (
          <Part key={partner.id} partner={partner} />
        ))}
      </div>
    );
  }
};
export default Partner;
