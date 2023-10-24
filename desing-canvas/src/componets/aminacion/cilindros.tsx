
import Cilindro from './cilindro';
import './cilindro.scss';

const Cilindros = () => {
  const sizes = [ 240, 260, 280, 300]; // Tamaños aleatorios para los cilindros
  const sizesWidth = [90, 90, 90, 90];


  return (
    <>
    <div className="cilindros">
      {sizes.map((size, index) => (
        <Cilindro key={index} size={size} sizeWidth={sizesWidth[index]}  />
      ))}
    </div>
  
    </>
  );
};

export default Cilindros;
