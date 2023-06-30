import "./style.css";
import Navbar from '../Components/Navbar.js'

function Payments () {
    return(
        <>
    <Navbar />

            <h3 className="rounded w-44 p-2 text-white  m-4 bg-blue-500" >Request Information</h3>

           
<div className="w-4/6 pl-12   bg-white rounded-xl shadow border p-8 m-6">

<div className="grid grid-cols-3 gap-2 border-b-2">
    <div >
        <div>
            <h6 className="text-xs text-indigo-500"> REQUEST TYPE</h6>
            <h4 className="text-lg font-semibold text-indigo-900"> POST-CON </h4>
        </div>

        <div className="mt-4 pt-2">
            <h6 className="text-xs text-indigo-500"> INVOICE STATEMENT</h6>
            <h4 className="text-xs p-2 pl-4 bg-red-100 w-24 rounded"> UNGENERATED </h4>
        </div>

        <div className="mt-4 pt-2">
            <h6 className="text-xs text-indigo-500">LOCATION</h6>
            <h4 className="text-lg  font-semibold text-indigo-900">8, YOVI STREET, IWAYA,ONIKE YABA. </h4>
        </div>
       
       
  </div>

  <div >  
        <div>
            <h6 className="text-xs text-indigo-500"> CUSTOMER NAME</h6>
            <h4 className="text-lg font-semibold text-indigo-900"> PETER-EKINS </h4>
        </div>

        <div className="mt-4 pt-2">
            <h6 className="text-xs text-indigo-500"> REQUEST DATE</h6>
            <h4 className="text-lg font-semibold text-indigo-900"> 06.10.2019 </h4>

        </div>

        <div className="mt-4 pt-2">
            <h6 className="text-xs text-indigo-500">HOUSE-TYPE</h6>
            <h4 className="text-lg font-semibold text-indigo-900">5-BEDROOM FLAT. </h4>
        </div>
  </div>

  <div >  
                <div>
                        <h6 className="text-xs text-indigo-500"> CLEANING DATE</h6>
                        <h4 className="text-lg font-semibold text-indigo-900"> 09.10.2019</h4>
                    </div>

                    <div className="mt-4 pt-2">
                        <h6 className="text-xs text-indigo-500"> REQUEST TIME</h6>
                        <h4 className="text-lg font-semibold text-indigo-900"> 8:00 A.M </h4>

                    </div>

                    <div className="mt-4 pt-2">
                        <h6 className="text-xs text-indigo-500">HOUSE-TYPE</h6>
                        <h4 className="text-lg font-semibold text-indigo-900">5-BEDROOM FLAT. </h4>
                    </div>
  </div>
</div>


<div class="grid grid-cols-12 gap-2">
<div class="mt-4 col-end-12 col-span-3">
  <button class=" bg-blue-500 hover:bg-blue-700 text-white grid grid-cols-2 gap-5 btn"><b>Action</b> <i className=" fa fa-chevron-down pt-1 px-0 text-white hover:bg-blue-800 btn "></i></button>
</div>
 
  
</div>
</div>
        </>
    );
}
export default Payments;