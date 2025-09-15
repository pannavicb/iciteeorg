import { useState } from "react";

export default function ReviewForm({ submissionId }) {
  const [score, setScore] = useState(3);
  const [comment, setComment] = useState("");

  const submitReview = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:4000/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        submissionId,
        reviewerId: 2, // mock reviewer
        score,
        comment,
        isPublic: true,
      }),
    });
    setScore(3);
    setComment("");
    alert("Review submitted!");
  };

  return (
    <form onSubmit={submitReview} className="mt-4 p-3 border rounded-xl">
      <h4 className="font-semibold">Add Review</h4>
      <div className="mt-2">
        <label className="block text-sm">Score</label>
        <input
          type="number"
          value={score}
          min="1"
          max="5"
          onChange={(e) => setScore(e.target.value)}
          className="border rounded px-2 py-1 w-20"
        />
      </div>
      <div className="mt-2">
        <label className="block text-sm">Comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border rounded px-2 py-1 w-full"
        />
      </div>
      <button
        type="submit"
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit Review
      </button>
    </form>
  );
}
