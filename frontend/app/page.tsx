// import { Appbar } from "@/components/Appbar";
// import { Hero } from "@/components/Hero";
// import { HeroVideo } from "@/components/HeroVideo";

// export default function Home() {
//   return (
//     <main className="pb-0">
//         <Appbar />
//         <Hero />
//         <div className="pt-0">
//           <HeroVideo />
//         </div>
//     </main>
//   );
// }


import { Appbar } from "@/components/Appbar";
import { Hero } from "@/components/Hero";
import { HeroVideo } from "@/components/HeroVideo";

export default function Home() {
  return (
    <div className="pb-0">
      <Appbar />
      <Hero />
      <HeroVideo />
    </div>
  );
}
