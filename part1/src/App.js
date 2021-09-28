import './App.css'

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  let contents = props.contents.map((item) => {
    return (
      <p>
        {item.part} {item.exercises}
      </p>
    )
  })

  return contents
}

const Total = (props) => {
  return <p>Number of exercises {props.total}</p>
}

const App = () => {
  const course = 'Half Stack application development'

  const contents = [
    {
      part: 'Fundamentals of React',
      exercises: 10
    },
    {
      part: 'Using props to pass data',
      exercises: 7
    },
    {
      part: 'State of a component',
      exercises: 14
    }
  ]

  const total = contents.reduce((item, next) => {
    return item + next.exercises
  }, 0)

  return (
    <div>
      <Header course={course} />
      <Content contents={contents} />
      <Total total={total} />
    </div>
  )
}

export default App
