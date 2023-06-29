const Test = require("../models/test.model");

exports.getTests = async (req, res) => {
    const tests = await Test.find();
    res.status(200).send(tests);
};

exports.postTest = async (req, res) => {
    const test = await Test.create(req.body);
    res.status(200).send(test);
};

