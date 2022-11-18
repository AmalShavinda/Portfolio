import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experiences from "./Components/Experiences/Experiences";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experiences/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
