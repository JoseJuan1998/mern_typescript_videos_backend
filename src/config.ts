import dotenv from 'dotenv'

dotenv.config()

export default {
  MONGO_DATABASE: process.env.MONGO_DATABASE || 'videosdb',
  MONGO_USER: process.env.MONGO_USER || 'localhost',
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'admin',
  MONGO_HOST: process.env.MONGO_HOST || 'admin',
  PORT: process.env.PORT || 4000
}