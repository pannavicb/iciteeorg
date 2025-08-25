import { useState, useEffect } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem("visitorCount");
    if (storedCount) {
      setCount(parseInt(storedCount, 10));
    }
    setCount(prevCount => {
      const newCount = prevCount + 1;
      localStorage.setItem("visitorCount", newCount);
      return newCount;
    });
  }, []);

  return (
    <div className="center-container">
      <div className="visitor-counter">
        <h4></h4>       
      </div>
    </div>
  );
}
