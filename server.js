import express from "express";
import mongoose from "mongoose";

mongoose
  .connect(".................YOUR CONNECTION STRING....................")
  .then(() => {
    console.log("Database connected!");
  })
  .catch(() => {
    console.log("Error while connecting database");
  });

const mySchemaa = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
});

const myModulee = mongoose.model("myModulee", mySchemaa);

const PORT = 8000;
const app = express();

app.use(express.urlencoded({ extended: false }));

// Show All Users
app.get("/api/users", async (req, res) => {
  try {
    const allUsers = await myModulee.find({});
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json({ status: "Internal server error" });
  }
});

// Find user by ID
app.get("/api/users/:id", async (req, res) => {
  try {
    const user = await myModulee.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ status: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ status: "Invalid user ID" });
  }
});

// Insert users to database
app.post("/api/users", async (req, res) => {
  const body = req.body;
  try {
    const newUser = await myModulee.create({
      first_name: body.first_name,
      last_name: body.last_name,
    });
    return res.status(201).json({ status: "User Created", user: newUser });
  } catch (error) {
    return res
      .status(400)
      .json({ status: "User not created", error: error.message });
  }
});

// Update user
app.patch("/api/users/:id", async (req, res) => {
  try {
    const updatedUser = await myModulee.findByIdAndUpdate(
      req.params.id,
      { first_name: "changed Name" },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ status: "User not found" });
    }
    return res.status(200).json({ status: "User updated", user: updatedUser });
  } catch (error) {
    return res
      .status(400)
      .json({ status: "Invalid user ID", error: error.message });
  }
});

// Delete user
app.delete("/api/users/:id", async (req, res) => {
  try {
    const deletedUser = await myModulee.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ status: "User not found" });
    }
    return res.status(200).json({ status: "User Deleted" });
  } catch (error) {
    return res
      .status(400)
      .json({ status: "Invalid user ID", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
