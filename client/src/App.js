import './App.css';
import  Navbar from "./Components/loyout/navbar"
import  Dash from "./Components/loyout/dashbord"
import "./App.css";

import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Router>
     <Navbar />
     <Dash />
    </Router>
    </div>
  );
}

export default App;
