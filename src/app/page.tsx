"use client";
import Image from "next/image";
import StickyOrb from "../components/header/orb/stickyOrb";
import Header from "../components/header/";
import About from "../components/aboutMe/";
import Projects from "../components/myProjects/";
import Contact from "../components/contacts/";

export default function Home() {
  return (
    <div>
      <Header/>
      <About />
      <Projects />
      <Contact />
      <StickyOrb/>
    </div>
  );
}
