db.privileges_brands.updateOne(
  { brandId: 3 },
  {
    $set: {
      privileges: [
        {
          name: {
            en: "Adapter Type C PD GaN5S 30W Baseus",
            vi: "Adapter Sạc Type C PD GaN5S 30W Baseus",
          },
          price: 420000,
          dealPrice: 170000,
          image:
            "https://static.urbox.vn/app-cms/UrBoxPlus/TGDD/AdapterBaseus.png",
          redirectUrl:
            "urbox://WebviewScreen?url=http://u.urbox.vn/wQ6Phfp4Hj&bottomNavBar=true",
          priority: 3,
        },
        {
          name: {
            en: "Xiaomi Smart Band 8 Black",
            vi: "Xiaomi Smart Band 8 Đen ",
          },
          price: 990000,
          dealPrice: 690000,
          image:
            "https://static.urbox.vn/app-cms/UrBoxPlus/TGDD/XiaomiSmartBand.png",
          redirectUrl:
            "urbox://WebviewScreen?url=http://u.urbox.vn/gWfUGUXshv&bottomNavBar=true",
          priority: 2,
        },
        {
          name: {
            en: "Bluetooth Rezo Light K238",
            vi: "Loa Bluetooth Rezo Light K238",
          },
          price: 750000,
          dealPrice: 475000,
          image:
            "https://static.urbox.vn/app-cms/UrBoxPlus/TGDD/BluetoothRezoLight.png",
          redirectUrl:
            "urbox://WebviewScreen?url=http://u.urbox.vn/xODVwYHVJN&bottomNavBar=true",
          priority: 1,
        },
      ],
    },
  }
);
