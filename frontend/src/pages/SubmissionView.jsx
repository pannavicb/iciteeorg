import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";

export default function SubmissionView() {
  const { id } = useParams();
  const [submission, setSubmission] = useState(null);

  useEffect(() => {
    fetchOne();
  }, [id]);

  async function fetchOne() {
    const res = await fetch(`http://localhost5000/api/submissions/${id}`);
    const data = await res.json();
    setSubmission(data);
  }

  async function postStatus(status) {
    await fetch(`http://localhost:5000/api/submissions/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    fetchOne();
  }

  if (!submission) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-xl font-bold">{submission.title}</h2>
      <div className="text-sm text-gray-600">
        Author: {submission.author?.name || "Unknown"}
      </div>
      <p className="mt-4 whitespace-pre-wrap">{submission.content}</p>

      <div className="mt-6">
        <h3 className="font-semibold">Reviews</h3>
        <ul>
          {submission.reviews.map((r) => (
            <li key={r.id} className="mb-3 border p-2 rounded">
              <div className="text-sm text-gray-700">
                Reviewer: {r.reviewer?.name || "Unknown"}
              </div>
              <div>Score: {r.score ?? "-"}</div>
              <div className="mt-1">{r.comment}</div>
            </li>
          ))}
        </ul>

        <ReviewForm submissionId={id} onPosted={fetchOne} />

        <div className="mt-4 space-x-2">
          <button
            onClick={() => postStatus("under_review")}
            className="px-3 py-1 border rounded"
          >
            Set Under Review
          </button>
          <button
            onClick={() => postStatus("accepted")}
            className="px-3 py-1 border rounded bg-green-200"
          >
            Accept
          </button>
          <button
            onClick={() => postStatus("rejected")}
            className="px-3 py-1 border rounded bg-red-200"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
