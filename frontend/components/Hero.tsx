"use client";

import { useRouter } from "next/navigation";
import { Feature } from "./Feature";
import { PrimaryButton } from "./buttons/PrimaryButton";
import { SecondaryButton } from "./buttons/SecondaryButton";

export const Hero = () => {
  const router = useRouter();
  return (
    <div className="relative flex flex-col items-center justify-center h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] pt-0">
      {/* Radial gradient for the background */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Hero Content */}
      <div className="relative z-10">
        <div className="flex justify-center">
          <div className="text-5xl font-bold text-center max-w-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Automate as fast as you can type
          </div>
        </div>
        <div className="flex justify-center pt-4">
          <div className="text-xl font-normal text-center max-w-2xl text-white">
            AI gives you automation superpowers, and ZapFlow puts them to work. Pairing AI and ZapFlow helps you turn ideas into workflows and bots that work for you.
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center pt-8">
          <div className="flex space-x-4">
            <PrimaryButton
              onClick={() => router.push("/signup")}
              size="big"
              className="transition transform hover:scale-105 duration-300"
            >
              Get Started Free
            </PrimaryButton>
            <SecondaryButton
              onClick={() => {}}
              size="big"
              className="transition transform hover:scale-105 duration-300"
            >
              Contact Sales
            </SecondaryButton>
          </div>
        </div>

        {/* Features */}
        <div className="flex justify-center pt-12 space-x-8">
          <Feature title="Free Forever" subtitle="for core features" />
          <Feature title="More apps" subtitle="than any other platform" />
          <Feature title="Cutting Edge" subtitle="AI Features" />
        </div>
      </div>
    </div>
  );
};
