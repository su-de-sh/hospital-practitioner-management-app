const jwt = require("jsonwebtoken");
const config = require("../utils/config");

const tokenExtractor = (request, response, next) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    request.token = authorization.substring(7);
    next();
  } else {
    response.json({ error: "token missing" });
  }
};

const userExtractor = (request, response, next) => {
  const decodedToken = jwt.verify(request.token, config.ACCESS_TOKEN_SECRET);
  request.user = decodedToken;
  next();
};

const unknownEndpoint = (request, response, next) => {
  response.json({ error: "unknown endpoint" });
  next();
};

const errorHandler = (error, request, response, next) => {
  if (error.name === "CastError") {
    return response.json({
      error: "malformatted id",
    });
  } else if (error.name === "ValidationError") {
    return response.json({
      error: error.message,
    });
  } else if (error.name === "JsonWebTokenError") {
    return response.json({
      error: "invalid token",
    });
  } else if (error.name === "TokenExpiredError") {
    return response.json({
      error: "token expired",
    });
  }
  next(error);
};

module.exports = {
  unknownEndpoint,
  errorHandler,
  tokenExtractor,
  userExtractor,
};
