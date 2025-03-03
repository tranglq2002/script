db.privileges_brands.updateOne(
  { brandId: 1 },
  {
    $set: {
      privileges: [
        {
          name: {
            en: "LG NeoChef™ Black Microwave MS3032JAS",
            vi: "Lò Vi Sóng LG NeoChef™ màu Đen MS3032JAS",
          },
          price: 4999000,
          dealPrice: 3690000,
          image: "https://static.urbox.vn/app-cms/UrBoxPlus/LG/LGNeoChef.png",
          redirectUrl:
            "urbox://WebviewScreen?url=https://u.urbox.vn/83OSOs6j22&userAgent=appId=urbox&bottomNavBar=true",
          priority: 3,
        },
        {
          name: {
            en: "Smart Tivi LG OLED 4K 55 Inch OLED55B4PSA",
            vi: "Smart Tivi LG OLED 4K 55 Inch OLED55B4PSA",
          },
          price: 39990000,
          dealPrice: 20300000,
          image: "https://static.urbox.vn/app-cms/UrBoxPlus/LG/SmartTivi.png",
          redirectUrl:
            "urbox://WebviewScreen?url=https://u.urbox.vn/83OSOs6j22&userAgent=appId=urbox&bottomNavBar=true",
          priority: 2,
        },
        {
          name: {
            en: "LG AI DD™ Inverter 12kg Front Load Washing Machine White FV1409S4W",
            vi: "Máy giặt lồng ngang LG AI DD™ Inverter 12kg màu đen FV1412S3BA",
          },
          price: 21490000,
          dealPrice: 11819500,
          image:
            "https://static.urbox.vn/app-cms/UrBoxPlus/LG/WashingMachineWhite.png",
          redirectUrl:
            "urbox://WebviewScreen?url=https://u.urbox.vn/83OSOs6j22&userAgent=appId=urbox&bottomNavBar=true",
          priority: 1,
        },
      ],
    },
  }
);
