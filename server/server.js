import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.get("/", function (request, response) {
  response.json("Hello");
});

app.post("/guestlist", function (request, response) {
  //retreive the information from the guestbook form.
  console.log(request.body);
  // here we would add our name and message to the data base
  response.json("Thank you for making a new entry");
});

app.get("/guestlist", async function (request, response) {
  //get the names and messages from the data base -- this works   GETROUTE  this has to be async as we are talking to database somewhere else
  const result = await db.query(`SELECT * FROM guestlist`);
  const guestlist = result.rows; //only want actual data from the result i.e the rows
  response.json(guestlist); // this should send it back to client
});

app.listen(8081, function () {
  console.log("server is running on port 8081");
});
