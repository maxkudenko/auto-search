const data = require("./data");

exports.search = function (req, res) {
  const resultArray = [];
  const { value } = req.query;
  if (value) {
    for (let i = 0; i < data.length; i += 1) {
      const c = data[i].name;
      if (c.toLowerCase().includes(value.toLowerCase())) {
        resultArray.push(data[i]);
      }
    }
  }
  res.json(resultArray);
};
