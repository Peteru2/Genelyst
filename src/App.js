// import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from './Components/Navbar.js'
import Dashboard from './routes/Dashboard.js';
import Payments from "./routes/Payments.js";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path ="/" element = {<Dashboard />} />
      <Route path ="/payments" element = {<Payments />} />

      </Routes > 

        
        
    </>
  );
} 

export default App;
