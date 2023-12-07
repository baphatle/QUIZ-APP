import { Router } from 'express'
import routerAuth from './auth.js'
import routerResults from './result.js'
import routerQuestions from './\bquestion.js'

const router = Router()

router.use('/questions', routerQuestions)
router.use('/results', routerResults)
router.use('/auth', routerAuth)

export default router
