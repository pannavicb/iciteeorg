import { useEffect, useState } from "react";
import axios from "axios";
import '../css/VisitorInfo.css'; // นำเข้าไฟล์ CSS

const API_BASE_URL = process.env.REACT_APP_API_URL || "https://icitee2025.it.kmitl.ac.th";

export default function VisitorCounter3() {
  const [totalVisitors, setTotalVisitors] = useState(0);
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVisitorData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/visitor`);
      setTotalVisitors(response.data.count || 0);
      
      // Fetch top 10 countries with the most visitors
      const sortedData = response.data.countryData
        ?.filter((c) => c.name && c.count)
        .sort((a, b) => b.count - a.count)
        .slice(0, 100) || [];

      setCountryData(sortedData);
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
        const country = ipResponse.data.country || "Unknown";

        await axios.post(`${API_BASE_URL}/api/visitor`, { country });
        fetchVisitorData();
      } catch (error) {
        console.error("Error registering visitor:", error);
      }
    };

    registerVisitor();
  }, []);

  return (
    
    <div className="visitor-container p-6 max-w-xl mx-auto">      
      <h4 className="visitor-header text-4xl font-extrabold text-center mb-4">🌍 Visitor Counter</h4>
      {loading ? (
        <p className="visitor-loading-text text-center">Loading...</p>
      ) : (
        <>
          <p className="visitor-total-count">
            <span className="text-4xl bg-gradient-to-r from-purple-500 to-white text-transparent bg-clip-text">
              {totalVisitors.toLocaleString()}
            </span>{" "}
            total visitors
          </p>

          <div className="visitor-card-container mt-6">
            <p className="thank-you-text">Thank you for visiting our site!</p>

            <div className="visitor-grid-container mt-4">
              {countryData.length > 0 ? (
                countryData.map((item, index) => (
                  <div key={index} className="visitor-card">
                    <img
                      src={`https://flagcdn.com/w40/${item.name.toLowerCase()}.png`}
                      alt={item.name}
                    />
                    <p className="country-name">{item.name}</p>
                    <p className="visitor-count">{item.count.toLocaleString()} </p>
                  </div>
                ))
              ) : (
                <p className="visitor-no-data">No data available</p>
              )}
            </div>
          </div>
        </>
      )}
      <h4></h4>
    </div>
  );
}
