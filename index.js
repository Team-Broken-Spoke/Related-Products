const express = require('express');
const app = express();
const port = 1337;
const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";

app.use(express.json());

let db;
MongoClient
  .connect(url, { useUnifiedTopology: true })
  .then(client => {
    db = client.db('related-products');
  })
  .catch(error => console.error(error));

  //FEATURES
  app.get('/features/:productId', (req, res) => {
    const collection = db.collection('features');
    collection.findOne({productId: req.params.productId})
      .then((response) => {
        res.send(response)
      })
      .catch(error => {
        console.error(error);
      })
  });

  //PHOTOS
  app.get('/photos/:productId', (req, res) => {
    const collection = db.collection('photos');
    collection.findOne({productId: req.params.productId})
      .then((response) => {
        res.send(response)
      })
      .catch(error => {
        console.error(error);
      })
  });

  //PRODUCT DETAILS
  app.get('/productDetails/:productId', (req, res) => {
    const collection = db.collection('products');
    collection.findOne({productId: req.params.productId})
      .then((response) => {
        res.send(response)
      })
      .catch(error => {
        console.error(error);
      })
  });

  //RELATED
  app.get('/related/:styleId', (req, res) => {
    const collection = db.collection('related');
    collection.findOne({productId: req.params.productId})
      .then((response) => {
        res.send(response)
      })
      .catch(error => {
        console.error(error);
      })
  });

  //REVIEWS
  app.get('/reviews/:productId', (req, res) => {
    const collection = db.collection('reviews');
    collection.findOne({productId: req.params.productId})
      .then((response) => {
        res.send(response)
      })
      .catch(error => {
        console.error(error);
      })
  });

  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
  });