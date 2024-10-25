import logo from './logo.svg';
import './App.css';
import About from './components/About/About';
import Navigation from './components/Navigation/Navigation';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <div>
      <Navigation/>
      <main>
      <About/>
      <Contact/>
      <Experience/>
      <Projects/>
      </main>
    </div>
  );
}

export default App;
