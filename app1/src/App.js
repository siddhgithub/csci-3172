import React, { useState } from 'react';
import './App.css';
import image1 from './images/image1.jpeg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

function App() {
  const [select, set] = useState(null);

  const change = (a) => {
    set(a);
  };

  const list = () => {
    switch (select) {
      case 'landscape':
        return [image1, image1, image1];
      case 'portraits':
        return [image2, image2, image2];
      case 'nature':
        return [image3, image3, image3];
      default:
        return [];
    }
  };
  return (
    <div className="app">
      <header className="head">
        <h1>Photography Portfolio</h1>
        <p>Welcome to my portfolio showcasing my photography work.</p>
      </header>
      <main className="main">
        <div className="drop">
          <button className="dropbtn">Select Category</button>
          <div className="dropdown">
            <button onClick={() => change('landscape')}>Landscape</button>
            <button onClick={() => change('portraits')}>Portraits</button>
            <button onClick={() => change('nature')}>Nature</button>
          </div>
        </div>
        <section className="display">
          {list().map((x, i) => (
            <div className="photo" key={i}>
              <img src={x} alt={`Photo ${i + 1}`} />
            </div>
          ))}
          </section>
        <section className="about">
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula mi eget ligula dictum, sed sodales augue ultrices.</p>
        </section>
        <section className="contact">
          <h2>Contact Me</h2>
          <p>Email: lec@gmail.com</p>
          <p>Phone: 123-456-789</p>
        </section>
      </main>
    </div>
  );
}

export default App;
