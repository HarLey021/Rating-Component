import "./Rating.css";
import ThanksCard from "./Thanks";
import starImage from "./images/icon-star.svg";

export default function RatingCard({
  showRatingCard,
  showThanksCard,
  selectedRating,
  setShowRatingCard,
  setShowThanksCard,
  setSelectedRating,
}) {
  //This function initializes rating value based on the clicked rating button.
  function handleRateButtonClick(rating) {
    setSelectedRating(rating);
  }

  //This function changes the visibility of RatingCard and ThanksCard.
  function viewCard() {
    setShowRatingCard(false);
    setShowThanksCard(true);
  }
  return (
    <>
      {showRatingCard && (
        <div className="rate-card-container">
          <div className="star-logo">
            <img className="star" src={starImage} />
          </div>
          <div className="container">
            <h1 className="rate-h1">How did we do?</h1>
            <p className="main-p">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <div className="rate-container">
              <button
                className={`rate-btn ${selectedRating === 1 ? "selected" : ""}`} //Adding "selected" className, when this button is clicked and equalizes Rating value to the value of selecteded button
                onClick={() => handleRateButtonClick(1)}
              >
                <p className="rate-p">1</p>
              </button>

              <button
                className={`rate-btn ${selectedRating === 2 ? "selected" : ""}`} //Adding "selected" className, when this button is clicked and equalizes Rating value to the value of selecteded button
                onClick={() => handleRateButtonClick(2)}
              >
                <p className="rate-p">2</p>
              </button>

              <button
                className={`rate-btn ${selectedRating === 3 ? "selected" : ""}`} //Adding "selected" className, when this button is clicked and equalizes Rating value to the value of selecteded button
                onClick={() => handleRateButtonClick(3)}
              >
                <p className="rate-p">3</p>
              </button>

              <button
                className={`rate-btn ${selectedRating === 4 ? "selected" : ""}`} //Adding "selected" className, when this button is clicked and equalizes Rating value to the value of selecteded button
                onClick={() => handleRateButtonClick(4)}
              >
                <p className="rate-p">4</p>
              </button>

              <button
                className={`rate-btn ${selectedRating === 5 ? "selected" : ""}`} //Adding "selected" className, when this button is clicked and equalizes Rating value to the value of selecteded button
                onClick={() => handleRateButtonClick(5)}
              >
                <p className="rate-p">5</p>
              </button>
            </div>
            <button onClick={viewCard} className="submit-btn">
              <p className="submit-p">SUBMIT</p>
            </button>
          </div>
        </div>
      )}
      {showThanksCard && <ThanksCard selectedRating={selectedRating} />}
    </>
  );
}
