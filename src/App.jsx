import Service from "./components/3.service/Service";
import Project from "./components/4.project/Project";
import CeoMessage from "./components/5.Ceo-message/ceo-message";
import Contact from "./components/6.Contact/contact";
import Footer from "./components/7.footer/footer";
import Header from "./components/1.header/Header";
import Hero from "./components/2.Hero/hero";
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
