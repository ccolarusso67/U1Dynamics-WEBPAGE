import Hero from "./components/sections/Hero";
import { Ticker, Manifesto, Capabilities, SpecSheet } from "./components/sections/Story";
import { Process, Facility, Industries, USA } from "./components/sections/ProcessFacility";
import Contact from "./components/sections/Contact";

export default function Page() {
  return (
    <>
      <Hero />
      <Ticker />
      <Manifesto />
      <Capabilities />
      <SpecSheet />
      <Process />
      <Facility />
      <Industries />
      <USA />
      <Contact />
    </>
  );
}
