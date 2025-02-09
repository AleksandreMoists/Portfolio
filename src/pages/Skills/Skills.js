import React, { useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('certificates');
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Dummy data - replace with your actual content
  const certificates = Array(12).fill(null).map((_, i) => ({
    id: i + 1,
    title: `Certificate ${i + 1}`,
    image: `https://picsum.photos/300/200?random=${i}`
  }));

  const techStack = [
    { name: 'React', icon: 'react.svg' },
    { name: 'Tailwind', icon: 'tailwind.svg' },
    { name: 'Node.js', icon: 'nodejs.svg' },
    { name: 'Python', icon: 'python.svg' },
    { name: 'Git', icon: 'git.svg' },
    { name: 'Docker', icon: 'docker.svg' },
  ];

  return (
    <section id="skills" className="p-6 md:p-12 min-h-screen">
      {/* Image Preview Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-8 right-0 text-white hover:text-purple-400 transition-colors"
              aria-label="Close preview"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Certificate preview"
              className="mx-auto max-h-[90vh] object-contain rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8 text-center">
          Skills & Certifications
        </h2>

        {/* Tab Buttons Container */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-0.5 md:p-1 rounded-full bg-gray-800 border-2 border-gray-700">
            <button
              onClick={() => setActiveTab('certificates')}
              className={`px-4 py-1 md:px-6 md:py-2 lg:px-8 rounded-full transition-all duration-300 text-sm md:text-base ${
                activeTab === 'certificates'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-transparent text-gray-400 hover:bg-gray-700'
              }`}
            >
              <span className="hidden md:inline">Certificates</span>
              <span className="md:hidden">Certs</span>
            </button>
            <div className="w-px bg-gray-700 mx-1 md:mx-2 my-1 md:my-2" />
            <button
              onClick={() => setActiveTab('technology')}
              className={`px-4 py-1 md:px-6 md:py-2 lg:px-8 rounded-full transition-all duration-300 text-sm md:text-base ${
                activeTab === 'technology'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-transparent text-gray-400 hover:bg-gray-700'
              }`}
            >
              <span className="hidden md:inline">Technology</span>
              <span className="md:hidden">Tech</span>
            </button>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative min-h-[500px]">
          {/* Certificates Tab */}
          <div
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              activeTab === 'certificates'
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
          >
            <div className="space-y-8">
              <div className={`relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${
                showAllCerts ? 'max-h-[80vh] overflow-y-auto pb-4' : ''
              }`}>
                {certificates
                  .slice(0, showAllCerts ? certificates.length : 6)
                  .map((cert) => (
                    <div 
                      key={cert.id}
                      className="group relative bg-gray-800 rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-xl cursor-pointer"
                      onClick={() => setSelectedImage(cert.image)}
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-white font-medium">{cert.title}</h3>
                        <p className="text-gray-400 text-sm mt-2">Click to view</p>
                      </div>
                    </div>
                  ))}

                {/* Gradient overlay for scroll indication */}
                {showAllCerts && (
                  <div className="sticky bottom-0 h-20 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none -mt-20" />
                )}
              </div>

              {certificates.length > 6 && (
                <div className="flex justify-center">
                  <button
                    onClick={() => setShowAllCerts(!showAllCerts)}
                    className="flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300 text-sm"
                  >         
                    <span>{showAllCerts ? 'Show Less' : 'Show More'}</span>
                    <svg
                      className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                        showAllCerts ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Technology Tab */}
          <div
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              activeTab === 'technology'
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {techStack.map((tech) => (
                <div 
                  key={tech.name}
                  className="flex flex-col items-center p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors group"
                >
                  <div className="w-16 h-16 mb-2 flex items-center justify-center">
                    {/* Replace with actual SVG */}
                    <img 
                      src={`/icons/${tech.icon}`} 
                      alt={tech.name}
                      className="w-12 h-12 object-contain filter brightness-0 invert-[0.8] hover:invert-0 transition-all"
                    />
                  </div>
                  <span className="text-white text-sm font-medium">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;