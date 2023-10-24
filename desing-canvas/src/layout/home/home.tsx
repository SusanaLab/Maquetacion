import logo from "./logo.png";
import './home.scss';
import Cilindros from "../../componets/aminacion/cilindros";



function Home() {
  return (
    <section className='home-container'>
      <header className='header'>
        <img src={logo} alt="Logo" className='header__logos' />
        <h3 className='header__marca'>Company Innovations</h3>

      </header>
     
      <section className='home'> 
       
        <h1 className='home__marca'>
          Company Innovations - <strong className='home__slogan'>Empowering</strong> Tomorrow, Today
        </h1>
         <Cilindros />
      </section>
    </section>
  );
}

export default Home;
