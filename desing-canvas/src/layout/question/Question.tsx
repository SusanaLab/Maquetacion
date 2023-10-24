import React, { useState } from 'react';
import './Question.scss'; // Asegúrate de tener un archivo Question.scss con las clases correspondientes


interface QuestionProps {
  data: {
    Question: string;
    Description: string;
  };
}

const Question: React.FC<QuestionProps> = ({ data }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isCrossVisible, setIsCrossVisible] = useState(true);

  const handleClick = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
    setIsCrossVisible(!isCrossVisible);
  };

  return (

    <div className="question">
      <div className='icono'>
        <h1 className="question__title">
          {data.Question}
        </h1>
        {isCrossVisible && (
          <div className="cross" onClick={handleClick}>
        <span className="larger-minus">   &#43;</span>
          </div>
        )}
        {!isCrossVisible && (
          <div className="minus" onClick={handleClick}>
          <span className="larger-minus">&#8722;</span>
          </div>
        )}
      </div>

      {isDescriptionVisible && (
        <p className="question__description">{data.Description}</p>
      )}
    </div>
  
  );
};

export default Question;

