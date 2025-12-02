
import React, { useRef, useState, useEffect } from 'react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 md:py-32 bg-secondary overflow-hidden">
      <div className={`container mx-auto px-6 fade-in-up ${isVisible ? 'is-visible' : ''}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                <div className="absolute inset-0 bg-accent rounded-full transform rotate-6 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105"></div>
                <img
                  src="https://picsum.photos/400/400?grayscale"
                  alt="Asngad"
                  className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-secondary transition-transform duration-500 group-hover:scale-95"
                />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-accent mb-4">Crafting Digital Experiences</h3>
            <p className="text-text-secondary text-lg mb-4">
              I'm a passionate developer with a keen eye for design. With a strong foundation in front-end technologies like React and TypeScript, I specialize in creating intuitive and dynamic user interfaces. My goal is to merge functionality with aesthetics to deliver seamless digital products.
            </p>
            <p className="text-text-secondary text-lg">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and capturing moments through photography. Let's connect and build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;