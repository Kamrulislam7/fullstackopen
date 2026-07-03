import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", id: 1 }]);
  const [newName, setNewName] = useState("");
  console.log(persons);

  const handelName = (e) => {
    console.log(e.target.value);
    console.log(persons);

    setNewName(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();
    const newObjrect = {
      name: newName,
      important: Math.random() < 0.5,
      id: String(persons.length + 1),
    };

    console.log(persons);

    persons.find((data) => data.name === newName)
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(newObjrect));

    setNewName("");
    console.log(persons);
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
