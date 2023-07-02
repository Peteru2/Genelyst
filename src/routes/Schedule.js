import "./style.css";
import Navbar from '../Components/Navbar.js'

function Schedule (){
    return(
        <>
    <Navbar />
    
           
            <h3 className="rounded w-44 p-2 text-white  m-4 bg-blue-500" >Generate Invoice</h3>

            <h3 className="rounded w-44 p-2  m-4 text-indigo-900" >Enter Invoice Info</h3>


           <div>

           <input
        type="email"
        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email" />
      <label
        for="exampleInputEmail1"
        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >Email address</label
      >
           </div>
<div className=" sm:5/6 md:w-4/6 sm:5/6 pl-12  bg-white rounded-xl shadow border  p-8 m-6">

<div className="grid md:grid-cols-3 sm:grid-cols-1 gap-2 border-b-2">
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


<div class="grid grid-cols-12  gap-2">
<div class="mt-4 sm:col-end-12  sm:col-span-3 md:col-end-12   md:col-span-3">
  <button class=" bg-blue-500  hover:bg-blue-700  text-white flex grid-cols-2 gap-5 btn"><b>Action </b> <i className=" fa fa-chevron-down pt-1 px-0 text-white hover:bg-blue-800 btn "></i></button>
</div>
 
  
</div>

</div>

        </>
    );
}
export default Schedule;