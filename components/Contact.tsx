import React, { useRef, useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon, TiktokIcon, YoutubeIcon, PhoneIcon } from './SocialIcons';

const Contact: React.FC = () => {
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
    <section ref={sectionRef} id="contact" className="py-20 md:py-32 bg-primary overflow-hidden">
      <div className={`container mx-auto px-6 text-center fade-in-up ${isVisible ? 'is-visible' : ''}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">
          Get In Touch
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
          I'm currently available for freelance work and open to discussing new projects.
          Whether you have a question or just want to say hi, feel free to reach out.
        </p>
        <a
          href="mailto:hello@asngad.my.id"
          className="inline-block bg-accent text-primary font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20 mb-8"
        >
          Say Hello
        </a>

        <div className="flex items-center justify-center gap-3 my-6 text-text-secondary">
          <PhoneIcon className="w-6 h-6 text-accent" />
          <a href="tel:+6289670924182" className="text-lg hover:text-accent transition-colors duration-300">
            0896-7092-4182
          </a>
        </div>
        
        <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-4">
          <a href="#" className="text-text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110">
            <TwitterIcon className="w-8 h-8" />
          </a>
          <a href="#" className="text-text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110">
            <GithubIcon className="w-8 h-8" />
          </a>
          <a href="#" className="text-text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110">
            <LinkedinIcon className="w-8 h-8" />
          </a>
          <a href="#" className="text-text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110">
            <InstagramIcon className="w-8 h-8" />
          </a>
          <a href="#" className="text-text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110">
            <TiktokIcon className="w-8 h-8" />
          </a>
          <a href="#" className="text-text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110">
            <YoutubeIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;