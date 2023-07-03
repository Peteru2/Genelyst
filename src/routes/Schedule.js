import "./style.css";
import Navbar from '../Components/Navbar.js'

function Schedule (){
   
    return(
        <>
    <Navbar />
    <div className=" md:m-20 md:mt-6 md:mb-4">

        <h3 className="rounded md: w-44 p-2 text-white  m-4 md:ml-12 bg-blue-500" >Generate invoice</h3>
        <h3 className="rounded w-44 p-1  m-4 text-indigo-500 md:ml-20 mb:mb-1 md:pl-12 " >Enter invoice info</h3>
    </div>

    <div className="md:grid md:grid-cols-2 md:w-6/6  gap-6 md:m-20 mt:m-2">

    <section className="bg-white md:grid md:items-center md:justify-center md:grid-rows-4 p-4 md:p-0 mt-3  md:mt-0 ">
    <div className="mt-3  md:mt-0 md:w-6/6  ">
                    <label class="block">
                     <span class="bg-transparent p-0 after:ml-0.5 after:text-red-500 block text-black text-sm w-3/6 font-medium  ">
                        Customer/Company
                    </span>
                <input type="Text" name="email" class="mt-1 px-3 py-3 bg-white  shadow-sm border border-yellow-400 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Spleet Limited" />
                </label>
            </div>

        <aside className="md:grid md:grid-cols-2 md:w-6/6 mt-3 md:mt-0 gap-4">
            <div className="mt-3 md:mt-0 ">
                    <label class="block">
                     <span class="bg-transparent p-0  after:ml-0.5 after:text-red-500 text-black block text-sm w-5/6 font-medium ">
                            Email address
                    </span>
                <input type="email" name="email" class="mt-1 px-3 py-3 bg-white border border-yellow-600 shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                </label>
            </div>
            <div className="mt-3">
                <label class="block">
                <span class="bg-transparent p-0  after:ml-0.5 after:text-red-500 block text-black text-sm w-5/6 font-medium ">
                    Phone number
                </span>
            <input type="text" name="email" class="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="08102034565" />
            </label>
            </div>
    </aside>
    <div className="mt-4  md:mt-0 md:w-6/6 ">
                    <label class="block">
                     <span class="bg-transparent p-0  after:ml-0.5 after:text-red-500 block text-black text-sm w-5/6 font-medium ">
                            Home Building Address
                    </span>
                <input type="email" name="email" class="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                </label>
            </div>
</section>

<section className="bg-white md:grid md:items-center md:justify-center p-4 mt-3 ">
    <div className="mt-3 md:w-6/6  ">
                    <label class="block">
                     <span class="bg-transparent p-0 after:ml-0.5 after:text-red-500 block text-black text-sm w-3/6 font-medium  ">
                        Customer/Company
                    </span>
                    <input type="Text" name="email" class="mt-1 px-3 py-3 bg-white  shadow-sm border border-yellow-400 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Spleet Limited" />
                </label>
            </div>  

        <aside className="md:grid md:grid-cols-2 md:w-6/6 mt-3 gap-4">
            <div className="mt-4 ">
                    <label class="block">
                     <span class="bg-transparent p-0  after:ml-0.5 after:text-red-500 text-black block text-sm w-5/6 font-medium ">
                            Email address
                    </span>
                <input type="email" name="email" class="mt-1 px-3 py-3 bg-white border border-blue-600 shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
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
      
</section>

</div>
<section className="md:w-6/6 md:p-0 sm:p-1 mx-20 mt-1 md: mt-0 grid mb-4 md:grid-cols-2 ">
    <div></div>
            <div className="grid grid-cols-2 gap-4 md:col-span-1 ">
            <button className="border-blue-600 rounded  hover:bg-blue-700 hover:text-white btn  sm:p-2 text-blue-600">CANCEL</button>
            <button className="btn rounded  sm:p-2 bg-yellow-500 hover:bg-yellow-700 text-white">CREATE INVOICE</button>
            </div>
        
</section>
        </>
    );
}
export default Schedule;