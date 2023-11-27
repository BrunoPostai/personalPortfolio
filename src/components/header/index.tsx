"use client";
import { Button } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";
import "./styles.header.css";

const Header: React.FC = () => {
  return (
    <div className="wrapper">
      <header>
        <a href="#" className="logo">BP</a>
        <nav>
          <ul>
            <li><a href="#">PROJECTS</a></li>
            <li><a href="#">ABOUT ME</a></li>
            <li id="contato"><button><a href="#">CONTACT</a></button></li>
          </ul>
        </nav>
      </header>
      <section>
        <p>I AM<br/><span id="name">BRUNO POSTAI</span><br/> FRONT-END DEVELOPER</p>
      </section>
    </div>
  );
};

export default Header;
