const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
	body: {
		type: String,
		required: false,
	},
	name: String,
	email: {
		type: String,
		required: false,
	},
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
