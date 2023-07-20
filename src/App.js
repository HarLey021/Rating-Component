import { useState } from "react";
import RatingCard from "./components/Rating";
import ThanksCard from "./components/Thanks";

function App() {
  const [showRatingCard, setShowRatingCard] = useState(true);
  const [showThanksCard, setShowThanksCard] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);
  return (
    <>
      <RatingCard
        showRatingCard={showRatingCard}
        showThanksCard={showThanksCard}
        selectedRating={selectedRating}
        setShowRatingCard={setShowRatingCard}
        setShowThanksCard={setShowThanksCard}
        setSelectedRating={setSelectedRating}
      />
    </>
  );
}

export default App;
