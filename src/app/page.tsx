import Home from './components/Home';
import About from './about/page';
import Services from './services/page'
import Skills from './components/Skills'
import Portfolio from './portfolio/page';
import Contact from './contact/page';
import Testimonials from './components/Testimonials';
import Education from './education/page';

export default function MainPage() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Education />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  );
}