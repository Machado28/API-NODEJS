import { Router } from 'express'
import  controllerUser from './controller/controllerUser.js'
const router = Router();

router.post('/user',controllerUser.store)
export default router;