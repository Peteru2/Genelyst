// import './App.css';
import {Route, Routes} from "react-router-dom";
import Dashboard from './routes/Dashboard.js';
import Payments from "./routes/Payments.js";
import Requests from "./routes/Requests.js";

function App() {
  return (
    <>
    <Routes>
      <Route path ="/" element = {<Dashboard />} />
      <Route path ="/payments" element = {<Payments />} />
      <Route path ="/Requests" element = {<Requests />} />

      </Routes > 

        
        
    </>
  );
} 

export default App;
