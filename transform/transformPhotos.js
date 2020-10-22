const fs = require('fs');
const readline = require('readline');


let readStream = fs.createReadStream('../../related-products-data/unformatted-json/unformatted-photos.json');
let writeStream = fs.createWriteStream('../../related-products-data/formatted-json/formatted-photos.json');

const photoDetails = (photo) => {
  return photo.url;
}

let currentId = "1";
let photosObj = {
  "productId": '1',
  "photos": []
};

const processRecord = (data) => {
  if(data.styleId === currentId) {
    photosObj["photos"].push(photoDetails(data));
  } else {
    writeStream.write(JSON.stringify(photosObj));
    photosObj = { "productId": data.styleId, "photos": [] };
    currentId = data.styleId;
    photosObj["photos"].push(photoDetails(data));
  }
}

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
