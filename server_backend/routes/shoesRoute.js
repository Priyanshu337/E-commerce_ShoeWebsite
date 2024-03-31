const { Router } = require('express');
const router = Router();

const shoesModel = require('../Model/shoesModels');

router.get("/getShoes", async (req, res) => {
    try {
        const shoes = await shoesModel.find({})
        res.send(shoes)
    }
    catch (error) {
        return res.status(400).json({ message: error });
    }
});

module.exports = router;