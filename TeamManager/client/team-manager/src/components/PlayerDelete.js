import React from "react";
import axios from "axios";
import '../App.css';

const PlayerDelete = (props) => {
  const { playerId, successCallBack } = props;

  const deletePlayer = (e) => {
    axios.delete("http://localhost:8000/api/players/" + playerId).then((res) => {
      successCallBack();
    });
  };
  return <div>
    <button className="player-delete" onClick={deletePlayer}>Delete</button>
  </div>;
};

export default PlayerDelete;
  