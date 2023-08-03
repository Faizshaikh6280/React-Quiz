import Options from "./Options";

function Question({ question, dispatch, ans }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options dispatch={dispatch} ans={ans} question={question} />
    </div>
  );
}

export default Question;
