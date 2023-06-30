import "./style.css";
import Navbar from '../Components/Navbar.js'

function Dashboard (){
    return(
        <>
    <Navbar />
    
            <div className="container mar mt-4 mx-auto bg-white rounded-xl shadow border p-8 m-10">

      <p className="text-3xl underline text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        Genelyst is here to serve you
      </p>
    </div>
        </>
    );
}
export default Dashboard;