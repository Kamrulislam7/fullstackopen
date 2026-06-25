import Part from "./Part";

function Content({ parts }) {
  console.log(parts[0].name, parts[0].exercises);
  return (
    <div>
      <Part parts={parts[0]} />
      <Part parts={parts[1]} />
      <Part parts={parts[2]} />
    </div>
  );
}

export default Content;
