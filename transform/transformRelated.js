const fs = require('fs');
const readline = require('readline');

let readStream = fs.createReadStream('../../related-products-data/unformatted-json/unformatted-related.json');
let writeStream = fs.createWriteStream('../../related-products-data/formatted-json/formatted-related.json');

const relatedDetails = (related) => {
  return related.related_product_id;
}

let currentId = "1";
let reviewObj= {
  "productId" : "1",
  "relatedProductIds": []
}

const processRecord = (data) => {
  if(data.current_product_id === currentId) {
    reviewObj["relatedProductIds"].push(relatedDetails(data));
  } else {
    writeStream.write(JSON.stringify(reviewObj));
    reviewObj = { "productId": data.current_product_id, "relatedProductIds": [] };
    currentId = data.current_product_id;
    reviewObj["relatedProductIds"].push(relatedDetails(data));
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


