const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const PORT = 3000;
const SECRET_KEY = "super-secret-key";

app.use(cors());
app.use(express.json());

const user = {
  id: 1,
  username: "admin",
  password: "1234",
};

const laptops = [
  {
    id: 1,
    category: "Laptops",
    name: "Dell XPS 13",
    quantity: 10,
    price: 1200,
    description:
      "Ultra-thin and lightweight laptop with a 13-inch display and high performance.",
  },
  {
    id: 2,
    category: "Laptops",
    name: "Apple MacBook Air M2",
    quantity: 5,
    price: 1500,
    description:
      "Lightweight laptop with Apple M2 chip, excellent battery life, and Retina display.",
  },
  {
    id: 3,
    category: "Laptops",
    name: "HP Spectre x360",
    quantity: 7,
    price: 1300,
    description: "Convertible laptop with a touchscreen and stylish design.",
  },
  {
    id: 4,
    category: "Laptops",
    name: "Lenovo ThinkPad X1 Carbon",
    quantity: 8,
    price: 1400,
    description: "Business laptop with durable build and excellent keyboard.",
  },
  {
    id: 5,
    category: "Laptops",
    name: "ASUS ROG Zephyrus G14",
    quantity: 4,
    price: 1600,
    description:
      "Gaming laptop with powerful processor and graphics card for heavy workloads.",
  },
];

app.get("/Table_Products", (req, res) => {
  res.json(laptops);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    const token = jwt.sign(
      { id: user.id, username: user.username },
      SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    res.json({ token });
  } else {
    res.status(401).json({ message: "Невірний логін або пароль" });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});
