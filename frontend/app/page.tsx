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
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Appbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
