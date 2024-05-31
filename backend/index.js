const express = require("express");
require("dotenv").config();
const cors=require("cors");

const corsOptions ={
   origin:'*',
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}


var chessRouter = require("./routes/chess.router.js");

const app = express();
app.use(cors(corsOptions))

app.use(express.json());

app.use("/static",
    express.static("src/public")
);

app.use("/chess", chessRouter);


app.listen(process.env.PORT, () => {
    console.log("Server running on port: " + process.env.PORT);
});
