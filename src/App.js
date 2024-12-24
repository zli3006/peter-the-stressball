import React, { useState } from 'react';
import './App.css';

function App() {
  // Host audio files locally in /public/audio/:
  const audioFiles = [
    '/audio/1.m4a',
    '/audio/2.m4a',
    '/audio/3.m4a',
    '/audio/4.m4a',
    '/audio/5.m4a',
    '/audio/6.m4a',
    '/audio/7.m4a',
    '/audio/8.m4a',
    '/audio/9.m4a',
    '/audio/10.m4a'
    // ... up to message10
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSqueezed, setIsSqueezed] = useState(false);

  const handleClick = () => {
    setIsSqueezed(true);
    const audio = new Audio(audioFiles[currentIndex]);
    audio.play();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % audioFiles.length);

    setTimeout(() => setIsSqueezed(false), 200);
  };

  return (
    <div style={styles.container}>
      {/* Overlay container with pastel blue + 50% opacity */}
      <div style={styles.overlay}>
        <h1>peter the stress ball</h1>
        <h2 style={styles.subtitle}>(make sure sound is on)</h2>
        <button
          onClick={handleClick}
          style={{
            ...styles.stressBall,
            ...(isSqueezed ? styles.squeeze : {})
          }}
        >
          <img src="/stressball.png" alt="Stress Ball" style={styles.image} />
        </button>
        <h1>⬆️</h1>
        <p style={styles.caption}>squeeze to de-stress</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    color: '#FF69B4',
    backgroundImage: 'url("/background.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  overlay: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(179, 235, 242, 0.8)', // Pastel blue with 50% opacity
    padding: 20,
    borderRadius: 10,
  },
  subtitle: {
    marginTop: '10px',
    marginBottom: '20px',
    fontSize: '24px',
    textAlign: 'center',
    color: '#FF69B4',
  },
  stressBall: {
    border: 'none',
    background: 'none',
    padding: '0',
    cursor: 'pointer',
  },
  image: {
    width: '300px',
    height: '300px',
  },
  caption: {
    marginTop: '10px',
    fontSize: '16px',
    textAlign: 'center',
    color: '#FF69B4',
  },
  squeeze: {
    animation: 'squeeze 0.2s ease-in-out',
  },
};

export default App;
