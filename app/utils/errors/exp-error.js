const error = (err, res) => {
  if (err.name === 'ValidationError') {
    res.status(400).json(err.extra);
  } else if (err.name === 'NotFoundError') {
    res.status(404).json(err.extra);
  } else {
    res.status(500).json(err);
  }
};

module.exports = error;
