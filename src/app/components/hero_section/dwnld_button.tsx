import React from 'react';

const DownloadButton: React.FC = () => {
  return (
    <a
      href="/Portfolio-Site-Umesha_G/assets/resume/Resume.pdf" 
      download="Umesha_Software_Resume.pdf"  
      className="bg-neutral-600 text-white hover:bg-red-1 px-4 py-2 rounded 2xl:px-6 2xl:py-3 2xl:text-xl"
    >
      Resume
    </a>
  );
};

export default DownloadButton;