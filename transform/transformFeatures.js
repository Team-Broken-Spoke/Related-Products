const fs = require('fs');
const readline = require('readline');

let readStream = fs.createReadStream('../../related-products-data/unformatted-json/unformatted-features.json');
let writeStream = fs.createWriteStream('../../related-products-data/formatted-json/formatted-features.json');

const featureDetails = (product) => {
  return {
    "feature": product.feature,
    "value": product.value,
  }
}

let currentId = "1";
let reviewObj= {
  "productId" : "1",
  "features": []
}

const processRecord = (data) => {
  if(data.productId === currentId) {
    reviewObj["features"].push(featureDetails(data));
  } else {
    writeStream.write(JSON.stringify(reviewObj));
    reviewObj = { "productId": data.productId, "features": [] };
    currentId = data.productId;
    reviewObj["features"].push(featureDetails(data));
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


