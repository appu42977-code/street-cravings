const mysql = require("mysql2");

const db = mysql.createPool({
  host: "gateway01.ap-southeast-1.prod.aws.tidbcloud.com",
  port: 4000,
  user: "31bKbkpnRJ4L9DT.root",
  password: "xTHaYsA7EelNAoRQ",
  database: "street_cravings",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: {
    minVersion: "TLSv1.2",
    rejectUnauthorized: false
  }
});

db.getConnection((err, connection) => {
  if (err) {
    console.log("DB connection failed:", err);
  } else {
    console.log("TiDB Connected ✅");
    connection.release(); // VERY IMPORTANT
  }
});

module.exports = db;