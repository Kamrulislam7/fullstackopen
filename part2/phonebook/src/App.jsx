import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState(0);
  const [filter, setFilter] = useState("");

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    <div>
      <h2>Phonebook</h2>
      <h1>Phonebook</h1>
      <Filter filter={filter} setFilter={setFilter} />

      <Form
        persons={persons}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        setPersons={setPersons}
      />
      <h2>Numbers </h2>
      {personsToShow.map((person) => (
        <Person person={person} key={person.id} />
      ))}
    </div>
  );
};

export default App;

const Filter = ({ filter, setFilter }) => {
  const searchHandle = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      filter shown with{" "}
      <input type="text" value={filter} onChange={searchHandle} />
    </div>
  );
};

const Form = ({
  persons,
  newName,
  newNumber,
  setNewName,
  setNewNumber,
  setPersons,
}) => {
  const handelName = (e) => {
    setNewName(e.target.value);
  };

  const handelNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();
    const newObjrect = {
      name: newName,
      number: newNumber,
      important: Math.random() < 0.5,
      id: String(persons.length + 1),
    };

    persons.find((data) => data.name === newName)
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(newObjrect));

    setNewName("");
    setNewNumber(0);
  };

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handelName} />
      </div>
      <div>
        Numbers:{" "}
        <input type="number" value={newNumber} onChange={handelNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
const Person = ({ person }) => {
  return (
    <h3>
      {person.name} {person.number}
    </h3>
  );
};
