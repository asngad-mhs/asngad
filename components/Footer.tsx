
import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon, TiktokIcon, YoutubeIcon } from './SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-6 text-center text-text-secondary">
        <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-4 mb-4">
          <a href="#" className="hover:text-accent transition-all duration-30a0 transform hover:scale-110">
            <TwitterIcon className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-accent transition-all duration-300 transform hover:scale-110">
            <GithubIcon className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-accent transition-all duration-300 transform hover:scale-110">
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-accent transition-all duration-300 transform hover:scale-110">
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-accent transition-all duration-300 transform hover:scale-110">
            <TiktokIcon className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-accent transition-all duration-300 transform hover:scale-110">
            <YoutubeIcon className="w-6 h-6" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Asngad.my.id. Hak Cipta Dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;