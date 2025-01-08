import About from "@/Components/About";
import Breeds from "@/Components/Breeds";
import Hero from "@/Components/Hero";
import Looking from "@/Components/Looking";
import Reservation from "@/Components/Reservation";
import Selling from "@/Components/Selling";
import Services from "@/Components/Services";
import Team from "@/Components/Team";


export default function Home() {
  return (
   <div>
    <Hero />
    <About />
    <Services />
    <Reservation />
    <Selling />
    <Looking />
    <Breeds />
    <Team />
   </div>
  );
}
