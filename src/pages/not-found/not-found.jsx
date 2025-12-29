import { useNavigate } from "react-router-dom";
import errorImg from "../../assets/error.jpg"
import "./not-found.scss";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div>
        <img className="error-image" src={errorImg} alt="404" />
      <button onClick={() => navigate("/")} className="error-btn">
        Go Home
      </button>
      </div>
    </div>
  );
};

export default NotFound;
