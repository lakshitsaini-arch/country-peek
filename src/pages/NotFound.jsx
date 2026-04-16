import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <p>The page you’re looking for doesn’t exist or has been moved.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default NotFound;
