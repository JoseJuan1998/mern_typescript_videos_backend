import { Router } from 'express'
import { getVideos, getVideo, crateVideo, updateVideo, deleteVideo } from './videos.controller'

const router = Router()

router.get('/videos', getVideos)
router.get('/videos/:id', getVideo)
router.post('/videos', crateVideo)
router.put('/videos/:id', updateVideo)
router.delete('/videos/:id', deleteVideo)

export default router