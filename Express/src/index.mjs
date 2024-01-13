import express from "express";

const users = [
  { id: 1, username: "john", name: "John Doe" },
  { id: 2, username: "jane", name: "Jane Doe" },
  { id: 3, username: "bob", name: "Bob Smith" },
  { id: 4, username: "test", name: "Test Test" },
  { id: 5, username: "user", name: "User Userson" },
  { id: 6, username: "admin", name: "Admin Adminson" },
  { id: 7, username: "john", name: "John Doe" },
  { id: 8, username: "jane", name: "Jane Doe" },
  { id: 9, username: "bob", name: "Bob Smith" },
  { id: 10, username: "test", name: "Test Test" },
  { id: 11, username: "user", name: "User Userson" },
  { id: 12, username: "admin", name: "Admin Adminson" },
  { id: 13, username: "john", name: "John Doe" },
  { id: 14, username: "jane", name: "Jane Doe" },
  { id: 15, username: "bob", name: "Bob Smith" },
  { id: 16, username: "test", name: "Test Test" },
  { id: 17, username: "user", name: "User Userson" },
  { id: 18, username: "admin", name: "Admin Adminson" },
  { id: 19, username: "john", name: "John Doe" },
  { id: 20, username: "jane", name: "Jane Doe" },
  { id: 21, username: "bob", name: "Bob Smith" },
  { id: 22, username: "test", name: "Test Test" },
  { id: 23, username: "user", name: "User Userson" },
  { id: 24, username: "admin", name: "Admin Adminson" },
  { id: 25, username: "john", name: "John Doe" },
  { id: 26, username: "jane", name: "Jane Doe" },
  { id: 27, username: "bob", name: "Bob Smith" },
  { id: 28, username: "test", name: "Test Test" },
  { id: 29, username: "user", name: "User Userson" },
  { id: 30, username: "admin", name: "Admin Adminson" },
];

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/users", (req, res) => {
  let name = users.map((user) => user.name);
  res.send(`${name}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
