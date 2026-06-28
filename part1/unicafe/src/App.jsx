import { useState } from "react";

const Statistics = ({ good, bad, neutral, total }) => {
  return (
    <>
      good{good} neutral{neutral} bad {bad}
      <p>
        All {total}
        Average {(good + -bad) / total}
        positive:{(good / total) * 100}
      </p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handelGood = () => {
    const newGood = good + 1;
    setGood(newGood);
  };

  const handelNeutral = () => {
    const newNeutreal = neutral + 1;
    setNeutral(newNeutreal);
  };
  const handelBad = () => {
    const newBad = bad + 1;
    setBad(newBad);
  };

  const total = good + neutral + bad;

  return (
    <div>
      <h1>Give feedback</h1>

      <button onClick={handelGood}>good</button>
      <button onClick={handelNeutral}>neutral</button>
      <button onClick={handelBad}>bad</button>
      <h2>Statistics</h2>

      {good || bad || neutral ? (
        <Statistics good={good} bad={bad} neutral={neutral} total={total} />
      ) : (
        "no feedback given"
      )}
    </div>
  );
};

export default App;
