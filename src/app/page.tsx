"use client";

import Hero from "./components/Hero";
import Marquee from "./components/Marquee.component";
import About from "./components/About";
import Result from "./components/Result";
import Sessions from "./components/Sessions";
import Agenda from "./components/Agenda";
import Invitee from "./components/Invitee.component";
import Venue from "./components/Venue";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />

      <Marquee />

      <About />

      <Result />

      <Sessions />

      <Agenda />

      <Invitee />

      <Venue />

      <Faq />

      <Footer />
    </>
  );
}
