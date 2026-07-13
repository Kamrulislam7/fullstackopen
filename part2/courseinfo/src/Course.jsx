import { useState } from "react";

import noteService from "./services/notes.js";

const Course = ({ course, toggleImportance }) => {
  const label = course.important ? "make not important" : "make important";
  return (
    <>
      <Header course={course}></Header>
      <button onClick={toggleImportance}>{label}</button>

      {/* <Content course={course}></Content> */}
      {/* <Total course={course} /> */}
    </>
  );
};

const Header = ({ course }) => {
  return (
    <div>
      <h1>{course.content}</h1>
    </div>
  );
};

export const Form = ({ notes, setNotes }) => {
  const [note, setNote] = useState("");

  const handleNote = (e) => {
    setNote(e.target.value);
  };

  const handleSubmite = (e) => {
    e.preventDefault();

    const newObject = {
      content: note,
      important: Math.random() < 0.5,
    };

    noteService.create(newObject).then((response) => {
      setNotes(notes.concat(response.data));
      setNote("");
    });
  };
  return (
    <form onSubmit={handleSubmite}>
      <input value={note} onChange={handleNote} />

      <button type="submit">Add Note</button>
    </form>
  );
};

// const Content = ({ course }) => {
//   return (
//     <div>
//       {course.parts.map((part) => (
//         <Part part={part} key={part.exercises} />
//       ))}
//     </div>
//   );
// };

// const Part = ({ part }) => {
//   console.log(part);
//   return (
//     <div>
//       <p>
//         {part.name} {part.exercises}
//       </p>
//     </div>
//   );
// };

// const Total = ({ course }) => {
//   return (
//     <strong>
//       total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)}{" "}
//       exercises
//     </strong>
//   );
// };

export default Course;
