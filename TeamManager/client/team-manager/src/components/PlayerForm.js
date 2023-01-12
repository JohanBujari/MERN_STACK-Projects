import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";
import SubNav1 from "./SubNav1";

const PlayerForm = (props) => {
  const { listPageIsActive, setListPageIsActive } = props;
  // const navigate = useNavigate();
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState("");
  const [preferedPosition, setPreferedPosition] = useState("");
  const [errors, setErrors] = useState("");

  useEffect(() => {
    setListPageIsActive(false);
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players")
      .then((res) => setPlayers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addPlayer = (player) => {
    axios
      .post("http://localhost:8000/api/players", player)
      .then((res) => {
        setPlayers(res.data);
        // setErrors(res.data.errors.name.message)
        console.log(res.data);
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
        console.log(err.response.data.errors);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPlayer = {
      playerName,
      preferedPosition,
    };
    addPlayer(newPlayer);
  };
  return (
    <div>
      <SubNav1
        listPageIsActive={listPageIsActive}
        setListPageIsActive={setListPageIsActive}
      />
      <form className="player-form" onSubmit={handleSubmit}>
        <h3 className="add-player">Add player</h3>
        <div className="inputs-2">
          <div className="input-fields">
            <label>Player Name:</label>
            <input
              id="inputs"
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
            {errors.playerName ? <p>{errors.playerName.message} </p> : null}
          </div>
          <div className="input-fields">
            <label>Prefered Position:</label>
            <input
              id="inputs"
              type="text"
              value={preferedPosition}
              onChange={(e) => setPreferedPosition(e.target.value)}
            />
          </div>
          <button className="player-add">Add</button>
        </div>
      </form>
    </div>
  );
};

export default PlayerForm;
