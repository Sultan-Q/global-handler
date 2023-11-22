function handleThis(fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

module.exports = handleThis;
module.exports.default = handleThis;
