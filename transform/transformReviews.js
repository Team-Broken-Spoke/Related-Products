const fs = require('fs');
const readline = require('readline');

let readStream = fs.createReadStream('../../related-products-data/unformatted-json/unformatted-reviews.json');
let writeStream = fs.createWriteStream('../../related-products-data/formatted-json/formatted-reviews.json');

const reviewDetails = (review) => {
  return review.rating;
}

let currentId = "1";
let reviewObj= {
  "productId" : "1",
  "reviews": []
}

const processRecord = (data) => {
  if(data.product_id === currentId) {
    reviewObj["reviews"].push(reviewDetails(data));
  } else {
    writeStream.write(JSON.stringify(reviewObj));
    reviewObj = { "productId": data.product_id, "reviews": [] };
    currentId = data.product_id;
    reviewObj["reviews"].push(reviewDetails(data));
  }
}

// read data line-by-line
const readInterface = readline.createInterface({
  input: readStream
});

readInterface.on('line', (line) => {
  line = line.trim();

  if (line.charAt(line.length-1) === ',') {
      line = line.substr(0, line.length-1);
  }

  if (line.charAt(0) === '{') {
      processRecord(JSON.parse(line));
  }
});


