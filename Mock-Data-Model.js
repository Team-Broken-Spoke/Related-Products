const productList = {
  productId: integer, //products: id
  productDetails: {
    productName: string, //products: name
    productCategory: string, //products: category
    productPrice: integer, //products: default_price
    productSalePrice: integer,  //
    productPhoto: url string,  //
    currentProductCharacteristics: { //characteristics: product_id
      category1 /*characteristics: name*/: value, //
      category2 /*characteristics: name*/: value, //
      category3 /*characteristics: name*/: value, //
    },
    productCardCharacteristics: {
      category1: value, //
      category2: value, //
      category3: value, //
    }
  },
  productRatings: integer, //
  relatedProducts: [
    productId,
    productId,
    productId,
    productId,
    productId
  ]
}

const userOutfit = {
  userId: integer,
  outfitList: [
    {
      productId: ,
      image: ,
      productName:
    },
    {
      productId: ,
      image: ,
      productName:
    },
    {
      productId: ,
      image: ,
      productName:
    },
  ]
}

      "name": product.name,
      "category": product.category,
      "defaultPrice": product.default_price,

      let readStream = fs.createReadStream('../../related-products-data/unformatted-json/unformatted-products.json');
let writeStream = fs.createWriteStream('../../related-products-data/formatted-json/formatted-products.json');