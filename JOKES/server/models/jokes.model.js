
const mongoose =require('mongoose');
 
const JokesSchema = new mongoose.Schema({
    name: {
        type: String
    },

        setup: {
            type: String
        }
    
});
 
const Jokes = mongoose.model('Jokes', JokesSchema);
 
module.exports = Jokes;