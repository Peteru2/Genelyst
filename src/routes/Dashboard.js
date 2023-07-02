import "./style.css";
import Navbar from '../Components/Navbar.js'

function Dashboard (){
    return(
        <>
    <Navbar />
    
            <div className="  mt-4   bg-white  rounded-xl shadow border max-sm:m-6 md:m-10 p-8 ">
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