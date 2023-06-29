import { Router } from "express"
import * as apiController from "../controllers/apiController"

const router = Router()

router.get('/to-do', apiController.all)
router.post('/to-do', apiController.add)
router.put('/to-do/:id', apiController.update)
router.delete('/to-do/:id', apiController.remove)


export default router