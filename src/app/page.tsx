"use client";
import Image from "next/image";
<<<<<<< HEAD
import  Header  from "../components/header/";
import  About  from "../components/aboutMe/";
import  Projects  from "../components/myProjects/";
import  Contact  from "../components/contacts/";
import manifest from "../../public/manifest.json";
=======
import Header from "../components/header/";
import About from "../components/aboutMe/";
import Projects from "../components/myProjects/";
import Contact from "../components/contacts/";
import manifest from "../../public/manifest.json";

if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('./pwabuilder-sw.js')
    .then((registration) => {
      console.log('Service Worker registrado com sucesso:', registration);
    })
    .catch((error) => {
      console.error('Erro ao registrar Service Worker:', error);
    });
}

>>>>>>> a44e6253dde070beacbf8f7055a09b381acdd4eb
export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
