const { authJwt } = require("../middlewares");
const controller = require("../controllers/tests.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/tests/", controller.getTests);

  app.post("/api/tests/", [authJwt.verifyToken], controller.postTest);
};