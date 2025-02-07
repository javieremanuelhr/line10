import { react } from "react-dom";
import { useState } from "react";
import '../../index.css'
import Prodn from "./prodn";
import Jumbo from "./jumbo";
import OutputA from "./outputA";
import OutputB from "./outputB";
import OutputC from "./outputC";

function Supervisor() {



  return (
    <div className="bg-[#ffffff] h-screen flex flex-col p-4 gap-4 font-[montserrat] ">
      <div className="text-[#0f1214] text-2xl font-semibold">
        <h1>Supervisor</h1>
      </div>

      <div className="overflow-x-auto p-4 bg-[#0f1214] rounded-lg h-screen flex flex-col gap-4 text-white">
        {/*Date*/}
        <div className="bg-slate-800 rounded-lg w-full h-1/8 flex items-center justify-center p-4 border border-slate-400">
          <div className="w-full h-full bg-teal-400 rounded-lg text text-black font-semibold flex justify-center items-center">
            DATE: MM/DD/YYYY
          </div>
        </div>
        
        {/*Prodn&MaterialConsumption*/}
        <div className="flex flex-col gap-4 lg:flex-row">
        <div className="bg-slate-800 rounded-lg w-full h-full flex flex-col items-center justify-center p-4 border border-slate-400">
          <div className="pb-4">Prodn & Material Consumption</div>
          <div className="w-full">
            <Prodn />
          </div>
        </div>

{/*//////////////////////////////////////////////////////////////////////*/}

        {/*Calculator*/}
        <div className="bg-slate-800 rounded-lg w-full h-full flex flex-col items-center justify-center p-4 border gap-4 border-slate-400">
          <div>ERP Jumbo Fast Calculator</div>
          <Jumbo />
        </div>
        </div>
        <div className="bg-slate-800 rounded-lg w-full flex items-center justify-center p-4 border border-slate-400 flex-col gap-4">
          <div className="">Recipe & Throughput</div> {/* Add padding to title */}
          <div className="w-full gap-4 flex flex-col overflow-auto md:flex-row"> {/* Use overflow-auto */}
            <OutputA />
            <OutputB />
            <OutputC />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Supervisor;
