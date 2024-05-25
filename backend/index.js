import express from "express";
import dotenv from "dotenv";
dotenv.config();

import chessRouter from "./routes/chess.router";

const app = express();

app.use(express.json());

app.use("/static",
    express.static("src/public")
);

app.use("/chess", chessRouter);


app.listen(process.env.PORT, () => {
    console.log("Server running on port: " + process.env.PORT);
});
