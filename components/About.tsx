
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
          Tentang Saya
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                <div className="absolute inset-0 bg-accent rounded-full transform rotate-6 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105"></div>
                <img
                  src="https://yt3.googleusercontent.com/ytc/AIdro_mECd8Bp82gx4hP5Ebezw_aBOChX5mDQdxQfrDl7MnRJAQ=s900-c-k-c0x00ffffff-no-rj"
                  alt="Asngad"
                  className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-secondary transition-transform duration-500 group-hover:scale-95"
                />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-accent mb-4">Menciptakan Pengalaman Digital</h3>
            <p className="text-text-secondary text-lg mb-4">
              Saya seorang pengembang yang bersemangat dengan kepekaan terhadap desain. Dengan dasar yang kuat dalam teknologi front-end seperti React dan TypeScript, saya berspesialisasi dalam menciptakan antarmuka pengguna yang intuitif dan dinamis. Tujuan saya adalah menggabungkan fungsionalitas dengan estetika untuk menghasilkan produk digital yang mulus.
            </p>
            <p className="text-text-secondary text-lg">
              Saat tidak sedang membuat kode, saya suka menjelajahi teknologi baru, berkontribusi pada proyek sumber terbuka, dan mengabadikan momen melalui fotografi. Mari terhubung dan bangun sesuatu yang luar biasa bersama!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;