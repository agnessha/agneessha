import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import SliderContainer from "./Components/About/Slider/SliderContainer";

function App() {
  return (
    <div className="App">
        <Navbar />
        <section id="top">
        <SliderContainer />
        </section>
        <section id="aboutMe">1</section>
        <section id="projects" > 2 </section>
        <section id="skills" />

    </div>
  );
}

export default App;
