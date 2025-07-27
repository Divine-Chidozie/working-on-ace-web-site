import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make a request to your backend API
    // The '/api' prefix will be proxied to 'http://localhost:5000' by create-react-app's proxy config
    fetch('/api')
      .then(response => {
        // Check if the response was successful (status code 2xx)
        if (!response.ok) {
          // If not, throw an error with the status
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Parse the JSON response body
        return response.json();
      })
      .then(data => {
        // Set the message from the backend data
        setMessage(data.message);
      })
      .catch(error => {
        // Log any errors to the console
        console.error("Error fetching data:", error);
        // Set an error message to display in the UI
        setError("Failed to fetch data from backend. Please check server console.");
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {error ? (
          // Display error message if there was an error fetching data
          <p className="text-red-500 text-lg">{error}</p>
        ) : (
          // Display the message from the backend or a loading indicator
          <p className="text-blue-600 text-xl">
            {message ? `Message from Backend: "${message}"` : 'Loading message...'}
          </p>
        )}
      </header>
    </div>
  );
}

export default App;
