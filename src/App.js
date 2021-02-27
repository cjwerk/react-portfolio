import React, { Component } from "react";
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeDate={resumeData} />
        <About resumeDate={resumeData} />
        <Resume resumeDate={resumeData} />
        <Portfolio resumeDate={resumeData} />
        <Testimonials resumeDate={resumeData} />
        <ContactUs resumeDate={resumeData} />
        <Footer resumeDate={resumeData} />
      </div>
    );
  }
}

export default App;
