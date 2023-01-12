import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
        <div className="app">
          <PersonCard
            firstName={"Doe,"}
            lastName={"Jane"}
            age={45}
            color={"Black"}
          />
          <PersonCard
            firstName={"Smith,"}
            lastName={"John"}
            age={88}
            color={"Brown"}
          />
          <PersonCard
            firstName={"Fillmore,"}
            lastName={"Millard"}
            age={50}
            color={"Brown"}
          />
          <PersonCard
            firstName={"Smith,"}
            lastName={"Maria"}
            age={62}
            color={"Brown"}
          />
        </div>
      );
}

export default App;
