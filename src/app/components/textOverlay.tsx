import React from "react";

const TextOverlay = ({ text = '', color= 'text-gray-300', fontSize = 'text-8xl',className = '' ,top= 'top-0' }) => {
   
  return (
     
      <h2 className={`${fontSize} ${className} ${color} absolute left-0 ${top} font-bold -z-10 opacity-75 `}>{text}</h2>
    
  );
};

export default TextOverlay;
