import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";
import PlayerDelete from "./PlayerDelete";
import SubNav1 from "./SubNav1";

const PlayerList = (props) => {
  const { listPageIsActive, setListPageIsActive } = props;
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    setListPageIsActive(true);
  });
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players")
      .then((res) => setPlayer(res.data.players));
  }, [player]);

  const removePlayer = (playerId) => {
    alert("Are you sure you want to delete?");
    setPlayer(player.filter((player) => player._id !== playerId));
  };
  return (
    <div>
      <SubNav1
        listPageIsActive={listPageIsActive}
        setListPageIsActive={setListPageIsActive}
      />
      {player.map((player, index) => {
        return (
          <div className="player-list" key={index}>
            <h4>
              Team Name
              <h5>{player.playerName}</h5>
            </h4>

            <h4>
              Prefered Position
              <h5>{player.preferedPosition}</h5>
            </h4>
            <h4>
              <PlayerDelete
                playerId={player._id}
                successCallBack={() => removePlayer(player._id)}
              />
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default PlayerList;
