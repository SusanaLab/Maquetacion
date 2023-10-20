import React from 'react';
import FAQ from './FAQs'; // Asegúrate de importar el componente FAQ desde el archivo correcto
import jsonData from './FAQ.json'; // Importa el archivo JSON
import './FAQ.scss';

const FaqContainer: React.FC = () => {
  return (
    <div className="container"> 
      {jsonData.map((item, index) => (
        <FAQ key={index} data={item} />
      ))}
    </div>
  );
};

export default FaqContainer;
