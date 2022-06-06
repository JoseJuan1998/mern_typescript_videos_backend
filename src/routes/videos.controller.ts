import { RequestHandler } from "express"
import Video from "./Video"

export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find()
    res.json(videos)
  } catch (error) {
    res.json(error)
  }
}

export const getVideo: RequestHandler = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id)

    if(!video)
      return res.status(404).json('not found')

      return res.json(video)
  } catch (error) {
    res.json(error)
  }
}

export const crateVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findOne({url: req.body.url})

  if(videoFound)
    return res.status(400).json({message: 'url already exists'})

  const video = new Video(req.body)
  const savedVideo = await video.save()
  res.json(savedVideo)
}

export const updateVideo: RequestHandler = async (req, res) => {
  try {
    const video = await Video.findByIdAndUpdate(req.params.id, req.body, {new: true})

    if(!video)
      return res.status(404).json('not found')

      return res.json(video)
  } catch (error) {
    res.json(error)
  }
}

export const deleteVideo: RequestHandler = async (req, res) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.id)

    if(!video)
      return res.status(404).json('not found')

      return res.json(video)
  } catch (error) {
    res.json(error)
  }
}