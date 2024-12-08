import React from 'react';

const MyProject = ({ id, name, href, imageSrc }) => {
  return (
    <div className="relative overflow-hidden border rounded-xl caret-black shadow-md group">
      <h5>{name}</h5>
      <img 
        className="w-full h-auto transition-transform duration-500 hover:opacity-50 hover:-translate-y-1 hover:scale-110" 
        src={imageSrc} 
        alt={id} 
      />
      <div className="w-14 h-14 absolute bottom-20 left-10 invisible group-hover:visible transition-transform duration-500 transform group-hover:translate-y-6 border-2 border-[#eca348] hover:bg-[#c48942] rounded-lg flex justify-center items-center">
        
        <a href={href} className="flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default MyProject;
