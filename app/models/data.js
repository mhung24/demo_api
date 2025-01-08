const db = require("../common/connect.js");

const data = (data) => {
  (this.id = data.id),
    (this.title = data.title),
    (this.description = data.description),
    (this.category = data.category),
    (this.importPrice = data.importPrice),
    (this.sellingPrice = data.sellingPrice),
    (this.discountPercentage = data.discountPercentage),
    (this.brand = data.brand),
    (this.weight = data.weight),
    (this.warrantyInformation = data.warrantyInformation),
    (this.returnPolicy = data.returnPolicy),
    (this.supplier = data.supplier),
    (this.url = data.url),
    (this.id_user = data.id_user),
    (this.rating = data.rating),
    (this.comment = data.comment),
    (this.date = data.date),
    (this.reviewerName = data.reviewerName),
    (this.reviewerEmail = data.reviewerEmail),
    (this.reviewerAvatar = data.reviewerAvatar),
    (this.height = data.height),
    (this.width = data.width),
    (this.depth = data.depth),
    (this.id_rating = data.id_rating),
    (this.thumbnail = data.thumbnail);
};

let listAPI = [
  {
    id: "",
    title: "",
    description: "",
    category: "",
    importPrice: "",
    sellingPrice: "",
    discountPercentage: "",
    brand: "",
    weight: "",
    dimensions: {},
    warrantyInformation: "",
    rating: [],
    returnPolicy: "",
    supplier: "",
    images: [],
  },
];

let dimensions = {
  height: "",
  width: "",
  depth: "",
};

let ratings = [
  {
    rating: "",
    comment: "",
    date: "",
    reviewerName: "",
    reviewerEmail: "",
    reviewerAvatar: "",
  },
];

let listData = [];

data.getAll = (result) => {
  const getRating = (id) => {};
  const checkData = (id, index) => {
    listAPI.filter((i) => {
      if (i.id == id && listData.length < index) {
        listData = [...listData, i];
      }
    });
  };
  db.query(
    `SELECT * FROM products AS a, images as b, dimensions as d WHERE a.id = b.id_product =  d.id_product`,
    (err, data) => {
      data.forEach((item, index) => {
        dimensions = {
          height: item.height,
          width: item.width,
          depth: item.depth,
        };
        db.query(
          `SELECT rating, comment, date, reviewerName, reviewerEmail, reviewerAvatar, id_product FROM rating  WHERE id_product = ${item.id}`,
          (err, data1) => {
            listAPI = [
              ...listAPI,
              {
                id: item.id,
                title: item.title,
                description: item.description,
                category: item.category,
                importPrice: item.importPrice,
                sellingPrice: item.sellingPrice,
                discountPercentage: item.discountPercentage,
                brand: item.brand,
                weight: item.weight,
                dimensions,
                warrantyInformation: item.warrantyInformation,
                rating: data1[index].id_product == item.id ? data1 : "err",
                returnPolicy: item.returnPolicy,
                supplier: item.supplier,
                images: item.url,
                thumbnail: item.thumbnail,
              },
            ];
          }
        );

        checkData(item.id, data.length);
      });

      if (err || data.length == 0) {
        result(null);
      } else {
        result(listData);
      }
    }
  );
};

data.detail = (id, result) => {
  db.query(`SELECT * FROM product WHERE id = ${id}`, (err, data) => {
    // if (err || data.length == 0) {
    //   result(null);
    // } else {
    //   result(data[0]);
    // }
  });
};

data.create = (newData, result) => {
  db.query(`INSERT INTO  product SET ?`, newData, (err, res) => {
    if (err) {
      result(err);
    } else {
      result({ id: res.insertId, ...newData });
    }
  });
};

data.remove = (id, result) => {
  db.query(`DELETE FROM product WHERE id = ${id}`, (err, data) => {
    if (err) {
      result(err);
    } else {
      result(`Xoá thành công ${id} `);
    }
  });
};

data.update = (data, result) => {
  db.query(
    `UPDATE product SET username =? WHERE id = ?`,
    [data.username, data.id],
    (err, res) => {
      if (err) {
        result(err);
      } else {
        result(data);
      }
    }
  );
};

module.exports = data;
