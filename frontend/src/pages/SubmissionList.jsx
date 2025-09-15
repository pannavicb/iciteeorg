import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SubmissionList() {
  const [subs, setSubs] = useState([]);
  const [form, setForm] = useState({
    authorId: 1,
    title: "",
    abstract: "",
    content: "",
  });

  useEffect(() => {
    fetchList();
  }, []);

  async function fetchList() {
    const res = await fetch("http://localhost:4000/api/submissions");
    const data = await res.json();
    setSubs(data);
  }

  async function submit(e) {
    e.preventDefault();
    await fetch("http://localhost:4000/api/submissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ authorId: 1, title: "", abstract: "", content: "" });
    fetchList();
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Submissions</h2>
      <ul className="mb-6">
        {subs.map((s) => (
          <li key={s.id} className="mb-2 p-2 border rounded">
            <Link to={`/submission/${s.id}`} className="text-blue-600">
              {s.title}
            </Link>
            <div className="text-sm text-gray-600">
              Status: {s.status}
            </div>
          </li>
        ))}
      </ul>

      <h3 className="font-semibold mb-2">New Submission</h3>
      <form onSubmit={submit} className="space-y-2">
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="block w-full p-2 border"
        />
        <textarea
          placeholder="Abstract"
          value={form.abstract}
          onChange={(e) => setForm({ ...form, abstract: e.target.value })}
          className="block w-full p-2 border"
        />
        <textarea
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className="block w-full p-2 border h-32"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded bg-blue-600 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
