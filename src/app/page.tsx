"use client";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee.component";
import About from "./components/About";
import Sessions from "./components/Sessions";
import Invitee from "./components/Invitee.component";
import Agenda from "./components/Agenda";
import Venue from "./components/Venue";
import Faq from "./components/Faq";
import Result from "./components/Result";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Sessions />
      <Invitee />
      <Agenda />
      <Venue />
      <Faq />
      <Result />
      <Footer />
    </>
  );
}
