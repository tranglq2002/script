db.privileges_brands.updateOne(
  { brandId: 11 },
  {
    $set: {
      privileges: [
        {
          name: {
            en: "Rapido RVC-600H Handheld Vacuum Cleaner",
            vi: "Quạt sạc Comet - CRF0705 WH",
          },
          price: 438000,
          dealPrice: 219000,
          image: "https://static.urbox.vn/app-cms/UrBoxPlus/PPVN/RVC-600H.png",
          redirectUrl:
            "urbox://WebviewScreen?url=https://u.urbox.vn/GwV0YFwcEm&bottomNavBar=true",
          priority: 3,
        },
        {
          name: {
            en: "Senko Hood Fan L1638 - 47Wh",
            vi: "Quạt Lửng Ống Nhựa Senko L1638 - Công suất 47W",
          },
          price: 630000,
          dealPrice: 323000,
          image:
            "https://static.urbox.vn/app-cms/UrBoxPlus/PPVN/SenkoHoodFan.png",
          redirectUrl:
            "urbox://WebviewScreen?url=https://u.urbox.vn/LOEHd0ZVCY&bottomNavBar=true",
          priority: 2,
        },
        {
          name: {
            en: "JISULIFE FA42 Mini Handheld Fan 2000mAh",
            vi: "Quạt Cầm Tay Mini JISULIFE F8X 4500mAh",
          },
          price: 474000,
          dealPrice: 242000,
          image:
            "https://static.urbox.vn/app-cms/UrBoxPlus/PPVN/JISULIFEFA42.png",
          redirectUrl:
            "urbox://WebviewScreen?url=https://u.urbox.vn/Sz8LwST7ge&bottomNavBar=true",
          priority: 1,
        },
      ],
      redirectUrl:
        "urbox://WebviewScreen?url=https://u.urbox.vn/kjVYIdGiuP&bottomNavBar=true",
    },
  }
);
