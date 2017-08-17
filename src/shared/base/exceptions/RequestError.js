/**
 * network error
 */
function RequestError(message, errors) {
  this.name = message;
  this.errors = errors;
  this.message = message;
}

RequestError.proptype = Object.create(Error.prototype);
RequestError.proptype.constructor = RequestError;

export default RequestError;
