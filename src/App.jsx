import Service from "./components/3.service/Service";
import Project from "./components/4.project/Project";
import CeoMessage from "./components/5.ceo-message/ceo-message";
import Contact from "./components/6.contact/Contact";
import Footer from "./components/7.footer/Footer";
import Header from "./components/1.header/header";
import Hero from "./components/2.hero/Hero";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Service />
      <Project />
      <CeoMessage />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
