import { useEffect, useState } from "react";
import ReviewForm from "./ReviewForm";

export default function SubmissionView({ id, onBack }) {
  const [submission, setSubmission] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/api/submissions/${id}`)
      .then((res) => res.json())
      .then(setSubmission);
  }, [id]);

  const updateStatus = async (status) => {
    await fetch(`http://localhost:4000/api/submissions/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    setSubmission({ ...submission, status });
  };

  if (!submission) return <p>Loading...</p>;

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <button
        className="mb-3 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        onClick={onBack}
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold">{submission.title}</h2>
      <p className="text-gray-600">{submission.abstract}</p>
      <p className="mt-2 text-sm text-gray-500">
        Author: {submission.author?.name}
      </p>
      <p className="mt-2">
        Status:{" "}
        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded">
          {submission.status}
        </span>
      </p>

      <div className="flex gap-2 mt-3">
        <button
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => updateStatus("accepted")}
        >
          Accept
        </button>
        <button
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => updateStatus("rejected")}
        >
          Reject
        </button>
        <button
          className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          onClick={() => updateStatus("under_review")}
        >
          Under Review
        </button>
      </div>

      <h3 className="mt-5 text-lg font-semibold">Reviews</h3>
      <ul className="list-disc pl-6">
        {submission.reviews?.map((r) => (
          <li key={r.id} className="mt-2">
            <p>
              <span className="font-semibold">{r.reviewer?.name}</span> (Score:{" "}
              {r.score})
            </p>
            <p className="text-gray-600">{r.comment}</p>
          </li>
        ))}
      </ul>

      <ReviewForm submissionId={id} />
    </div>
  );
}
