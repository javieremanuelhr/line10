import { react } from "react-dom";
import '../../index.css'

function Supervisor() {
  return (
    <div className="bg-[#ffffff] h-screen flex flex-col p-4 gap-4 font-[montserrat] ">
      <div className="text-[#0f1214] text-2xl font-semibold">
        <h1>Supervisor</h1>
      </div>

      <div className="overflow-x-auto p-4 bg-[#0f1214] rounded-lg h-screen flex flex-col gap-4 text-white">
        
        <div className="bg-slate-800 rounded-lg w-full h-full flex items-center justify-center p-4 border border-slate-400">
          <table className="w-full border-separate border-spacing-2 bg-purple-800 rounded-lg ">
            <thead>
              <tr>
                <th className="w-1/4">Shift</th>
                <th className="w-1/4">A</th>
                <th className="w-1/4">B</th>
                <th className="w-1/4">C</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <th className="w-1/4">RGG</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr><th className="w-1/4">MG</th></tr>
              <tr><th className="w-1/4">Recron</th></tr>
              <tr><th className="w-1/4">Garden</th></tr>
              <tr><th className="w-1/4">Chinese</th></tr>
              <tr><th className="w-1/4">PCR</th></tr>
              <tr><th className="w-1/4">RGGPCR</th></tr>
              <tr><th className="w-1/4">RGGMat</th></tr>
            </tbody>
          </table>
        </div>
        <div className="bg-slate-800 rounded-lg w-full h-full flex items-center justify-center p-4 border border-slate-400">
          b
        </div>

      </div>
    </div>
  );
}

export default Supervisor;
