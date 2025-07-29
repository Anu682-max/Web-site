import Service from "./components/3.service/service";
import Project from "./components/4.project/project";
import CeoMessage from "./components/5.Ceo-message/ceo-message";
import Contact from "./components/6.Contact/contact";
import Fooder from "./components/7.fooder/fooder";
import Header from "./components/1.header/header";
import Hero from "./components/2.hero/hero";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Service />
      <Project />
      <CeoMessage />
      <Contact />
      <Fooder />
    </>
  );
}




export default App;
