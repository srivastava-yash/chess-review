const express = require("express");
const { Chess } = require("chess.js");
const pgnParser = require("pgn-parser");
const axios = require("axios");

const router = express.Router();

router.post("/parse", async(req, res) => {
    let {pgn} = req.body;

    if(!pgn) {
        return res.status(400).json({'message': "Invalid Request"});
    }

    try {
        var [ pgnResult ] = pgnParser.parse(pgn);

        if (!pgnResult) {
            return res.status(400).json({ message: "Incorrect PGN" });
        }
    } catch (err) {
        return res.status(500).json({ message: "Failed to parse PGN." });
    }

    let board = new Chess();
    let positions = [];

    // adding initial board
    positions.push({
        'fen': board.fen()
    });

    for( let move of pgnResult.moves) {
        let san = move.move;

        let moveObject;
        try {
            moveObject = board.move(san);
        } catch (err) {
            return res.status(400).json({'message': "Illegal moves"});
        }

        let moveUci = moveObject.from + moveObject.to;

        positions.push({
            'fen': board.fen(),
            'move': {
                'san': san,
                'uci': moveUci
            }
        });
    }

    return res.status(200).json({
        'positions': positions
    })

});

router.post("/games", async (req, res) => {
    let {username} = req.body;
    let {year} = req.body;
    let {month} = req.body;

    if(!username) {
        return res.status(400).json({'message': "Invalid Request"});
    }
    console.log(`Fetching games for ${username}`);

    if(!year) {
        year = new Date().getFullYear();
    }

    if(!month) {
        currentMonth = new Date().getMonth() + 1;
        month = currentMonth.toString();
        month = month.length > 1 ? month : "0"+month;
        // remove later
        month = "05";
    }

    let games;
    const url = `https://api.chess.com/pub/player/${username}/games/${year}/${month}`;
    try {
        let chessResponse = await axios.get(url);
        games = chessResponse.data.games;
        return res.status(200).json({
            'games': games.reverse()});
    } catch (err) {
        return res.status(500).json({'message': "Internal Server Error fetching Chess.com games"});
    }
});

module.exports = router;
