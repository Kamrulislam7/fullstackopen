import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const App = () => {
  const course = "Half Stack application development";
  const part = {
    part1: "Fundamentals of React",
    part2: "Using props to pass data",
    part3: "State of a component",
  };
  const exercise = { exercises1: 10, exercises2: 7, exercises3: 14 };

  return (
    <div>
      <Header course={course} />
      <Content part={part} exercise={exercise} />
      <Total exercise={exercise} />
    </div>
  );
};

export default App;
