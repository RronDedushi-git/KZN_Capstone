import { Category } from "../models/Category.js";
import { Step } from "../models/Step.js";
import { seedCategories, seedSteps } from "./seedData.js";

export async function seedIfNeeded() {
  const count = await Category.countDocuments();

  if (count > 0) {
    console.log("Seed already exists - skipping");
    return;
  }

  console.log("Seeding database…");

  // Insert categories
  const createdCategories = await Category.insertMany(seedCategories);

  // Insert steps
  const stepDocs = [];

  createdCategories.forEach((category) => {
    const steps = seedSteps[category.name] || [];

    steps.forEach((text) => {
      stepDocs.push({
        categoryId: category._id,
        text,
        createdByDefault: true,
      });
    });
  });

  if (stepDocs.length > 0) {
    await Step.insertMany(stepDocs);
  }

  console.log("Seeding complete!");
}
