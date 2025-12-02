
import React, { useRef, useState, useEffect } from 'react';

const ReactIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_105_2)"><path d="M114.75 64C114.75 80.52 105.74 95.34 91.13 103.11C76.52 110.88 58.98 110.88 44.37 103.11C29.76 95.34 20.75 80.52 20.75 64C20.75 47.48 29.76 32.66 44.37 24.89C58.98 17.12 76.52 17.12 91.13 24.89C105.74 32.66 114.75 47.48 114.75 64Z" stroke="currentColor" strokeWidth="8"></path><path d="M64 128C99.35 128 128 99.35 128 64C128 28.65 99.35 0 64 0C28.65 0 0 28.65 0 64C0 99.35 28.65 128 64 128ZM64 114.5C92.03 114.5 114.5 92.03 114.5 64C114.5 35.97 92.03 13.5 64 13.5C35.97 13.5 13.5 35.97 13.5 64C13.5 92.03 35.97 114.5 64 114.5Z" fill="currentColor"></path><ellipse cx="64" cy="64" rx="22.5" ry="8.5" fill="currentColor"></ellipse></g><defs><clipPath id="clip0_105_2"><rect width="128" height="128" fill="white"></rect></clipPath></defs></svg>
);
const TSIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path d="M1.33 1.33H126.67V126.67H1.33V1.33Z" fill="#3178C6"></path><path d="M88.68 59.4H63.63V85.74H52.56V59.4H27.51V49.11H88.68V59.4Z" fill="#FFF"></path><path d="M89.28 96.17C94.22 93.3 97.43 88.68 97.43 83.1C97.43 73.18 89.21 65.37 79.13 65.37H63.6V97.35H76.71C84.2 97.35 88.5 96.9 89.28 96.17ZM77.34 88.08H73.04V74.67H77.34C82.13 74.67 86.44 77.88 86.44 82.57C86.44 87.26 82.13 88.08 77.34 88.08Z" fill="#FFF"></path></svg>
);
const NodeIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M20.25 5.17c-.32-.16-.7-.11-1.02.1l-6.05 4.31v-3.04c0-.37-.22-.71-.56-.86l-7-3.11A.993.993 0 0 0 5 3.39v16.22c0 .41.26.79.66.94.1.04.2.06.3.06.31 0 .6-.16.79-.44l6.19-9.15v2.81c0 .38.23.72.58.87l7 3.11c.1.04.2.06.3.06.32 0 .61-.15.8-.43.32-.47.19-1.09-.28-1.42zM12.98 12l-5.96 4.25V7.72l5.96-4.25v8.53z"/></svg>
);
const FigmaIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fillRule="evenodd" d="M12 18a6 6 0 100-12 6 6 0 000 12zm0-3a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/><path d="M12 3a3 3 0 00-3 3v3h3a3 3 0 000-6z"/><path fillRule="evenodd" d="M9 12a3 3 0 11-6 0 3 3 0 016 0zm-3 3a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/><path d="M15 9a3 3 0 106 0 3 3 0 00-6 0z"/><path d="M15 15a3 3 0 116 0 3 3 0 01-6 0z"/></svg>
);

// Fix: Correctly type component props using an interface and React.FC to handle React-specific props like `key` during mapping.
interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name }) => (
  <div className="flex flex-col items-center justify-center p-6 bg-secondary rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10">
    <div className="text-accent w-16 h-16 mb-4 flex items-center justify-center">{icon}</div>
    <h4 className="font-semibold text-text-primary">{name}</h4>
  </div>
);

const Skills: React.FC = () => {
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

    const skillsList = [
        { icon: <ReactIcon className="w-12 h-12" />, name: 'React' },
        { icon: <TSIcon className="w-12 h-12" />, name: 'TypeScript' },
        { icon: <NodeIcon className="w-12 h-12" />, name: 'Node.js' },
        { icon: <FigmaIcon className="w-12 h-12 text-[#A259FF]" />, name: 'Figma' },
    ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 md:py-32 bg-primary overflow-hidden">
      <div className={`container mx-auto px-6 fade-in-up ${isVisible ? 'is-visible' : ''}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary">
          Teknologi yang Saya Gunakan
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl mx-auto">
          {skillsList.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;