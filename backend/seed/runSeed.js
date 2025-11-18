import { Category } from "../models/Category.js";
import { Step } from "../models/Step.js";
import { seedCategories, seedSteps } from "./seedData.js";

export async function seedIfNeeded() {
  try {
    const existing = await Category.countDocuments();

    if (existing > 0) {
      console.log("Seed data already exists — skipping.");
      return;
    }

    console.log("Seeding database…");

    // Insert categories first
    const createdCategories = await Category.insertMany(seedCategories);

    // Prepare steps array to insert
    const allSteps = [];

    for (const cat of createdCategories) {
      const catName = cat.name;
      const stepsForCategory = seedSteps[catName] || [];

      stepsForCategory.forEach((text) => {
        allSteps.push({
          categoryId: cat._id,
          text,
          createdByDefault: true,
        });
      });
    }

    // Insert all steps
    if (allSteps.length > 0) {
      await Step.insertMany(allSteps);
    }

    console.log("Seeding complete!");
  } catch (error) {
    console.error("Seeder error:", error);
  }
}
