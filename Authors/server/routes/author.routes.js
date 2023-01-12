const AuthorController = require('../controller/author.controller');

module.exports = app => {
    app.post('/api/authors', AuthorController.createNewAuthor);
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
    app.get('/api/authors/:id', AuthorController.getOneAuthor);
    app.put('/api/authors/:id', AuthorController.updateAuthor);
}