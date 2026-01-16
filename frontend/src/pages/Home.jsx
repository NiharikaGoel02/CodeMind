import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div className="bg-dark text-light py-5">
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold mb-3">
            CodeMind <span className="text-primary">AI</span>
          </h1>
          <p className="lead mb-4">
            Understand, explore, and query your GitHub repositories using AI.
            <br />
            Turn codebases into conversations.
          </p>

          <div className="d-flex justify-content-center gap-3 mt-4">
            <Link to="/register" className="btn btn-primary btn-lg px-4">
              Get Started
            </Link>
            <Link to="/login" className="btn btn-outline-light btn-lg px-4">
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="container my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Why CodeMind?</h2>
          <p className="text-muted">
            Built for developers who want clarity, speed, and intelligence.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">🔗 GitHub Integration</h5>
                <p className="card-text text-muted">
                  Paste your GitHub repository and let CodeMind analyze the
                  entire codebase automatically.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">🧠 AI-Powered Queries</h5>
                <p className="card-text text-muted">
                  Ask questions in plain English and get answers grounded
                  strictly in your repository.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">⚡ Developer First</h5>
                <p className="card-text text-muted">
                  Built with MERN + Gemini AI, optimized for real-world
                  developer workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-light py-4 mt-5">
        <div className="container text-center">
          <p className="mb-0 text-muted">
            © {new Date().getFullYear()} CodeMind AI · Built for Developers
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
