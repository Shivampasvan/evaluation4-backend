const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/User.routes");
const { auth } = require("./middleware/auth.middleware");
const { postRouter } = require("./routes/Post.routes");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());
app.use("/users", userRouter);

app.use(auth);
app.use("/posts", postRouter);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected to the Database");
  } catch (error) {
    console.log(error);
    console.log("cannot connect to the Database");
  }
  console.log("Server is running at port 8080");
});
