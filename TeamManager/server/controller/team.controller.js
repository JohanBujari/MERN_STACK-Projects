const Players = require("../model/team.model");

module.exports.addNewPlayers = (req, res) => {
  Players.create(req.body)
    .then((newPlayer) => res.json({ player: newPlayer }))
    .catch(err => res.status(400).json(err));
};

module.exports.getAllPlayers = (req, res) => {
  Players.find({})
    .then((allPlayers) => res.json({ players: allPlayers }))
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

module.exports.deletePlayers = (req, res) => {
  Players.deleteOne({ _id: req.params.id })
    .then((deletedPlayer) => res.json(deletedPlayer))
    .catch((err) => res.json(err));
};
