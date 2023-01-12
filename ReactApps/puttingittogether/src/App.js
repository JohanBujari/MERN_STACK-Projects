import logo from './logo.svg';
import './App.css';
import Person from './components/Person';

function App() {
  return (
        <div className="app">
          <Person
            firstName={"Doe,"}
            lastName={"Jane"}
            age={45}
            color={"Black"}
          />
          <Person
            firstName={"Smith,"}
            lastName={"John"}
            age={88}
            color={"Brown"}
          />
          <Person
            firstName={"Fillmore,"}
            lastName={"Millard"}
            age={50}
            color={"Brown"}
          />
          <Person
            firstName={"Smith,"}
            lastName={"Maria"}
            age={62}
            color={"Brown"}
          />
        </div>
      );
}

export default App;
