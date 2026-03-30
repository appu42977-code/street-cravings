const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: 4000,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    minVersion: "TLSv1.2",
  }
});

db.connect((err) => {
  if (err) {
    console.log("❌ DB connection failed:", err);
  } else {
    console.log("✅ TiDB Connected");
  }
});

module.exports = db;