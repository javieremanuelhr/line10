import { react } from "react-dom";

function Supervisor () {
    return(
        <div className="bg-[#ffffff] h-screen screen flex flex-col p-4">
        <div className="text-[#0f1214] text-2xl font-bold">
            <h1>Supervisor</h1>
        </div>

    <div className="overflow-x-auto p-4">
      <table className="w-full border border-black text-sm text-center">
        <thead>
          <tr className="bg-gray-400 text-black font-bold">
            <th className="border border-black p-2" colSpan="2">SHIFT PRODUCTION REPORT - Main line</th>
            <th className="border border-black p-2">Shift A</th>
            <th className="border border-black p-2">Shift B</th>
            <th className="border border-black p-2">Shift C</th>
            <th className="border border-black p-2">DAY</th>
          </tr>
          <tr className="bg-gray-300 font-semibold">
            <th className="border border-black p-2" colSpan="2">SUPERVISOR</th>
            <th className="border border-black p-2">JAVIER | GERARDO</th>
            <th className="border border-black p-2">JAVIER</th>
            <th className="border border-black p-2">FCO | EDUARDO</th>
            <th className="border border-black p-2"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-200 font-bold">
            <td className="border border-black p-2" colSpan="2">Raw material consumption (kg)</td>
            <td className="border border-black p-2"></td>
            <td className="border border-black p-2"></td>
            <td className="border border-black p-2"></td>
            <td className="border border-black p-2"></td>
          </tr>
          {[
            ["GARDEN / FULLBRIGHT / INDORAMA", 3358, 4800, 4544, 12702],
            ["MG", 16330, 21457, 18595, 56381],
            ["RGG", 9476, 12578, 10900, 32954],
            ["R6", 2262, 2960, 2565, 7787],
            ["PCR", 0, 0, 0, 0]
          ].map(([name, a, b, c, day], i) => (
            <tr key={i} className="bg-pink-100">
              <td className="border border-black p-2" colSpan="2">{name}</td>
              <td className="border border-black p-2">{a}</td>
              <td className="border border-black p-2">{b}</td>
              <td className="border border-black p-2">{c}</td>
              <td className="border border-black p-2">{day}</td>
            </tr>
          ))}
          <tr className="bg-gray-200 font-bold">
            <td className="border border-black p-2" colSpan="2">Total of Raw material consumption (kg)</td>
            <td className="border border-black p-2">31,426</td>
            <td className="border border-black p-2">41,794</td>
            <td className="border border-black p-2">36,604</td>
            <td className="border border-black p-2">109,824</td>
          </tr>
          {[
            ["Jumbo Production for Stand (good quality) (kg)", 35131, 35873, 27510, 98514, "text-blue-600 bg-yellow-300"],
            ["Film For Recycle (Silo Erema) (kg) (F-Rec)", -3705, 5921, 9094, 11310, "text-red-600"],
            ["Production Efficiency (%)", "112%", "86%", "75%", "89.70%", "text-green-600"],
            ["Down time (minutes)", 22, 0, 106, 128, "text-red-600"],
            ["Production loss time (minutes)", 0, 0, 0, 0, "text-blue-600"],
            ["DT+PLT", 86, 0, 0, 86, "bg-yellow-300"]
          ].map(([label, a, b, c, day, color], i) => (
            <tr key={i} className={color}>
              <td className="border border-black p-2 font-bold" colSpan="2">{label}</td>
              <td className="border border-black p-2">{a}</td>
              <td className="border border-black p-2">{b}</td>
              <td className="border border-black p-2">{c}</td>
              <td className="border border-black p-2">{day}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


        </div>
    )
}

export default Supervisor