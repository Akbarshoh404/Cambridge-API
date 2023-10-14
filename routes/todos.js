const { Router } = require("express");
const router = Router();

const Todo = require("../models/todo");

//get metodi

router.get("/", async (req, res) => {
  try {
    const todo = await Todo.find({});
    res.json(todo);
  } catch (error) {
    console.log({ error, messege: "Eror jalab to'g'irla" });
  }
});

router.post("/", async (req, res) => {
  const { name } = req.body;

  let todo = await Todo.findOne({ name });
  if (todo) return res.send("Bunday nomli obyekt mavjud!!");

  todo = new Todo(req.body);
  await todo.save();

  res.send("Todo qo'shildi: OK");
});

// Delete

router.delete("/:_id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete({ _id: req.params._id });
    res.send(`Todo with id: ${req.params._id} deleted: ok`);
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

    const result = await Todo.findByIdAndUpdate(_id, updTodo);
    res.send(result);
  } catch (err) {
    console.log({
      err,
      message: "Patch metod ishlamadi, Nmadur noto'g'ri ketdi!",
    });
  }
});

module.exports = router;
