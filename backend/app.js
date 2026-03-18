const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: 5432,
});

// Create table automatically
pool.query(
    "CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, name TEXT)",
    () => { }
);

// POST → Insert
app.post("/add", async (req, res) => {
    const { name } = req.body;
    await pool.query("INSERT INTO users(name) VALUES($1)", [name]);
    res.send("Inserted");
});

// GET → Fetch
app.get("/users", async (req, res) => {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
});

// Health
app.get("/health", (req, res) => {
    res.send("OK");
});

app.listen(5000, () => console.log("Server running"));