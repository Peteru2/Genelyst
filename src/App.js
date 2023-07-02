// import './App.css';
import {Route, Routes} from "react-router-dom";
import Dashboard from './routes/Dashboard.js';
import Payments from "./routes/Payments.js";
import Requests from "./routes/Requests.js";
import Schedule from "./routes/Schedule.js";

function App() {
  return (
    <>
    <Routes>
      <Route path ="/" element = {<Dashboard />} />
      <Route path ="/payments" element = {<Payments />} />
      <Route path ="/Requests" element = {<Requests />} />
      <Route path ="/Schedule" element = {<Schedule />} />


      </Routes > 

        
        
    </>
  );
} 

export default App;
