import "./NewToJob.css";
import register from "../../assets/register.png";

export default function NewToJob() {
  const features = [
    "One click apply using job profile.",
    "Get relevant job recommendations.",
    "Showcase profile to top companies and consultants.",
    "Know application status on applied jobs.",
  ];
  return (
    <div className="job-feature-container">
      <h4 className="login-heading">Login</h4>
      <div className="feature-list">
        {features.map((feature, index) => (
          <p key={index}>
            <i className="fa-solid fa-check" style={{ color: "#4B8FE2" }} />
            <span className="feature">{feature}</span>
          </p>
        ))}
      </div>
      <div className="image-section">
        <img src={register} alt="register" />
      </div>
    </div>
  );
}
