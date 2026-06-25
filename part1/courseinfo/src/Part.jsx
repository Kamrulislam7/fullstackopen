function Part({ parts }) {
  console.log(parts);
  return (
    <div>
      <p>
        {parts.name} {parts.exercises}
      </p>
    </div>
  );
}

export default Part;
