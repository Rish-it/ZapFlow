"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/ui/grid-pattern";

export const Appbar = () => {
  const router = useRouter();
  return (
    <div className="relative flex justify-between items-center p-4 bg-black border-b border-white/10">
      <GridPattern />
      
      {/* ZapFlow Title */}
      <div 
        className="relative z-10 flex flex-col justify-center text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-600 cursor-pointer hover:scale-105 transition-transform"
        onClick={() => router.push("/")}
      >
        ZapFlow
      </div>

      {/* Buttons */}
      <div className="relative z-10 flex space-x-4">
        <Button 
          variant="ghost" 
          onClick={() => {
            router.push("/login");
          }}
          className="text-white/70 hover:text-white"
        >
          Login
        </Button>
        <Button 
          variant="gradient" 
          onClick={() => {
            router.push("/signup");
          }}
          className="button-gradient-hover"
        >
          Signup
        </Button>
      </div>
    </div>
  );
};
