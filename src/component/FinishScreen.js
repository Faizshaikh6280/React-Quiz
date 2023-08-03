function FinishScreen({ points, maxPoints, highScore, dispatch }) {
  const percentage = (points / maxPoints) * 100;
  let emoji;

  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🤗";
  if (percentage >= 60 && percentage < 80) emoji = "😃";
  if (percentage >= 20 && percentage < 60) emoji = "🤔";
  if (percentage < 20) emoji = "🤦‍♂️";

  return (
    <div className="result">
      <>
        <p>
          {emoji} You scored <strong>{points}</strong> out of {maxPoints} (
          {Math.ceil(percentage)})%
        </p>
        <p className="highscore">High score is {highScore} points.</p>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "restart" })}
        >
          Restart Quiz
        </button>
      </>
    </div>
  );
}

export default FinishScreen;
