import React, { useState } from 'react';
import './FAQ.scss';

interface FAQProps {
  data: {
    Title: string;
    Description: string;
  };
}

const FAQ: React.FC<FAQProps> = ({ data }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [isHovered, setIsHovered] = useState(false); 



  const handleMouseEnter = () => {
    setShowDescription(true);
       setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
       setIsHovered(false);
  };

  return (
    <div className="faq" 
         onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
      <h1
        className="faq__title"
  
      >
        {data.Title}
{/*   {isHovered ? `${data.Title} ${data.Title}` : data.Title} */}
      </h1>
      {showDescription && (
        <p className="faq__description">{data.Description}</p>
      )}
    </div>
  );
};

export default FAQ;
