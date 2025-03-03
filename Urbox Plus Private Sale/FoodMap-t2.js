db.privileges_brands.updateOne(
  { brandId: 5 },
  {
    $set: {
      "programDetail.bannerImage":
        "https://static.urbox.vn/app-cms/UrBoxPlus/FoodMap/BannerV2.png",
      privileges: [
        {
          name: {
            en: "Pure Honey with Coffee Blossom Honeycomb",
            vi: "Mật Ong Nguyên Chất Kèm Tổ Hoa Cà Phê",
          },
          price: 150000,
          dealPrice: 76000,
          image:
            "https://static.urbox.vn/app-cms/UrBoxPlus/FoodMap/PureHoney.png",
          redirectUrl:
            "urbox://WebviewScreen?url=https://u.urbox.vn/i612bjkr7I&bottomNavBar=true",
          priority: 3,
        },
        {
          name: {
            en: "Spicy & Sour Moringa Noodles - Box of 30 Packs",
            vi: "Mì Chùm Ngây Vị Chua Cay - Thùng 30 Gói",
          },
          price: 420000,
          dealPrice: 215000,
          image:
            "https://static.urbox.vn/app-cms/UrBoxPlus/FoodMap/SpicySour.png",
          redirectUrl:
            "urbox://WebviewScreen?url=https://u.urbox.vn/i612bjkr7I&bottomNavBar=true",
          priority: 2,
        },
        {
          name: {
            en: "Wondo Red Dates (Random Color) - 100g Box",
            vi: "Táo Đỏ Wondo (Màu ngẫu nhiên) - Hộp 100g",
          },
          price: 45000,
          dealPrice: 27000,
          image:
            "https://static.urbox.vn/app-cms/UrBoxPlus/FoodMap/WondoRed.png",
          redirectUrl:
            "urbox://WebviewScreen?url=https://u.urbox.vn/i612bjkr7I&bottomNavBar=true",
          priority: 1,
        },
      ],
    },
  }
);
