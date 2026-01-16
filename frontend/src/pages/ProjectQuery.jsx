import { useParams } from "react-router-dom";
import { useState } from "react";
import { queryProject } from "../api/api";

const ProjectQuery = () => {
  // ✅ MUST MATCH ROUTE PARAM NAME
  const { projectId } = useParams();

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askQuestion = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await queryProject(
        projectId,
        { question },
        token
      );

      setAnswer(res.data.answer);
    } catch (err) {
      console.error("Query failed:", err);
      alert("Failed to get answer");
    }
  };



  return (
    <div className="container mt-4">
      <h4>Ask about this repository</h4>

      <textarea
        className="form-control mb-2"
        placeholder="Ask a question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button className="btn btn-success" onClick={askQuestion}>
        Ask
      </button>

      {answer && (
        <div className="alert alert-info mt-3">
          <strong>Answer:</strong>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectQuery;
