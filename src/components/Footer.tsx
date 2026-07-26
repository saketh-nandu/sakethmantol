import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#FFFFFF] py-20 border-t border-[#ECECEC] text-center">
      <div className="max-w-7xl mx-auto px-6 space-y-4">
        <p className="font-serif-editorial italic text-lg sm:text-xl text-[#555555] font-light">
          "Every story begins with curiosity."
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#555555] pt-8 border-t border-[#ECECEC]/60 max-w-4xl mx-auto">
          <span>© Saketh Mantol. All rights reserved.</span>
          <span className="text-[#111111] mt-2 sm:mt-0 font-medium">Director • Developer</span>
          <span>Crafted with Swiss Editorial Intention</span>
        </div>
      </div>
    </footer>
  );
};
