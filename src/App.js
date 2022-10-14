import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [title, setTitle] = useState('No title fetched yet');

  
  useEffect( () => {
    const fetchInfo = async () => {
      const response = await axios.get('http://localhost:8888/.netlify/functions/api');
  
      if(response.status !== 200){
        return null
      }
      
      setTitle(response.data)
    }
    
    const fetchedTitle = fetchInfo()//.then(res => setTitle(res));

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </header>
    </div>
  );
}

export default App;
