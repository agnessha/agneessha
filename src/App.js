import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import AboutContainer from "./Components/About/AboutContainer";
import Top from "./Components/Top/Top";
import ProjectsContainerMap from "./Components/Projects/ProjectsContainer";
import SkillContainer from "./Components/Skills/SkillContainer";
import ContactsContainer from "./Components/Contacts/ContactsContainer";

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
        <section id="projects" >
            <ProjectsContainerMap />
        </section>
        <section id="skills" >
            <SkillContainer />
        </section>
        <section id="contacts">
            <ContactsContainer />
        </section>

    </div>
  );
}

export default App;
