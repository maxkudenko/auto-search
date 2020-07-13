const data = require("./data");

exports.search = (req, res) => {
  const { value } = req.query;
  const result = [];

  if (value) {
    data.forEach((item) => {
      if (item.name.toLowerCase().includes(value.toLowerCase())) {
        result.push(item);
      }
    });
  }

  res.json(result);
};
