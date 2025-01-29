const { default: mongoose } = require("mongoose");

function connectToDb() {
  const DB_URI =
    "mongodb+srv://admin:WOjXQAShDRw0ByNv@cluster0.n0tzw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  mongoose
    .connect(DB_URI, { dbName: "todosapp" })
    .then(() => console.log("connected to db"))
    .catch((e) => console.log(e.message));
}

module.exports = connectToDb;
