function Options({ question, dispatch, ans }) {
  const hasAnswer = ans !== null;
  return (
    <div className="options">
      {question.options.map((option, indx) => {
        return (
          <button
            onClick={() => dispatch({ type: "newAnswer", payLoad: indx })}
            className={`btn btn-option ${indx === ans ? "answer" : ""}
            ${
              hasAnswer
                ? indx === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }
            `}
            disabled={hasAnswer}
            key={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
