require("dotenv").config(); //env format uchun
const usersRouter = require("./routes/todos"); //users routerni import qildik ismi unique ya'ni boshqacha bo'lishi kere
const requestRouter = require("./routes/requests");
const express = require("express"); //express
const { default: mongoose } = require("mongoose");
const cors = require("cors");

const app = express(); //express () bilan qo'yilishi kere
app.use(cors());

app.use(express.json()); //app.use bu middleware ishlatish uchun severga dopolneniya qoyish uchun json() json format uchun
app.use("/teacher", usersRouter);
app.use("/request", requestRouter);

const PORT = process.env.PORT || 8000; //env port uchun

function start() {
  try {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

start();
