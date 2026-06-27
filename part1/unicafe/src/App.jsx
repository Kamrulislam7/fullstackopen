import { useState } from "react";

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

  return (
    <div>
      <h1>Give feedback</h1>

      <button onClick={handelGood}>good</button>
      <button onClick={handelNeutral}>neutral</button>
      <button onClick={handelBad}>bad</button>
      <h2>Statistics</h2>
      <p>
        good{good} neutral{neutral} bad {bad}
      </p>
    </div>
  );
};

export default App;
