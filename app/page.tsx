import About from "@/Components/About";
import Hero from "@/Components/Hero";
import Reservation from "@/Components/Reservation";
import Services from "@/Components/Services";


export default function Home() {
  return (
   <div>
    <Hero />
    <About />
    <Services />
    <Reservation />
   </div>
  );
}
