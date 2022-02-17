import Person from "./person";
import './App.css';

function App() {
  return(
    <div className='App'>
      <Person
           name={"Doe"} lastname={"Jane"}
           age={"45"}
           color={"Black"} />
           <Person
           name={"Smith"} lastname={"John"}
           age={"88"}
           color={"Brown"} />
           <Person
           name={"Fillmore"} lastname={"Millard"}
           age={"50"}
           color={"Brown"} />
           <Person
           name={"Smith"} lastname={"Maria"}
           age={"62"}
           color={"Brown"} />
    </div>
  )
}

export default App;