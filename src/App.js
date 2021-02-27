import React, { Component } from "react";
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
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
