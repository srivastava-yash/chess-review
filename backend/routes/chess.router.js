import { Router } from "express";
import { Chess } from "chess.js";
import pgnParser from "pgn-parser";

const router = Router();

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
