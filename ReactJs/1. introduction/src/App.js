import About from "./components/About";
import Header from "./components/Header";
import Services from "./components/Services";
import Project from "./components/project/Project";
import Team from "./components/Team";
import Client from "./components/Client";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Project />
      <Team />
      <Client/>
      <Footer/>
    </div>
  );
}

export default App;
