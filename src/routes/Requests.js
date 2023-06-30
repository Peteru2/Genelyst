import "./style.css";
import Navbar from '../Components/Navbar.js'

function Requests () {
    return(
        <>
    <Navbar />

            <h3 className="rounded w-44 p-2 text-white  m-4 bg-blue-500" >Generate invoice</h3>

            <h3 className="rounded w-44 p-2  m-4 text-indigo-500" >Preview your invoice</h3>

           
<section className="w-3/6   bg-white rounded-xl shadow border p-8 m-6 mb-2">

<div className="grid grid-cols-2 gap-8 ">

    <div >
        <div className="bt-2">
            <h6 className="text-xl text-indigo-500 fa fa-heart"> </h6>
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

  <div className="col-end-6 ">  
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
<div className="grid grid-cols-4 mt-4 gap-4 pb-2 border-b-2">
    <h4 className=" text-gray-400 sm">DESCRIPTION</h4>
    <h4 className=" text-gray-400 pl-4 sm">QTY</h4>
    <h4 className=" text-gray-400 sm">UNIT PRICE</h4>
    <h4 className=" text-gray-400 sm">AMOUNT</h4>
    </div>
    <div className="grid grid-cols-4 mt-2 gap-4 pb-1 ">
    <h4 className=" text-indigo-900 sm">2 bedroom Post-cleaning</h4>
    <h4 className=" text-indigo-9000 pl-4 sm">1</h4>
    <h4 className=" text-indigo-900 sm">NGN 50,000</h4>
    <h4 className=" text-indigo-900 sm">NGN 50,000</h4>
    </div>

    <div className="grid grid-cols-10 ">
            <div className="mt-2 col-end-12">
            
            <div className="grid grid-cols-2 border-t-2 py-2 gap-8">
                    <div className="">SUB-TOTAL</div>
                    
                    <div className="pl-4"><b>NGN 50,000</b></div>
            </div>
            <div className="grid grid-cols-2 border-t-2 py-2 gap-8">
                    <div className="">VAT(7.5%)</div>
                    
                    <div className="pl-4"><b>NGN 2,300</b></div>
            </div>
            <div className="grid grid-cols-2 border-y-2 py-2 gap-8">
                    <div className="">TOTAL</div>
                    
                    <div className="pl-4 text-blue-500" >NGN 52,300</div>
            </div>
               
                </div>
               
            
    </div>


</section>
<section className="w-3/6 m-4  mt-0 p-8 pt-4 ">
            <div className="grid grid-cols-2 gap-4 ">
            <button className="border-blue-600 rounded  hover:bg-blue-700 hover:text-white btn p-3 text-blue-600">GO BACK</button>
            <button className="btn rounded p-3 bg-yellow-500 hover:bg-yellow-700 text-white">SEND TO CUSTOMER</button>
            </div>
        
</section>
        </>
    );
}
export default Requests;