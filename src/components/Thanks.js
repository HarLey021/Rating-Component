import "./Thanks.css";
import illustration from "./images/illustration-thank-you.svg";

export default function ThanksCard({ selectedRating }) {
  return (
    <div className="thanks-card-container">
      <div className="client-rate">
        <img className="illustration" src={illustration} />
        <div className="rated">
          <p className="rated-value-p">
            You selected {selectedRating} out of 5
          </p>
        </div>
      </div>
      <div className="thanks-container">
        <h1 className="thanks-h1">Thank you!</h1>
        <p className="thanks-p">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
