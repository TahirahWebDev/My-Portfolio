import Home from './home/page';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './about/page';
import Services from './services/page'
import Skills from './skills/page';
import Portfolio from './portfolio/page';
import Contact from './contact/page';

export default function MainPage() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}