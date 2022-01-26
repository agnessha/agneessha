import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import AboutContainer from "./Components/About/AboutContainer";
import Top from "./Components/Top/Top";

function App() {
  return (
    <div className="App">
        <Navbar />
        <section id="top">
            <Top />
        </section>
        <section id="aboutMe">
            <AboutContainer />
        </section>
        <section id="projects" > 2 </section>
        <section id="skills" />

    </div>
  );
}

export default App;
