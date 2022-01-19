import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { google } from 'googleapis';
// import * as googleTTS from 'google-tts-api'; // ES6 or TypeScript



function App() {

  const [audioBase64, setAudioBase64] = useState("");

  useEffect(() => {
    // get audio URL
    const getAudio = async () => {
      try {
        const apis = google.getSupportedAPIs();
        debugger;
        // setAudioBase64(audio)
      }
      catch(err) {
        const er = err;
        debugger;
        console.log(err)
        debugger;

      }
    }
    getAudio()

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Check out {audioBase64}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
