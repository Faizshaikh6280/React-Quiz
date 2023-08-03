function Progress({ index, numsQuestion, points, maxPoints, ans }) {
  return (
    <header className="progress">
      <progress
        max={numsQuestion - 1}
        value={index + Number(ans !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong>/{numsQuestion}
      </p>
      <p>
        <strong>{points}</strong>/{maxPoints}
      </p>
    </header>
  );
}

export default Progress;
