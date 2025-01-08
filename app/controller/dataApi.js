const data = require("../models/data.js");

exports.getList = (req, res) => {
  data.getAll((data) => {
    res.send(data);
  });
};

exports.details = (req, res) => {
  data.detail(req.params.id, (data) => {
    res.send(data);
  });
};

exports.addList = (req, res) => {
  let newData = req.body;
  data.create(newData, (list) => {
    res.send(list);
  });
};

exports.delete = (req, res) => {
  var id = req.params.id;
  data.remove(id, (list) => {
    res.send(list);
  });
};

exports.update = (req, res) => {
  let newData = req.body;
  data.update(newData, (list) => {
    res.send(list);
  });
};
