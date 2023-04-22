const Header = ({name}) => <h1>{name}</h1>

const Content = ({parts}) => {
    return (
       parts.map(parts =>
            <p key={parts.id}>
                {parts.name} {parts.exercises}
            </p>
       )
    )}


const Course = ({course}) => {
    const parts = course.parts
    return (
        <div>
           <Header name={course.name}/>
           <Content parts={parts}/>
        </div>
    )}

  export default Course