const router = require("express").Router();
const Visitor = require("../models/visitors");

router.get("/", async (req, res) => {
    try {
        const visitors = await Visitor.find().populate("host_allotted");
        res.render("dashboard", { visitors: visitors });
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;