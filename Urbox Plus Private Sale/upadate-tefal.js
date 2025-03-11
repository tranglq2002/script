db.privileges_brands.updateOne(
  { brandId: 8 },
  {
    $set: {
      tagLine: {
        vi: "Ưu đãi đến 63% từ Tefal chính hãng",
        en: "Discounts up to 63% on authentic Tefal products",
      },
    },
  }
);
