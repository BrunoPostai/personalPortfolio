"use client";
import Image from "next/image";
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
