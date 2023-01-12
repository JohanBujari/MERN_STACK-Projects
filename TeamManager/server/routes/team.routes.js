const PlayerController = require('../controller/team.controller');

module.exports = app => {
    app.post('/api/players', PlayerController.addNewPlayers);
    app.get('/api/players', PlayerController.getAllPlayers);
    app.delete('/api/players/:id', PlayerController.deletePlayers);
}