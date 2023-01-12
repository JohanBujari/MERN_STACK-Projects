import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import PlayerForm from "./components/PlayerForm";
import PlayerList from "./components/PlayerList";


function App() {
  const [listPageIsActive, setListPageIsActive] = useState(true);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <PlayerList
                listPageIsActive={listPageIsActive}
                setListPageIsActive={setListPageIsActive}
              />
            }
            path="/players/list"
            default
          />
          <Route
            element={
              <PlayerForm
                listPageIsActive={listPageIsActive}
                setListPageIsActive={setListPageIsActive}
              />
            }
            path="/addplayer"
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
