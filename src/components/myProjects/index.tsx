"use client";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./styles.projects.css";
import React, { useState } from "react";
import { BestBugsMock } from "./projectList.mock";
import  CardListSection  from "./projectSection/";


function Projects() {
  const projects = BestBugsMock();

  const [selected, setSelected] = useState(String);
  console.log(selected);

  const filteredMock = () =>{
    if(selected){
      return projects.filter((item) => item.filter.includes(selected));
    } else {
      return projects
    }
  }
  return (
    <div className="projectWrapper">
      <div className="upperWrap">
        <h2 id="projectTitle">MEUS PROJETOS</h2>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={() =>  setSelected("tudo")}>TUDO</Button>
          <Button onClick={() =>  setSelected("Github")}>GITHUB</Button>
          <Button onClick={() =>  setSelected("Figma")}>FIGMA</Button>
        </ButtonGroup>
      </div>
      <div className="bottomWrap">
      {filteredMock().map((item, index) => (
          <CardListSection
            key={index}
            title={item.title}
            image={item.image}
            technologies={item.technologies}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
