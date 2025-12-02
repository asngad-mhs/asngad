
import React, { useRef, useState, useEffect } from 'react';

// Icons for project links
const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const GithubLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
);


interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, description, tags, liveUrl, codeUrl }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg bg-secondary aspect-w-4 aspect-h-3">
    <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:blur-sm group-hover:brightness-50" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-all duration-300"></div>
    <div className="absolute inset-0 p-6 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-2xl font-bold text-accent transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{title}</h3>
        <p className="text-text-primary mt-2 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-300">
            {tags.map((tag) => (
            <span key={tag} className="bg-accent/20 text-accent text-xs font-semibold px-2 py-1 rounded-full">
                {tag}
            </span>
            ))}
        </div>
        <div className="flex items-center space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-[400ms]">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-text-secondary hover:text-accent transition-colors duration-300">
                <ExternalLinkIcon className="w-5 h-5" />
                <span>Live Demo</span>
            </a>
            <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-text-secondary hover:text-accent transition-colors duration-300">
                <GithubLinkIcon className="w-5 h-5" />
                <span>Source Code</span>
            </a>
        </div>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [activeFilter, setActiveFilter] = useState('All');

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
            }
        },
        { threshold: 0.1 }
        );

        if (sectionRef.current) {
        observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

  const projects = [
    {
      imageUrl: 'https://picsum.photos/seed/ecom/600/400',
      title: 'ProShop E-commerce',
      description: 'A full-featured MERN stack online store with payment integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
      category: 'Web App',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      imageUrl: 'https://picsum.photos/seed/dashboard/600/400',
      title: 'Admin Data Dashboard',
      description: 'An interactive dashboard for complex data visualization.',
      tags: ['React', 'D3.js', 'Firebase', 'Material UI'],
      category: 'Web App',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      imageUrl: 'https://picsum.photos/seed/booking/600/400',
      title: 'Wavebnb Booking UI',
      description: 'A sleek, modern UI clone for a popular booking application.',
      tags: ['React Native', 'UI/UX', 'Figma'],
      category: 'UI/UX Design',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      imageUrl: 'https://picsum.photos/seed/startup/600/400',
      title: 'Synth Landing Page',
      description: 'A professional landing page for a tech startup, focused on conversions.',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      category: 'Web App',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      imageUrl: 'https://picsum.photos/seed/cms/600/400',
      title: 'Headless Blog CMS',
      description: 'A custom headless CMS for a tech blog, built for performance.',
      tags: ['Vue.js', 'Strapi', 'GraphQL', 'MongoDB'],
      category: 'Web App',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      imageUrl: 'https://picsum.photos/seed/pms/600/400',
      title: 'KanbanFlow Manager',
      description: 'A collaborative tool to manage tasks with drag-and-drop functionality.',
      tags: ['React', 'Redux Toolkit', 'WebSockets'],
      category: 'Web App',
      liveUrl: '#',
      codeUrl: '#',
    },
  ];
  
  const filters = ['All', 'Web App', 'UI/UX Design'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section ref={sectionRef} id="portfolio" className="py-20 md:py-32 bg-secondary overflow-hidden">
      <div className={`container mx-auto px-6 fade-in-up ${isVisible ? 'is-visible' : ''}`}>
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                My Portfolio
            </h2>
            <p className="text-lg text-text-secondary mt-2">A selection of my recent work.</p>
        </div>

        <div className="flex justify-center items-center gap-2 md:gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-accent text-primary shadow-lg shadow-accent/20'
                  : 'bg-primary text-text-secondary hover:bg-accent/20 hover:text-accent'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
