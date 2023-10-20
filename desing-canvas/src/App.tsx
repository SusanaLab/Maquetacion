import "./estilos.scss";
import './App.css'
import Home from "./layout/home/home";
import About from './layout/about/about';
import FaqContainer from "./layout/FAQ/FaqContainer";
import Services from "./layout/services/services";
import Sector from "./layout/Sectors/sectors";
import Companies from "./layout/companies/companies";
import QuestionContainer from "./layout/question/QuestionContainer";
import Contact from "./layout/contact/contact";


function App() {


  return (
    <>
      <Home />
      <About />
      <FaqContainer/>
      <Services/>
      <Sector/>
      <Companies/>
      <QuestionContainer/>
      <Contact/>
    </>
  )
}

export default App
