function Total({ exercise }) {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {exercise.exercises1 + exercise.exercises2 + exercise.exercises3}
      </p>
    </div>
  );
}

export default Total;
