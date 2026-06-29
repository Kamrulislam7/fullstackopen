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

  const total = good + neutral + bad;

  return (
    <div>
      <h1>Give feedback</h1>

      <Button onClick={handelGood} text="good" />
      <Button onClick={handelNeutral} text="neutral" />
      <Button onClick={handelBad} text="bad" />
      <h2>Statistics</h2>

      {good || bad || neutral ? (
        <Statistics good={good} bad={bad} neutral={neutral} total={total} />
      ) : (
        "no feedback given"
      )}
    </div>
  );
};

const Statistics = ({ good, bad, neutral, total }) => {
  return (
    <>
      good{good} neutral{neutral} bad {bad}
      <div>
        <StatisticLine text="All" value={total} />
        <StatisticLine text="Average" value={(good + -bad) / total} />
        <StatisticLine text="positive" value={(good / total) * 100} />
      </div>
    </>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <p>
        {text}: {value}
      </p>
    </>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default App;
