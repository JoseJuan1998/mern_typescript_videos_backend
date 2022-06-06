import mongoose from 'mongoose'
import config from "./config";

(
  async () => {
    const mongooseOptions = {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }

    const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`)
    console.log('database is connected to:', db.connection.name)
  }
)()