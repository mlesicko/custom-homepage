const express = require("express");
const bodyParser = require("body-parser");
const { JsonDB } = require("node-json-db");
const { Config } = require("node-json-db/dist/lib/JsonDBConfig");

const PORT = process.env.PORT || 3001;

const db = new JsonDB(new Config("data", true, true, "/"));

/* Set up database if this is the first run */

const initial_data = {
	categories: []
};

const data = db.getData("/");
if (Object.keys(data).length === 0) {
	db.push("/", initial_data);
}

/* Server logic */

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
	res.json({message: "Hello, world!"});
});

app.get("/api/data", (req, res) => {
	try {
		res.json(db.getData("/"));
	} catch (e) {
		console.log("Error fetching from database");
		res.sendStatus(500);
	}
});

app.post("/api/updateData", (req,res) => {
	try {
		db.push("/", req.body);
		res.json(db.getData("/"));
	} catch (e) {
		console.log("Error updating database");
		res.sendStatus(500);
	}
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
