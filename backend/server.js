const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const allowSearch = (req, res, next) => {
  const { search } = req.query;

  if (search.length < 3)
    return res
      .status(400)
      .json({ message: "key length should be greater than 3" });
  next();
};

const dummy = [
  {
    id: 1,
    todo: "Do something nice for someone you care about",
    completed: false,
    userId: 152,
  },
  {
    id: 2,
    todo: "Memorize a poem",
    completed: true,
    userId: 13,
  },
  {
    id: 3,
    todo: "Watch a classic movie",
    completed: true,
    userId: 68,
  },
  {
    id: 4,
    todo: "Watch a documentary",
    completed: false,
    userId: 84,
  },
  {
    id: 5,
    todo: "Invest in cryptocurrency",
    completed: false,
    userId: 163,
  },
  {
    id: 6,
    todo: "Contribute code or a monetary donation to an open-source software project",
    completed: false,
    userId: 69,
  },
  {
    id: 7,
    todo: "Solve a Rubik's cube",
    completed: true,
    userId: 76,
  },
  {
    id: 8,
    todo: "Bake pastries for yourself and neighbor",
    completed: true,
    userId: 198,
  },
];

app.get("/getData", (req, res) => {
  try {
    return res.status(200).json(dummy);
  } catch (error) {
    return res.status(500).json({ message: "something went wrong" });
  }
});

app.get("/getTodo/:id", (req, res) => {
  try {
    const { id } = req.params;
    const reqId = Number(id);
    if (id) {
      const data = dummy.filter((todo) => {
        return reqId === todo.id;
      });

      return res.status(200).json(data);
    } else {
      return res.status(400).json({ message: "invalid id" });
    }
  } catch (error) {
    return res.status(500).json({ message: "something went wrong" });
  }
});

app.get("/search", allowSearch, (req, res) => {
  const { search } = req.query;

  try {
    if (search) {
      const data = dummy.filter((todo) => {
        const text = todo.todo.toLowerCase();
        if (text.includes(search.toLowerCase())) {
          return true;
        }
        return false;
      });

      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "no keyword was provided" });
    }
  } catch (error) {
    return res.status(500).json({ message: "something went wrong" });
  }
});

app.listen(1000, () => {
  console.log("server is running on port 1000");
});
