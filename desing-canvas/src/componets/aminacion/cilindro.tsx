// Cilindro.tsx
import  { FunctionComponent } from 'react';
import './cilindro.scss';

interface CilindroProps {
  size: number;
  sizeWidth: number;
}

const Cilindro: FunctionComponent<CilindroProps> = ({ size, sizeWidth }) => {
  return (
    <div className="containerc">
      <div className="cilindro" style={{ width: sizeWidth, height: size }}>
        <div className="cilindro2" style={{ width: sizeWidth, height: size }}></div>
      </div>
    </div>
  );
};

export default Cilindro;
