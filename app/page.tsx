import About from "@/Components/About";
import Hero from "@/Components/Hero";
import Reservation from "@/Components/Reservation";
import Selling from "@/Components/Selling";
import Services from "@/Components/Services";


export default function Home() {
  return (
   <div>
    <Hero />
    <About />
    <Services />
    <Reservation />
    <Selling />
   </div>
  );
}
