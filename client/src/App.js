import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make a request to your backend API
    // The '/api' prefix will be proxied to 'http://localhost:5000' by create-react-app's proxy config
    fetch('/')
      .then(response => {
        // Check if the response was successful (status code 2xx)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setMessage(data.message);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data from backend. Please check server console.");
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      
      {error ? (
          // Display error message if there was an error fetching data
          <p className="text-red-500 text-lg">{error}</p>
        ) : (
          // Display the message from the backend or a loading indicator
          <p className="text-blue-600 text-xl">
            {message ? `Message from Backend: "${message}"` : 'Loading message...'}
          </p>
        )}
        <a href='/services'>Start Ace Homepage here</a>
    </div>
    
    </BrowserRouter>
  );
}

function Home() {
  return <>Home</>
}

export default App;
