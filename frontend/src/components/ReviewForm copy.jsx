import React, { useState } from "react";

export default function ReviewForm({ submissionId, onPosted }) {
  const [form, setForm] = useState({
    reviewerId: 2,
    score: 5,
    comment: "",
    isPublic: true,
  });

  async function submit(e) {
    e.preventDefault();
    await fetch("http://localhost:5000/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ submissionId: Number(submissionId), ...form }),
    });
    setForm({ ...form, comment: "" });
    onPosted?.();
  }

  return (
    <form onSubmit={submit} className="mt-3 space-y-2">
      <div>
        <label className="block text-sm">Score</label>
        <input
          type="number"
          value={form.score}
          onChange={(e) =>
            setForm({ ...form, score: Number(e.target.value) })
          }
          className="p-1 border"
        />
      </div>
      <div>
        <label className="block text-sm">Comment</label>
        <textarea
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
          className="w-full p-2 border"
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={form.isPublic}
            onChange={(e) => setForm({ ...form, isPublic: e.target.checked })}
          />{" "}
          Public
        </label>
      </div>
      <button
        type="submit"
        className="px-3 py-1 rounded bg-green-600 text-white"
      >
        Post Review
      </button>
    </form>
  );
}
