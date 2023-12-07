import { Router } from 'express'
import { signUp, singIn } from '../controllers/auth.js'

const routerAuth = Router()

routerAuth.post('/signup', signUp)
routerAuth.post('/signin', singIn)

export default routerAuth