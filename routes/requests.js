const { Router } = require("express");
const router = Router();

const Request= require("../models/request");

//get metodi

router.get("/", async (req, res) => {
  try {
    const todo = await Request.find({});
    res.json(todo);
  } catch (error) {
    console.log({ error, messege: "Eror jalab to'g'irla" });
  }
});

router.post("/", async (req, res) => {
  const { student_name } = req.body;

  let todo = await Request.findOne({ student_name });
  if (todo) return res.send("Bunday nomli obyekt mavjud!!");

  todo = new Request(req.body);
  await todo.save();

  res.send("Request qo'shildi: OK");
});

// Delete

router.delete("/:_id", async (req, res) => {
  try {
    await Request.findByIdAndDelete({ _id: req.params._id });
    res.send(`Request with id: ${req.params._id} deleted: ok`);
  } catch (error) {
    console.log({
      error,
      message: "Delete metod ishlamadi, Nmadur noto'g'ri ketgan!",
    });
  }
});

//Patch

router.patch("/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const updTodo = req.body;

    const result = await Request.findByIdAndUpdate(_id, updTodo);
    res.send(result);
  } catch (err) {
    console.log({
      err,
      message: "Patch metod ishlamadi, Nmadur noto'g'ri ketdi!",
    });
  }
});

module.exports = router;
