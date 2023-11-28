"use client";
import Image from "next/image";
import  Header  from "../components/header/";
import  About  from "../components/aboutMe/";
export default function Home() {
  return (
    <div>
      <Header/>
      <About/>
    </div>
  );
}
