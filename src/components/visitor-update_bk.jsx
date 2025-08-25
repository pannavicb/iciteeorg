import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "https://icitee2025.it.kmitl.ac.th";

export default function VisitorCounter() {
  const [totalVisitors, setTotalVisitors] = useState(0);
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVisitorData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/visitor`);
      setTotalVisitors(response.data.count || 0);

      const sortedCountryData = response.data.countryData
        .filter((c) => c.name && c.count) // กรองข้อมูลที่ไม่มีชื่อประเทศ
        .sort((a, b) => b.count - a.count)
        .slice(0, 10); // เอาเฉพาะ 5 อันดับแรก เปลี่ยนเป็น 10 ลำดับ วันที่ 25 มีค 68

      setCountryData(sortedCountryData);
    } catch (error) {
      console.error("Error fetching visitor data:", error);
    }
  };

  useEffect(() => {
    const registerVisitor = async () => {
      try {
        const ipResponse = await axios.get("https://ipinfo.io/json?token=a999487011bb0b");
        const country = ipResponse.data.country || "Unknown";
        await axios.post(`${API_BASE_URL}/api/visitor`, { country });
        await fetchVisitorData();
      } catch (error) {
        console.error("Error registering visitor:", error);
      } finally {
        setLoading(false);
      }
    };

    registerVisitor();
  }, []);

  return (
    <div className="container p-6 max-w-xl mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-lg text-white flex flex-col items-center">
      <h4 className="text-3xl font-extrabold text-center mb-4">🌍 Visitor Counter</h4>

      {loading ? (
        <p className="text-center text-lg font-semibold">Loading...</p>
      ) : (
        <>
          <p className="text-lg font-semibold text-center mb-4">
            <span className="text-4xl bg-gradient-to-r from-purple-500 to-white text-transparent bg-clip-text">
              {totalVisitors.toLocaleString()}
            </span>{" "}
            total visitors
          </p>

          {/* ตารางแสดงข้อมูล 5 อันดับแรก */}
          <div className="content-layout">

                    
          
          <div className="flex justify-center mt-4">

  {/* <table className="border-collapse border border-gray-300 bg-white text-black">
    <tbody>
      <tr>
        {countryData.map((country, index) => (
          <td key={index} className="border border-gray-300 px-4 py-2 text-center">
            <img
              src={`https://flagcdn.com/w40/${country.name.toLowerCase()}.png`}
              alt={country.name}
              className="width='20' height='12' object-cover mx-auto"
              onError={(e) => (e.target.style.display = 'none')}
            />
          </td>
        ))}
      </tr>
      <tr>
        {countryData.map((country, index) => (
          <td key={index} className="border border-gray-300 px-4 py-2 text-lg font-semibold text-center">
            {country.count}
          </td>
        ))}
      </tr>
    </tbody>
  </table> */}
  <div className="overflow-x-auto">
  <table className="w-full border-collapse border border-gray-300 bg-white text-black min-w-[300px]">
    <tbody>
      <tr>
        {countryData.map((country, index) => (
          <td key={index} className="border border-gray-300 px-4 py-2 text-center">
            <img
              src={`https://flagcdn.com/w40/${country.name.toLowerCase()}.png`}
              alt={country.name}
              className="w-10 h-auto object-cover mx-auto"
              onError={(e) => (e.target.style.display = 'none')}
            />
          </td>
        ))}
      </tr>
      <tr>
        {countryData.map((country, index) => (
          <td key={index} className="border border-gray-300 px-4 py-2 text-lg font-semibold text-center">
            {country.count}
          </td>
        ))}
      </tr>
    </tbody>
  </table>
</div>


</div>



</div>


        
        </>
      )}
    </div>
  );
}
