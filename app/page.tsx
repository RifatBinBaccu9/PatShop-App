import About from "@/Components/About";
import Articles from "@/Components/Articles";
import Breeds from "@/Components/Breeds";
import Customer from "@/Components/Customer";
import HealthServices from "@/Components/HealthServices";
import Hero from "@/Components/Hero";
import Looking from "@/Components/Looking";
import Reservation from "@/Components/Reservation";
import Selling from "@/Components/Selling";
import Services from "@/Components/Services";
import ShopPeat from "@/Components/ShopPeat";
import Team from "@/Components/Team";
import Transform from "@/Components/Transform";


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
     <ShopPeat />
     <HealthServices />
     <Team />
     <Customer />
     <Transform />
     {/*
    <Articles />  
    */}
   </div>
  );
}
