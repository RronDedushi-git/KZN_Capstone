import mongoose from "mongoose";

const stepSchema = new mongoose.Schema(
  {
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    createdByDefault: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Step = mongoose.model("Step", stepSchema);
