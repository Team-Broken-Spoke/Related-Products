const csv = require('csvtojson')
const fs = require('fs');


// convert PRODUCTS csv to json
// let readStream = fs.createReadStream('../../related-products-data/old-database-csvs/product.csv');
// let writeStream = fs.createWriteStream('../../related-products-data/unformatted-json/unformatted-products.json');
// readStream.pipe(csv({downstreamFormat: 'array'})).pipe(writeStream);

// convert PHOTOS csv to json
// let readStream = fs.createReadStream('../../related-products-data/old-database-csvs/photos.csv');
// let writeStream = fs.createWriteStream('../../related-products-data/unformatted-json/unformatted-photos.json');
// readStream.pipe(csv({downstreamFormat: 'array'})).pipe(writeStream);

// convert RELATED csv to json
// let readStream = fs.createReadStream('../../related-products-data/old-database-csvs/related.csv');
// let writeStream = fs.createWriteStream('../../related-products-data/unformatted-json/unformatted-related.json');
// readStream.pipe(csv({downstreamFormat: 'array'})).pipe(writeStream);

// convert REVIEWS csv to json
let readStream = fs.createReadStream('../../related-products-data/old-database-csvs/reviews.csv');
let writeStream = fs.createWriteStream('../../related-products-data/unformatted-json/unformatted-reviews.json');
readStream.pipe(csv({downstreamFormat: 'array'})).pipe(writeStream);
