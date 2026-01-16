import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProject } from "../api/api";

const Dashboard = () => {
  const [repoUrl, setRepoUrl] = useState("");
  const navigate = useNavigate();

  const handleCreateProject = async () => {
    try {
      const token = localStorage.getItem("token"); // 🔑 JWT

      const res = await createProject(
        { repoUrl }, // body
        token        // auth header
      );

      // ✅ projectId is returned ONLY here
      const projectId = res.data.projectId || res.data._id;

      if (!projectId) {
        alert("Project ID not returned from backend");
        return;
      }

      // 👉 move to query page
      navigate(`/project/${projectId}`);
    } catch (err) {
      console.error("Create project failed:", err);
      alert("Failed to create project");
    }
  };

  return (
    <div className="container mt-4">
      <input
        className="form-control mb-2"
        placeholder="GitHub repo URL"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleCreateProject}>
        Create Project
      </button>
    </div>
  );
};

export default Dashboard;
