const fs = require('fs');
const readline = require('readline');


let readStream = fs.createReadStream('../../related-products-data/unformatted-json/unformatted-products.json');
let writeStream = fs.createWriteStream('../../related-products-data/formatted-json/formatted-products.json');

let currentId = "1";
let productObj = {
  "productId": '1',
  "name": '',
  "category": '',
  "default_price": ''
};

const processRecord = (data) => {
  if(data.id === currentId) {
    productObj["productId"] = data.id;
    productObj["name"] = data.name;
    productObj["category"] = data.category;
    productObj["default_price"] = data.default_price;
  } else {
    writeStream.write(JSON.stringify(productObj));
    productObj = {"productId": data.id, "name": data.name, "category": data.category, "default_price": data.default_price};
  }
};

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
