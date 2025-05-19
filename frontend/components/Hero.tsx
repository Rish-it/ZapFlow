"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { GridPattern } from "@/components/ui/grid-pattern";
import { useRouter } from "next/navigation";

// Define app icons data for reusability
const APP_ICONS = [
  { name: "Slack", icon: "/images/icons/slack.png", angle: 0 },
  { name: "Google Sheets", icon: "/images/icons/google-sheets.png", angle: 45 },
  { name: "Salesforce", icon: "/images/icons/salesforce.png", angle: 90 },
  { name: "Notion", icon: "/images/icons/notion.png", angle: 135 },
  { name: "Canon", icon: "/images/icons/canon.png", angle: 180 },
  { name: "GitHub", icon: "/images/icons/github.png", angle: 225, isSvg: true },
  { name: "Google Drive", icon: "/images/icons/drive.png", angle: 270, isSvg: true },
  { name: "Walmart", icon: "/images/icons/walmart.png", angle: 315 }
];

export const Hero = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  // Animate integration icons after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-6 sm:pt-8 pb-12 sm:pb-16 md:pt-12 md:pb-24 bg-black overflow-hidden">
      <GridPattern />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Hero Content */}
          <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 opacity-0 animate-slide-up animate-delay-100">
              Integrate your stack <span className="gradient-text">→</span> automate your work
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-xl opacity-0 animate-slide-up animate-delay-200">
              Evolve at the speed and scale of your business with the leader in no-code automation.
              Pairing AI and ZapFlow helps you turn ideas into workflows.
            </p>
            <div className="flex justify-center sm:justify-start opacity-0 animate-slide-up animate-delay-300">
              <Button 
                variant="gradient" 
                size="lg" 
                className="w-auto button-gradient-hover glow-effect"
                onClick={() => router.push("/signup")}
              >
                Explore
              </Button>
            </div>

            {/* Trusted by logos - only visible on small screens and above */}
            <div className="mt-10 sm:mt-12 opacity-0 animate-fade-in animate-delay-500">
              <p className="text-sm text-white/60 mb-4">Working with the best</p>
              <div className="flex flex-wrap gap-6 sm:gap-8 items-center justify-center lg:justify-start opacity-70">
                <div className="h-6 sm:h-8 w-16 sm:w-20 relative grayscale hover:grayscale-0 transition-all duration-300 hover-lift">
                  <Image
                    src="/images/icons/spotify.png"
                    alt="Spotify"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="h-6 sm:h-8 w-16 sm:w-20 relative grayscale hover:grayscale-0 transition-all duration-300 hover-lift">
                  <Image
                    src="/images/icons/walmart.png"
                    alt="Walmart"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="h-6 sm:h-8 w-16 sm:w-20 relative grayscale hover:grayscale-0 transition-all duration-300 hover-lift">
                  <Image
                    src="/images/icons/canon.png"
                    alt="Canon"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visualization - hidden on mobile, visible on sm and up */}
          <div className="relative h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] hidden sm:block opacity-0 animate-fade-in animate-delay-400 mx-auto">
            <div className="w-full h-full flex items-center justify-center animate-float">
              {/* Integration Flow Diagram with ZapFlow in the center */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* App icons arranged in a circle */}
                <div className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] rounded-full border-2 border-white/10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center before:content-[''] before:absolute before:w-[310px] before:h-[310px] sm:before:w-[350px] sm:before:h-[350px] md:before:w-[390px] md:before:h-[390px] lg:before:w-[430px] lg:before:h-[430px] before:rounded-full before:border before:border-violet-500/20 before:animate-pulse">
                  {/* Rotating outer rings */}
                  <div className="absolute w-[330px] h-[330px] sm:w-[370px] sm:h-[370px] md:w-[410px] md:h-[410px] lg:w-[450px] lg:h-[450px] rounded-full border border-violet-500/10 animate-slow-spin"></div>
                  <div className="absolute w-[350px] h-[350px] sm:w-[390px] sm:h-[390px] md:w-[430px] md:h-[430px] lg:w-[470px] lg:h-[470px] rounded-full border border-blue-500/10 animate-slow-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
                  
                  {/* Central ZapFlow logo */}
                  <div 
                    className="relative z-30 bg-gradient-to-r from-blue-500 to-violet-600 p-4 sm:p-5 md:p-6 lg:p-7 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.4)] glow-effect border-2 border-white/10 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
                    onClick={() => setIsActive(!isActive)}
                  >
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center text-white relative">
                      ZapFlow
                      <span className={`absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full ${isActive ? 'bg-green-500' : 'bg-gray-500'} transition-colors duration-300`}></span>
                    </div>
                  </div>

                  {/* Connection lines as rays from center with mini icons */}
                  {isActive && (
                    <>
                                                {/* Lines to each app */}
                          <div className="absolute w-full h-full top-0 left-0 z-5">
                            {/* 45 degrees spacing for 8 items = 360/8 */}
                        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
                                                        <div key={index} className="absolute top-1/2 left-1/2 flex items-center" 
                                style={{
                                  transform: `rotate(${angle}deg)`,
                                  transformOrigin: '0 50%',
                                  zIndex: 5
                                }}
                              >
                                                          <div 
                                className="w-[110px] sm:w-[130px] md:w-[150px] lg:w-[170px] h-[2px] bg-gradient-to-r from-violet-500/90 to-transparent animate-pulse"
                                style={{ animationDelay: `${index * 0.1}s`, zIndex: 5 }}
                              />
                            
                            {/* Mini icon on the line */}
                            <div 
                              className={`absolute left-1/2 transform bg-black/70 rounded-full p-1.5 sm:p-1.5 md:p-2 lg:p-2 border border-violet-500/50 shadow-[0_0_10px_rgba(124,58,237,0.5)] 
                              translate-x-[75px] sm:translate-x-[85px] md:translate-x-[95px] lg:translate-x-[110px] -translate-y-1/2 z-20`}
                              style={{ 
                                transform: `rotate(-${angle}deg)`,
                                animationDelay: `${index * 0.1 + 0.2}s`
                              }}
                            >
                              <div className="relative w-6 sm:w-6 md:w-7 lg:w-8 h-6 sm:h-6 md:h-7 lg:h-8">
                                {APP_ICONS[index].isSvg ? (
                                  index === 5 ? (
                                    // GitHub icon
                                    <div className="w-6 sm:w-6 md:w-7 lg:w-8 h-6 sm:h-6 md:h-7 lg:h-8 bg-white rounded-full flex items-center justify-center">
                                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 sm:w-4 md:w-5 lg:w-6 h-4 sm:h-4 md:h-5 lg:h-6 text-black">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                      </svg>
                                    </div>
                                  ) : (
                                    // Google Drive icon
                                    <div className="w-6 sm:w-6 md:w-7 lg:w-8 h-6 sm:h-6 md:h-7 lg:h-8 bg-white rounded-full flex items-center justify-center">
                                      <svg viewBox="0 0 87.3 78" className="w-4 sm:w-4 md:w-5 lg:w-6 h-4 sm:h-4 md:h-5 lg:h-6">
                                        <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
                                        <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/>
                                        <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
                                        <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
                                        <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
                                        <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
                                      </svg>
                                    </div>
                                  )
                                ) : (
                                  <Image
                                    src={APP_ICONS[index].icon}
                                    alt={APP_ICONS[index].name}
                                    fill
                                    style={{ objectFit: "contain" }}
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* App icons positioned in a perfect circle around ZapFlow */}
                {isActive && (
                  <>
                    {APP_ICONS.map((app, index) => (
                      <div 
                        key={app.name}
                        className="absolute transition-opacity duration-500 animate-float opacity-0 animate-fade-in z-20"
                        style={{ 
                          top: `${app.angle === 0 ? "0" : 
                                app.angle === 45 ? "12%" : 
                                app.angle === 90 ? "50%" :
                                app.angle === 135 ? "88%" :
                                app.angle === 180 ? "100%" :
                                app.angle === 225 ? "88%" :
                                app.angle === 270 ? "50%" : "12%"}`,
                          bottom: `${app.angle === 180 ? "0" : "auto"}`,
                          left: `${app.angle === 0 ? "50%" :
                                 app.angle === 225 ? "12%" :
                                 app.angle === 270 ? "0" :
                                 app.angle === 315 ? "12%" : "auto"}`,
                          right: `${app.angle === 90 ? "0" :
                                  app.angle === 45 ? "12%" :
                                  app.angle === 135 ? "12%" : "auto"}`,
                          transform: `${app.angle === 0 ? "translateX(-50%) translateY(-50%)" :
                                     app.angle === 45 ? "translateX(50%) translateY(-50%)" :
                                     app.angle === 90 ? "translateX(50%) translateY(-50%)" :
                                     app.angle === 135 ? "translateX(50%) translateY(50%)" :
                                     app.angle === 180 ? "translateX(-50%) translateY(50%)" :
                                     app.angle === 225 ? "translateX(-50%) translateY(50%)" :
                                     app.angle === 270 ? "translateX(-50%) translateY(-50%)" :
                                     "translateX(-50%) translateY(-50%)"}`,
                          animationDelay: `${0.1 * index}s`
                        }}
                      >
                        <div className="integration-icon">
                          <div className={`relative w-12 sm:w-14 md:w-16 lg:w-16 h-12 sm:h-14 md:h-16 lg:h-16 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] ${(app.isSvg && app.angle === 270) ? "flex items-center justify-center bg-white p-1" : ""} ${(app.isSvg && app.angle === 225) ? "bg-white p-2" : ""}`}>
                            {app.isSvg ? (
                              app.angle === 225 ? (
                                <svg viewBox="0 0 24 24" fill="currentColor" className="text-black">
                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                              ) : (
                                <svg viewBox="0 0 87.3 78" fill="currentColor">
                                  <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
                                  <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/>
                                  <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
                                  <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
                                  <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
                                  <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
                                </svg>
                              )
                            ) : (
                              <Image
                                src={app.icon}
                                alt={app.name}
                                fill
                                style={{ objectFit: "contain" }}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient glow effects */}
      <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-purple-600/20 rounded-full filter blur-[120px] opacity-50 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-1/3 h-1/3 bg-blue-600/20 rounded-full filter blur-[120px] opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};
