"use client";
import Image from "next/image";
import  Header  from "../components/header/";
import  About  from "../components/aboutMe/";
import  Projects  from "../components/myProjects/";
export default function Home() {
  return (
    <div>
      <Header/>
      <About/>
      <Projects/>
    </div>
  );
}
