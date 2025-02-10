import React, { memo } from 'react';
import GithubIcon from '../../assets/svgs/ContactPageSvgs/GithubIcon';
import LinkedInIcon from '../../assets/svgs/ContactPageSvgs/LinkedInIcon';

const Contact = memo(() => {
  return (
    <section
      id="contact"
      className="relative z-10 pt-24 pb-12 md:py-16 bg-gray-900 min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Let's connect! Reach out through email or find me on social platforms.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl space-y-8">
          {/* Direct Email Button */}
          <a
            href="mailto:aleksandremoistsrapishvili@gmail.com"
            className="
              w-full inline-flex items-center justify-center 
              py-2 px-4 text-sm 
              md:py-3 md:px-6 md:text-base
              bg-gradient-to-r from-purple-500 to-pink-500 
              hover:from-purple-600 hover:to-pink-600 
              text-white rounded-lg 
              transition-all duration-300 font-medium space-x-2
            "
          >
            {/* (Optional) Mail Icon inline or separate */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>Send me an Email</span>
          </a>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/aleksandremoists"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-purple-400 transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <GithubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/aleksandre-moistsrapishvili-2959272b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-purple-400 transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <LinkedInIcon />
            </a>
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900/50 to-transparent" />
    </section>
  );
});

export default memo(Contact);
