import { Router } from "express"
import { gettingData,  postStores } from "../controller/storesControl"

const router = Router()

router.route("/getAllstore").get(gettingData);
router.route("/creatingStore").post(postStores);

export default router