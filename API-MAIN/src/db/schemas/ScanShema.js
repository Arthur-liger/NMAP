import { Schema } from "mongoose"
// import EmbeddedUserSchema from "./EmbeddedUserSchema.js"

const ScanSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    result: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export default ScanSchema
