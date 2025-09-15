import { useEffect, useState } from "react";

export default function SubmissionList({ onSelect }) {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/submissions")
      .then((res) => res.json())
      .then(setSubmissions);
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {submissions.map((s) => (
        <div
          key={s.id}
          className="p-4 bg-white shadow rounded-xl border hover:shadow-lg cursor-pointer transition"
          onClick={() => onSelect(s.id)}
        >
          <h2 className="text-lg font-bold">{s.title}</h2>
          <p className="text-sm text-gray-600">{s.abstract}</p>
          <p className="mt-2 text-xs">
            <span
              className={`px-2 py-1 rounded ${
                s.status === "accepted"
                  ? "bg-green-100 text-green-700"
                  : s.status === "rejected"
                  ? "bg-red-100 text-red-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {s.status}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
