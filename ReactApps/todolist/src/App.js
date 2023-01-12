import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';

function App() {
  const [newTodo, setNewToDo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const toDoItem = {
      text: newTodo,
      completed: false,
    };
    //seTodos and pass in a brand new array containg all current todos  plus 1 more
    setTodos([...todos, toDoItem]);
  };

  const handleDelete = (deleteId) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== deleteId;
    });

    setTodos(filteredTodos);
  };

  const handleToggleCompleted = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (index === i) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => {
            setNewToDo(e.target.value);
          }}
        />
        <div>
          <button>Add</button>
        </div>
      </form>

//       {todos.map((todo, i) => {
        return (
          <Todo
            key={i}
            i={i}
            todo={todo}
            handleDelete={handleDelete}
            handleToggleCompleted={handleToggleCompleted}
          />
        );
      })}
    </div>
  );
}

export default App;
