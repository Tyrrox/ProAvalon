var mongoose = require("mongoose");

//SCHEMA SETUP
var modActionSchema = new mongoose.Schema({
    type: String, //ban, mute?

    bannedPlayer: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		},
		username: String
    },
    
    
    modWhoBanned: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		},
		username: String
    },
    

    reason: String,


    whenMade: Date,

    durationToBan: Date,
    whenRelease: Date,

    descriptionByMod: String,

    originalContent: String
});

//compile schema into a model
var modAction = mongoose.model("ModAction", modActionSchema);

module.exports = modAction;