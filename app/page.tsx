import About from "@/components/About";
import Hero from "@/components/Hero";
import Package from "@/components/Package";
import Service from "@/components/Service";
import Testimoni from "@/components/Testimoni";
import Howto from "@/components/Howto";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Package />
      <Testimoni />
      <Howto />
      <Faq />
    </>
  );
}
