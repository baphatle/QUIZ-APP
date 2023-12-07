import { Router } from "express"
import { getAll, insert, update, remove } from '../controllers/question.js'
import { checkPermission } from "../middleware/checkPermission.js"

const routerQuestions = Router()

routerQuestions.get('/', getAll)
routerQuestions.post('/',checkPermission, insert)
routerQuestions.put('/:id', checkPermission,update)
routerQuestions.delete('/',checkPermission, remove)

export default routerQuestions