import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
// import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Video from './components/Video'; // Certifique-se que o nome do arquivo é Video.js
import resumeData from './resumeData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Video videoId="FpZAwp0r7j4" /> {/* Passe o ID do vídeo aqui */}
        {/* <Resume resumeData={resumeData} /> */}
        <Portfolio resumeData={resumeData} />
        <Testimonials resumeData={resumeData} />
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;