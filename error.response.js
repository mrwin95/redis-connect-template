const { StatusCodes } = require("./http.status.code");

class ErrorResponse extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    this.now = Date.now();
  }
}

class RedisErrorResponse extends ErrorResponse {
  constructor(
    message = StatusCodes.INTERNAL_SERVER_ERROR,
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR
  ) {
    super(message, statusCode);
  }
}

module.exports = {
  RedisErrorResponse,
};
