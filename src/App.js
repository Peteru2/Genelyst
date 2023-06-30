// import './App.css';
import {Route, Routes} from "react-router-dom";
import Dashboard from './routes/Dashboard.js';
import Payments from "./routes/Payments.js";

function App() {
  return (
    <>
    <Routes>
      <Route path ="/" element = {<Dashboard />} />
      <Route path ="/payments" element = {<Payments />} />

      </Routes > 

        
        
    </>
  );
} 

export default App;
