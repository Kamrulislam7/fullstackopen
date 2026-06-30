const Course = ({ course }) => {
  return (
    <>
      <Header course={course}></Header>
      <Content course={course}></Content>
      <Total course={course} />
    </>
  );
};

const Header = ({ course }) => {
  console.log(course);
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => (
        <Part part={part} key={part.exercises} />
      ))}
    </div>
  );
};

const Part = ({ part }) => {
  console.log(part);
  return (
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  );
};

const Total = ({ course }) => {
  return (
    <strong>
      total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)}{" "}
      exercises
    </strong>
  );
};

export default Course;
