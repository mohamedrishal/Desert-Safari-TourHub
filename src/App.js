import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Custom from './components/custom/Custom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import LandingPage from './components/landingPage/LandingPage';
import Packages from './components/packages/Packages';
import Review from './components/review/Review';


function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <Packages />
      <Custom /> 
      <About />
      <Contact />
      <Review />
      <Footer />
    </>
  );
}

export default App;
