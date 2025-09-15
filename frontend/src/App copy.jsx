import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SubmissionList from "./pages/SubmissionList";
import SubmissionView from "./pages/SubmissionView";

export default function App() {
  return (
    <BrowserRouter>
      <div className="p-4">
        <header className="mb-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            OpenReview Demo
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<SubmissionList />} />
          <Route path="/submission/:id" element={<SubmissionView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
