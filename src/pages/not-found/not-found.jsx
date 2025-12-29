import { useNavigate } from "react-router-dom";
import "./not-found.scss";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Sorry, the page you are looking for does not exist.</p>

      <button onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
