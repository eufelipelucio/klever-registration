import React from "react";
import "./Title.css"    ;
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Title() {
  return (
    <div className="title-container">
      <Link to="/">
        <img className="Logo-klever" src={Logo} alt="Klever Logo"/>
      </Link>
    </div>
  );
}