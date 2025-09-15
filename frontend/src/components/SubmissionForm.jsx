import { useState } from "react";

export default function SubmissionForm({ onDone }) {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [content, setContent] = useState("");

  const submitSubmission = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:4000/api/submissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        authorId: 1, // mock author
        title,
        abstract,
        content,
      }),
    });
    setTitle("");
    setAbstract("");
    setContent("");
    alert("Submission added!");
    onDone();
  };

  return (
    <form
      onSubmit={submitSubmission}
      className="p-4 bg-white rounded-xl shadow mb-4"
    >
      <h2 className="text-lg font-bold">New Submission</h2>
      <div className="mt-2">
        <label className="block text-sm">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded px-2 py-1 w-full"
        />
      </div>
      <div className="mt-2">
        <label className="block text-sm">Abstract</label>
        <textarea
          value={abstract}
          onChange={(e) => setAbstract(e.target.value)}
          className="border rounded px-2 py-1 w-full"
        />
      </div>
      <div className="mt-2">
        <label className="block text-sm">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border rounded px-2 py-1 w-full"
        />
      </div>
      <button
        type="submit"
        className="mt-3 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Submit Paper
      </button>
    </form>
  );
}
