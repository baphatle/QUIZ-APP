import { Router } from "express"
import { checkPermission } from "../middleware/checkPermission.js"
import { deleteResult, getResult, storeResult, } from "../controllers/result.js"

const routerResults = Router()

routerResults.get('/', getResult)
routerResults.post('/', storeResult)
routerResults.delete('/', deleteResult)

export default routerResults