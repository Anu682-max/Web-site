import Service from "./components/3.service/service";
import Project from "./components/4.project/project";
import CeoMessage from "./components/5.Ceo-message/ceo-message";
import Contact from "./components/6.Contact/contact";
import Footer from "./components/7.footer/footer";
import Header from "./components/1.header/Header";
import Hero from "./components/2.Hero/hero";
import Animals from "./components/8.animals/animals";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Hero />
        <div className="content-sections">
          <Service />
          <Animals />
          <Project />
          <CeoMessage />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
