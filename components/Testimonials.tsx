
import React, { useRef, useState, useEffect } from 'react';

const QuoteIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-2.908.769-5.918 2.224-6.953 1.181-.84 2.588-.42 2.588.84v2.509c0 1.26-.84 2.1-2.1 2.1h-.42c-.42 0-.84.42-.84.84v3.346c0 .42.42.84.84.84h2.923c.42 0 .84.315.84.735v2.923c0 .42-.42.84-.84.84H14.857c-.42 0-.84-.42-.84-.84zm-12 0v-7.391c0-2.908.769-5.918 2.224-6.953 1.181-.84 2.588-.42 2.588.84v2.509c0 1.26-.84 2.1-2.1 2.1h-.42c-.42 0-.84.42-.84.84v3.346c0 .42.42.84.84.84h2.923c.42 0 .84.315.84.735v2.923c0 .42-.42.84-.84.84H2.857c-.42 0-.84-.42-.84-.84z"/>
    </svg>
);

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, imageUrl }) => (
    <div className="bg-secondary p-8 rounded-lg shadow-lg flex flex-col items-center text-center border border-transparent hover:border-accent/50 transition-colors duration-300">
        <QuoteIcon className="w-8 h-8 text-accent/50 mb-4" />
        <p className="text-text-secondary italic mb-6">"{quote}"</p>
        <img src={imageUrl} alt={name} className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-accent"/>
        <h4 className="font-bold text-text-primary text-lg">{name}</h4>
        <p className="text-sm text-text-secondary">{title}</p>
    </div>
);

const Testimonials: React.FC = () => {
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

    const testimonialsList = [
        {
            quote: "Bekerja dengan Asngad adalah pengalaman yang sangat menyenangkan. Perhatiannya terhadap detail dan keterampilan pemecahan masalah yang kreatif tidak ada duanya. Produk akhir melebihi semua harapan kami!",
            name: "Jane Doe",
            title: "CEO, Tech Solutions Inc.",
            imageUrl: "https://i.pravatar.cc/150?u=jane"
        },
        {
            quote: "Antarmuka pengguna yang dirancangnya indah dan sangat intuitif. Keterlibatan pengguna kami meroket sejak peluncuran. Sangat direkomendasikan!",
            name: "John Smith",
            title: "Manajer Proyek, Innovate Co.",
            imageUrl: "https://i.pravatar.cc/150?u=john"
        },
    ];

    return (
        <section ref={sectionRef} id="testimonials" className="py-20 md:py-32 bg-secondary overflow-hidden">
            <div className={`container mx-auto px-6 fade-in-up ${isVisible ? 'is-visible' : ''}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary">
                    Kata Kolaborator Saya
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {testimonialsList.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;