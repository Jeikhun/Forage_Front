import React, { useContext } from "react";
import GithubContext from "../context/GithubContext";

const Partner = () => {
  const homeContext = useContext(GithubContext);
  const { partners } = homeContext;
  console.log(partners);
  if (partners.items !== undefined) {
    return (
      <div id="owl-demo" className="owl-carousel owl-theme">
        {partners.items.map((partner) => {
          " ";
          <div className="item">
            <img src={partner.logoUrl} alt="Owl Image" />
          </div>;
        })}
      </div>
    );
  }
};
export default Partner;
