import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", id: 1 }]);
  const [newName, setNewName] = useState("");

  const handelName = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();
    const newObjrect = {
      name: newName,
      important: Math.random() < 0.5,
      id: String(persons.length + 1),
    };

    setPersons(persons.concat(newObjrect));
    setNewName("");
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handelName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers </h2>
      {persons.map((person) => (
        <Person person={person} key={person.id} />
      ))}
    </div>
  );
};

export default App;

const Person = ({ person }) => {
  return <h3>{person.name}</h3>;
};
