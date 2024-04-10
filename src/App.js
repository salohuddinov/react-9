import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Zanimania from './components/Zanimania';
import Zima from './components/Zima';
import Main from './components/Main';
import Icons from './components/Icons';
import Section from './components/Section';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Zanimania />
      <Zima />
      <Main />
      <Icons />
      <Section />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
