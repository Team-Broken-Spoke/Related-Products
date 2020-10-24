db.products.aggregate([

  // Join with FEATURES collection
  {
      $lookup:{
          from: "features",       // other table name
          localField: "productId",   // name of users table field
          foreignField: "productId", // name of userinfo table field
          as: "_features"         // alias for userinfo table
      }
  },

  // Join with PHOTOS collection
  {
      $lookup:{
          from: "photos",
          localField: "productId",
          foreignField: "productId",
          as: "_photos"
      }
  },

  // Join with RELATED collection
  {
    $lookup:{
        from: "related",
        localField: "productId",
        foreignField: "productId",
        as: "_related"
    }
},

  // Join with REVIEWS collection
  {
    $lookup:{
        from: "reviews",
        localField: "productId",
        foreignField: "productId",
        as: "_reviews"
    }
},

  // define some conditions here
  // {
  //     $match:{
  //         $and:[{"userName" : "admin"}]
  //     }
  // },
  // define which fields are you want to fetch
  {
      $project:{
          productId : 1,
          features : "$_features.features",
          photos : "$_photos.photos[0]",
          related : "$_related.relatedProductIds",
          reviews : "$_reviews.reviews"
      }
  },

  { $out: "relatedProducts" }
]);