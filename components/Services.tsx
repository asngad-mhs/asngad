
import React, { useRef, useState, useEffect } from 'react';

const CodeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const PaletteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h8a2 2 0 002-2v-4a2 2 0 00-2-2h-8a2 2 0 00-2 2v4a2 2 0 002 2z" />
    </svg>
);

const MobileIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
);

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-secondary p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-accent hover:shadow-2xl hover:shadow-accent/20">
    <div className="text-accent mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
    <p className="text-text-secondary">{description}</p>
  </div>
);

const Services: React.FC = () => {
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

  const services = [
    {
      icon: <CodeIcon className="w-10 h-10" />,
      title: 'Pengembangan Web',
      description: 'Menciptakan aplikasi web berkinerja tinggi, dapat diskalakan, dan aman menggunakan kerangka kerja modern seperti React, Next.js, dan Vue.',
    },
    {
      icon: <PaletteIcon className="w-10 h-10" />,
      title: 'Desain UI/UX',
      description: 'Merancang antarmuka yang berpusat pada pengguna yang tidak hanya indah tetapi juga intuitif dan mudah digunakan, dengan fokus pada perjalanan pengguna yang optimal.',
    },
    {
      icon: <MobileIcon className="w-10 h-10" />,
      title: 'Desain Responsif',
      description: 'Memastikan aplikasi web Anda terlihat dan berfungsi sempurna di semua perangkat, dari layar ponsel kecil hingga monitor desktop besar.',
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 md:py-32 bg-primary overflow-hidden">
      <div className={`container mx-auto px-6 fade-in-up ${isVisible ? 'is-visible' : ''}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary">
          Layanan Saya
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;