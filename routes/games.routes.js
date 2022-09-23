const express = require('express');

// Controller
const {
	createGame,
	getAllGames,
	updateGame,
	deleteGame,
	createReview,
} = require('../controllers/games.controller');

// Middlewares
const { protectSession } = require('../middlewares/auth.middlewares');
const { gameExists } = require('../middlewares/games.middlewares');

const gamesRouter = express.Router();

gamesRouter.get('/', getAllGames);

// Endpoinds protected
gamesRouter.use(protectSession);

gamesRouter.post('/', createGame);

gamesRouter.patch('/:id', gameExists, updateGame);

gamesRouter.delete('/:id', gameExists, deleteGame);

gamesRouter.post('/reviews/:gameId', createReview);

module.exports = { gamesRouter };
