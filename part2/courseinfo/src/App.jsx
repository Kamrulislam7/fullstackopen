import { useEffect, useState } from "react";
import Course, { Form } from "./Course";
import noteService from "./services/notes.js";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    noteService.getAll().then((response) => {
      setNotes(response.data);
    });
  }, []);

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id === id ? returnedNote : note)));
      })
      .catch((e) => {
        alert(
          `the note '${(note.content, e)}' was already deleted from server`,
        );
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  return (
    <>
      <Form notes={notes} setNotes={setNotes} />
      {notes.map((course) => (
        <Course
          course={course}
          key={course.id}
          toggleImportance={() => toggleImportanceOf(course.id)}
        />
      ))}
    </>
  );
};

export default App;
