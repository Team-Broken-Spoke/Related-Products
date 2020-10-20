const fs = require('fs');
const readline = require('readline');


let readStream = fs.createReadStream('../../related-products-data/unformatted-json/unformatted-photos.json');
let writeStream = fs.createWriteStream('../../related-products-data/formatted-json/formatted-photos.json');

let currentId = "1";
let photosObj = {
  "productId": '1',
  "url": ''
};

const processRecord = (data) => {
  if(data.styleId === currentId) {
    photosObj["productId"] = data.styleId
    photosObj["url"] = data.url;
  } else {
    writeStream.write(JSON.stringify(photosObj));
    photosObj = {"productId": data.styleId, "url": data.url};
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
