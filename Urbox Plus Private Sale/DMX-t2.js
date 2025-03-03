db.privileges_brands.updateOne(
  { brandId: 4 },
  {
    $set: {
      privileges: [
        {
          name: {
            en: "Kangaroo 4 liter multi-function hot pot KG40EH2",
            vi: "Nồi lẩu đa năng Kangaroo 4 lít KG40EH2",
          },
          price: 890000,
          dealPrice: 490000,
          image:
            "https://static.urbox.vn/app-cms/UrBoxPlus/DMX/KangarooHotPot.png",
          redirectUrl:
            "urbox://WebviewScreen?url=https://u.urbox.vn/VxgXzx96kG&bottomNavBar=true",
          priority: 3,
        },
        {
          name: {
            en: "Electrolux FA41-402GY air purifier",
            vi: "Máy lọc không khí Electrolux FA41-402GY",
          },
          price: 7390000,
          dealPrice: 4590000,
          image:
            "https://static.urbox.vn/app-cms/UrBoxPlus/DMX/ElectroluxAirPuri.png",
          redirectUrl:
            "urbox://WebviewScreen?url=https://u.urbox.vn/qhurNuiB5i&bottomNavBar=true",
          priority: 2,
        },
        {
          name: {
            en: "AVA AJ02 juicer",
            vi: "Máy ép trái cây AVA AJ02",
          },
          price: 1290000,
          dealPrice: 460000,
          image: "https://static.urbox.vn/app-cms/UrBoxPlus/DMX/AVAJuicer.png",
          redirectUrl:
            "urbox://WebviewScreen?url=http://u.urbox.vn/PB2gJsU0Zm&bottomNavBar=true",
          priority: 1,
        },
      ],
    },
  }
);
