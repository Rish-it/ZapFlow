import React from "react";

export const HeroVideo = () => {
  return (
    <div className="relative flex items-center justify-center h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
   
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    
      <div className="relative z-10 flex justify-center">
        <div className="rounded overflow-hidden border-4 border-gray-300 w-[30rem] h-[30rem]">
          <video 
            src="https://res.cloudinary.com/zapier-media/video/upload/f_auto,q_auto/v1706042175/Homepage%20ZAP%20Jan%2024/012324_Homepage_Hero1_1920x1080_pwkvu4.mp4"
            className="w-full h-full object-cover"
            controls={false}
            muted
            autoPlay
          />
        </div>
      </div>
    </div>
  );
};
