"use client";

import { GridPattern } from "@/components/ui/grid-pattern";

export const Features = () => {
  return (
    <section className="relative py-12 md:py-16 bg-black">
      <GridPattern />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex justify-center pb-12 md:pb-16">
          <div className="flex flex-wrap gap-12 md:gap-20 items-center justify-center">
            <div className="flex items-center opacity-0 animate-fade-in animate-delay-600">
              <div className="mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L9 17L19 7" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="gradient-text font-bold">Free Forever</span>
                <span className="text-white/70 ml-1">for core features</span>
              </div>
            </div>
            <div className="flex items-center opacity-0 animate-fade-in animate-delay-700">
              <div className="mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L9 17L19 7" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="gradient-text font-bold">More apps</span>
                <span className="text-white/70 ml-1">than any other platform</span>
              </div>
            </div>
            <div className="flex items-center opacity-0 animate-fade-in animate-delay-800">
              <div className="mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L9 17L19 7" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="gradient-text font-bold">Cutting Edge</span>
                <span className="text-white/70 ml-1">AI Features</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 