const mongoose = require("mongoose");

// database connection string goes here
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

// database connection event
db.on("connected", function () {
  console.log(`Mongoose connected to: ${db.host}:${db.port}`);
});
