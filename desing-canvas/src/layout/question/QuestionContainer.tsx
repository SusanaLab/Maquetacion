import React from 'react';
import Question from './Question'; // Asegúrate de importar el componente FAQ desde el archivo correcto
import questionData from './Question.json'; // Importa el archivo JSON
import './Question.scss';

const QuestionContainer: React.FC = () => {
  return (
        <div className='question-container'>
      <h1 className='titulo'>FAQs</h1>
      <div className='ball'></div>
      <div className='questionData'>

  
      {questionData.map((item, index) => (
        <Question key={index} data={item} />
      ))}
      
      </div>
    </div>
  );
};

export default QuestionContainer;
