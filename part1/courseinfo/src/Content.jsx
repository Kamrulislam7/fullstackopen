import Part from "./Part";

function Content({ part, exercise }) {
  console.log(part, exercise);
  return (
    <div>
      <Part part={part.part1} exercise={exercise.exercises1} />
      <Part part={part.part2} exercise={exercise.exercises2} />
      <Part part={part.part3} exercise={exercise.exercises3} />
    </div>
  );
}

export default Content;
