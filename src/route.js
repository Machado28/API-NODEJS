import { Router } from 'express'
import  controllerUser from './app/controller/controllerUser.js'
const router = Router();

router.post('/user',controllerUser.store)
export default router;