import express from "express";
import { Category } from "../models/Category.js";
import { Step } from "../models/Step.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // No alphabetical sort — returns in creation order
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  const { name } = req.body;

  try {
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    const newCategory = await Category.create({
      name,
      icon: "footprints", // 👣 DEFAULT ICON (matches react)
    });

    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    // Delete all related steps
    await Step.deleteMany({ categoryId: id });

    // Delete category
    await Category.findByIdAndDelete(id);

    res.json({ message: "Category and its steps deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
