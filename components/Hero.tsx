
import React from 'react';

const ScrollDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
  </svg>
);


const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 w-full h-full animated-gradient"></div>
      <div className="z-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-text-primary mb-4 leading-tight">
          Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-400">Asngad</span>.
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-text-secondary mb-8">
          A Creative Developer & UI/UX Designer
        </h2>
        <p className="text-lg text-text-secondary max-w-xl mx-auto mb-10">
          I build beautiful, responsive, and user-friendly web applications that solve real-world problems.
        </p>
        <a
          href="#portfolio"
          className="bg-accent text-primary font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20"
        >
          View My Work
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
         <a href="#about" aria-label="Scroll to next section">
            <ScrollDownIcon className="w-8 h-8 text-text-secondary animate-bounce-slow" />
        </a>
      </div>
    </section>
  );
};

export default Hero;