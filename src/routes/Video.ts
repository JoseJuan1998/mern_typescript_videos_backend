import { Schema, model } from "mongoose"

const VideoSchema = 
  new Schema({
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: false,
      trim: true
    },
    url: {
      type: String,
      unique: true,
      required: true,
      trim: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  })

export default model('Video', VideoSchema)