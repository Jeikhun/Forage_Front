import React, { useContext } from "react";
import GithubContext from "../context/GithubContext";
import Part from "./Part";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// import OwlCarousel from "../../node_modules/react-owl-carousel";
//import ReactOwlCarousel from "react-owl-carousel";
const Partner = () => {
  const homeContext = useContext(GithubContext);
  const { partners } = homeContext;
  if (partners.items != undefined) {
    return (
      <ReactOwlCarousel id="owl-demo" className="owl-carousel owl-theme">
        {partners.items.map((partner) => (
          <Part key={partner.id} partner={partner} />
        ))}
      </ReactOwlCarousel>
    );
  }
};
export default Partner;
