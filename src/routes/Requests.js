import "./style.css";
import Navbar from '../Components/Navbar.js'

function Requests () {
    return(
        <>
    <Navbar />

            <h3 className="rounded md: w-44 p-2 text-white  m-4 bg-blue-500" >Generate invoice</h3>

            <h3 className="rounded w-44 p-1  m-4 text-indigo-500" >Preview your invoice</h3>

           
<section className="md:w-3/6 sm:w-5/6 xs:w-5/6 bg-white rounded-xl shadow border md:p-8 p-4 m-6   mb-2">

<div className="grid grid-cols-2 gap-8 ">

    <div cla>
        <div className="bt-2">
            <h6 className="text-xl text-indigo-500  fa fa-heart"> </h6>
        </div>

        <h4 className="text-gray-400 mt-4">FROM</h4>

        <div className="mt-2 ">
            <h6 className="text-sm text-black"> <b>INVOICE STATEMENT</b></h6>
            <h4 className="text-sm text-black "> polalekan@gmail.com </h4>
            <h4 className="text-sm  text-black"> +2348104343582 </h4>

        </div>

        <h4 className="text-gray-400 mt-4">BILL TO</h4>
        <div className="mt-2 ">
        <h6 className="text-sm text-black"> <b>Genelyst Tech Solution</b></h6>

        <h4 className="text-sm text-black "> genelyst@gmail.com </h4>
        <h4 className="text-sm text-black "> 51, Online Street </h4>
        <h4 className="text-sm text-black "> +2348174346182 </h4>

        
           
        </div>
       
       
  </div>

  <div className="col-end-6  ">  
        <div className="mb-4">
            <h6 className="text-base text-gray-400"> INVOICE</h6>
        </div>

        <div className="mt-4 ">
            <h6 className="text-base text-gray-400"> STATUS</h6>
            <h4 className="text-base text-red-950"> UNPAID </h4>

        </div>
        <div className="mt-2 ">
            <h6 className="text-base text-gray-400"> CREATED</h6>
            <h4 className="text-base  text-indigo-900"> July 29, 2003 </h4>

        </div>
        <div className="mt-2 ">
            <h6 className="text-base text-gray-400"> DUE</h6>
            <h4 className="text-base  text-indigo-900"> June 1, 2003 </h4>

        </div>
        <div className="mt-2 ">
            <h6 className="text-base text-gray-400"> AMOUNT</h6>
            <h4 className="text-base  text-indigo-900"> NGN 50,000</h4>

        </div>
        
  </div>
  
 
</div>
<div className="grid grid-cols-4 mt-4 gap-5 pb-2 border-b-2">
    <h4 className=" text-gray-400">DESCRIPTION</h4>
    <h4 className=" text-gray-400 ml-5">Q T Y </h4>
    <h4 className=" text-gray-400 m">UNIT PRICE</h4>
    <h4 className=" text-gray-400 mr-10">AMOUNT</h4>
</div>

    <div className="grid grid-cols-4 mt-2 gap-4 pb-1 ">
    <h4 className=" text-indigo-900 sm">2 bedroom Post-cleaning</h4>
    <h4 className=" text-indigo-900 pl-4 sm">1</h4>
    <h4 className=" text-indigo-900 sm">NGN 50,000</h4>
    <h4 className=" text-indigo-900 sm">NGN 50,000</h4>
    </div>

    <aside className="grid md:grid-cols-10 sm:grid-cols-12 ">
            <div className="mt-2 w-6/6 md:col-end-12 sm:col-end-0 ml-0 grid ">
            
            <div className="grid w-6/6 grid-cols-2 border-t-2 py-2 md:gap-8 sm:gap-10">
                    <div className="">SUB-TOTAL</div>
                    
                    <div className="pl-4"><b>NGN 50,000</b></div>
            </div>
            <div className="grid w-6/6 grid-cols-2 border-t-2 py-2 md:gap-8 sm:gap-10">
                    <div className="sm:mr-4">VAT(7.5%)</div>
                    
                    <div className="pl-4"><b>NGN 2,300</b></div>
            </div>
            <div className="grid w-6/6 grid-cols-2 border-t-2 py-2 md:gap-8 sm:gap-10">
                    <div className="">TOTAL</div>
                    
                    <div className="pl-4 text-blue-500" >NGN 52,300</div>
            </div>
               
                </div>
               
            
    </aside>


</section>
<section className="md:w-3/6 sm:w-6/6 m-4  mt-0  md:p-8 sm:p-6 pt-4 ">
            <div className="grid grid-cols-2 gap-4 ">
            <button className="border-blue-600 rounded  hover:bg-blue-700 hover:text-white btn md:p-3 sm:p-2 text-blue-600">GO BACK</button>
            <button className="btn rounded md:p-3 sm:p-2 bg-yellow-500 hover:bg-yellow-700 text-white">SEND TO CUSTOMER</button>
            </div>
        
</section>



<section className="bg-white md:grid md:items-center md:justify-center p-4 mt-3 ">
    <div className="mt-3 md:w-6/6  ">
                    <label class="block">
                     <span class="bg-transparent p-0 after:ml-0.5 after:text-red-500 block text-black text-sm w-3/6 font-medium  ">
                        Customer/Company
                    </span>
                <input type="Text" name="email" class="mt-1 px-3 py-3 bg-white  shadow-sm border-yellow-400 placeholder-slate-400  "  placeholder="Spleet Limited" />
                </label>
            </div>  

        <aside className="md:grid md:grid-cols-2 md:w-6/6 mt-3 gap-4">
            <div className="mt-4 ">
                    <label class="block">
                     <span class="bg-transparent p-0  after:ml-0.5 after:text-red-500 text-black block text-sm w-5/6 font-medium ">
                            Email address
                    </span>
                <input type="email" name="email" class="mt-1 px-3 py-3 bg-white border-blue-600 shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                </label>
            </div>
            <div className="mt-4">
                <label class="block">
                <span class="bg-transparent p-0  after:ml-0.5 after:text-red-500 block text-black text-sm w-5/6 font-medium ">
                    Phone number
                </span>
            <input type="text" name="email" class="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="08102034565" />
            </label>
            </div>
    </aside>
    <div className="mt-4 md:w-6/6 ">
                    <label class="block">
                     <span class="bg-transparent p-0  after:ml-0.5 after:text-red-500 block text-black text-sm w-5/6 font-medium ">
                            Home Building Address
                    </span>
                <input type="email" name="email" class="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                </label>
            </div>
        <section className="md:w-6/6 sm:w   mt-0  md:p-0 sm:p-1 pt-4 ">
            <div className="grid grid-cols-2 gap-4 ">
            <button className="border-blue-600 rounded  hover:bg-blue-700 hover:text-white btn  sm:p-2 text-blue-600">GO BACK</button>
            <button className="btn rounded  sm:p-2 bg-yellow-500 hover:bg-yellow-700 text-white">SEND TO CUSTOMER</button>
            </div>
        
</section>
</section>
        </>
    );
}
export default Requests;