import { useState } from "react";

export default function ImportCSV() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!file) return alert("Please select a CSV file");

    const fd = new FormData();
    fd.append("file", file);

    const res = await fetch("http://localhost:4000/api/import-csv", {
      method: "POST",
      body: fd,
    });

    const data = await res.json();
    setResult(data);
  }

  return (
    <div className="container">
      <h2>Import CSV</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".csv"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <br />
        <button type="submit">Upload</button>
      </form>

      {result && (
        <div className="card" style={{ marginTop: 16 }}>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
