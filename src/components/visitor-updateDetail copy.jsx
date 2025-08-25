import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://icitee2025.it.kmitl.ac.th:5000";

export default function VisitorCounter2() {
  const [totalVisitors, setTotalVisitors] = useState(0);
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVisitorData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/visitor`);
      setTotalVisitors(response.data.count || 0);
      setCountryData(response.data.countryData || []);
    } catch (error) {
      console.error("Error fetching visitor data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const registerVisitor = async () => {
      try {
        const ipResponse = await axios.get("https://ipinfo.io/json?token=a999487011bb0b");
        const country = ipResponse.data.country;

        await axios.post(`${API_BASE_URL}/api/visitor`, { country });
        fetchVisitorData(); // อัปเดตข้อมูลหลังจากบันทึกสำเร็จ
      } catch (error) {
        console.error("Error registering visitor:", error);
      }
    };

    registerVisitor();
  }, []);

  return (
    <div className="container p-6 max-w-xl mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-lg text-white">
      <h4 className="text-3xl font-extrabold text-center mb-4">🌍 Visitor Counter</h4>

      {loading ? (
        <p className="text-center text-lg font-semibold">Loading...</p>
      ) : (
        <>
          <p className="text-lg font-semibold text-center">
            <span className="text-4xl bg-gradient-to-r from-purple-500 to-white text-transparent bg-clip-text">
              {totalVisitors.toLocaleString()}
            </span>{" "}
            total visitors
          </p>

          <div className="mt-6 p-4 bg-white text-gray-800 rounded-lg shadow-md">
            <p className="text-center text-xl font-medium">Thank you for visiting our site!</p>

            <div className="mt-4">
              <h5 className="text-center font-bold">🌏 Visitors by Country</h5>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border border-gray-300 mt-4">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-4 py-2">Country</th>
                      <th className="px-4 py-2 text-right">Visitors</th>
                    </tr>
                  </thead>
                  <tbody>
                    {countryData.length > 0 ? (
                      countryData.map((item, index) => (
                        <tr key={index} className="border-t">
                          <td className="px-4 py-2">{item.name}</td>
                          <td className="px-4 py-2 text-right">{item.count.toLocaleString()}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="2" className="text-center py-4">No data available</td>
                      </tr>
                    )}
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
