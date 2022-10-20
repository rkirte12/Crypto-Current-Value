const express = require("express")
const controller = require("../controller/CmcPrice")
const router = express.Router();

router.get("/ethereum-price", controller.etherereumPrice)
router.get("/polygon-price", controller.polygonPrice)
router.get("/bnb-price", controller.BNBPrice)

module.exports = router;
