import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home" style={{ padding: "20px" }}>
        <h2>Home</h2>
        <p>Welcome to the homepage.</p>
      </section>
      <section id="about" style={{ padding: "20px" }}>
        <h2>About</h2>
        <p>Learn more about us.</p>
      </section>
      <section id="services" style={{ padding: "20px" }}>
        <h2>Services</h2>
        <p>Discover our services.</p>
      </section>
      <section id="contact" style={{ padding: "20px" }}>
        <h2>Contact</h2>
        <p>Get in touch with us.</p>
      </section>
    </div>
  );
}

export default App;
