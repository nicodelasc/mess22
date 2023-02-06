// Server file

const express = require('express');
const Message = require('./models/Message');
const colors = require('colors');
const dotenv = require('dotenv');
const cors = require('cors');

const path = require('path');

const connectDB = require('./db.js');

dotenv.config({
	path: './config.env',
});

const app = express();
connectDB();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('listening on port'));

app.post('/api/message', async (req, res) => {
	const { name, body, email } = req.body;

	try {
		const message = await Message.create({
			name,
			body,
			email,
		});

		res.status(201).json({
			success: true,
			data: message,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: err.message,
		});
	}
});

app.get('/api/message', async function (req, res) {
	const messages = await Message.find();

	res.status(200).json({
		success: true,
		data: messages,
	});
});
