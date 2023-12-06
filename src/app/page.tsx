"use client";
import Image from "next/image";
import  Header  from "../components/header/";
import  About  from "../components/aboutMe/";
import  Projects  from "../components/myProjects/";
import  Contact  from "../components/contacts/";
import manifest from "../../public/manifest.json";
export default function Home() {
  return (
    <div>
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}
