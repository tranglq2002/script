db.privileges_brands.updateOne(
  { brandId: 4 },
  {
    $set: {
      privileges: [
        {
          name: {
            en: "Delites 30W Orange Juicer JC3000-GS",
            vi: "Máy vắt cam Delites JC3000-GS (Imei)",
          },
          price: 390000,
          dealPrice: 149000,
          image:
            "https://static.urbox.vn/app-cms/UrBoxPlus/DMX/OrangeJuicer.png",
          redirectUrl:
            "urbox://WebviewScreen?url=https://u.urbox.vn/BldW62wUHM&bottomNavBar=true",
          priority: 3,
        },
        {
          name: {
            en: "Comfee CVC-SBLA1(B) Handheld Vacuum Cleaner",
            vi: "Máy hút bụi Comfee CVC-SBLA1(B) (Imei)",
          },
          price: 889000,
          dealPrice: 499000,
          image:
            "https://static.urbox.vn/app-cms/UrBoxPlus/DMX/VacuumCleaner.png",
          redirectUrl:
            "urbox://WebviewScreen?url=https://u.urbox.vn/cBrft7dB9g&bottomNavBar=true",
          priority: 2,
        },
        {
          name: {
            en: "Bear BWP-T402301G 4 liter water filter thermos",
            vi: "Bình thủy điện lọc nước Bear BWP-T402301G 4L",
          },
          price: 2990000,
          dealPrice: 1490000,
          image: "https://static.urbox.vn/app-cms/UrBoxPlus/DMX/LiterWater.png",
          redirectUrl:
            "urbox://WebviewScreen?url=https://u.urbox.vn/UsQtdkN6Ci&bottomNavBar=true",
          priority: 1,
        },
      ],
      programDetail: {
        bannerImage: "https://static.urbox.vn/app-cms/UrBoxPlus/DMX/Banner.png",
        programInfor: {
          en: '<p><strong>1. Eligible participants:</strong></p><p>All users on the Urbox app who own the Urbox+ Membership Package</p><p><strong>2. Program period:</strong></p><p>From January 1, 2025 to January 31, 2025 or until further notice from UrBox.</p><p><strong>3. Promotion details:</strong></p><p>Up to 66% discount when purchasing products from Dien May Xanh.</p><p><strong>4. Policy:</strong></p><ul><li>Warranty and return policy: https://www.dienmayxanh.com/bao-hanh-doi-tra</li><li>Delivery policy: https://www.dienmayxanh.com/kinh-nghiem-hay/chinh-sach-giao-hang-lap-dat-1261528</li></ul><p><strong>Note:</strong></p><ul><li>When clicking "Shop Now", you will be redirected to a sales platform managed by a third party, which is solely responsible for all matters related to the goods and services provided on this platform. For any arising issues, please contact the hotline at 1800.1062.  </li><li>Product prices on the sales platform may be adjusted based on short-term promotions or the brand\'s sales policies at different times.</li></ul><p><strong>5. Hotline:</strong></p><ul><li>Complaints: 1800.1062 (8:00 - 21:30)</li><li>Warranty: 1900 232 464 (8:00 - 21:00)</li></ul>',
          vi: '<p><strong>1. Đối tượng nhận ưu đãi:</strong></p><p>Tất cả User trên ứng dụng Urbox có sở hữu Gói hội viên Urbox+</p><p><strong>2. Thời gian diễn ra chương trình:</strong></p><p>Từ ngày 01/01/2025 – 31/01/2025 hoặc đến khi có thông báo khác từ UrBox.</p><p><strong>3. Nội dung chương trình ưu đãi: </strong></p><p>Giảm giá đến 66% khi mua các sản phẩm từ Điện Máy Xanh.</p><p><strong>4. Chính sách mua hàng:</strong></p><ul><li>Chính sách bảo hành, đổi trả: https://www.dienmayxanh.com/bao-hanh-doi-tra</li><li>Chính sách giao hàng: https://www.dienmayxanh.com/kinh-nghiem-hay/chinh-sach-giao-hang-lap-dat-1261528</li></ul><p><strong>Lưu ý: </strong></p><ul><li>Khi bấm vào "Mua sắm ngay" Quý khách sẽ được chuyển sang nền tảng bán hàng do bên thứ 3 quản lý và chịu trách nhiệm về mọi vấn đề liên quan đến hàng hóa, dịch vụ được cung cấp trên nền tảng này. Mọi vấn để liên quan phát sinh trên nền tảng này, vui lòng liên hệ theo thông tin Hotline 1800.1062</li><li>Giá sản phẩm tại trang bán hàng có thể được điều chỉnh tùy vào các chương trình ưu đãi ngắn hạn hoặc chính sách bán hàng tùy thời điểm của thương hiệu.</li></ul><p><strong>5. Hotline khi Khách hàng cần hỗ trợ:</strong></p><ul><li>Khiếu nại: 1800.1063 (8:00 - 21:30)</li><li>Bảo hành: 1900 232 465 (8:00 - 21:00)</li></ul>',
        },
        buyingGuide: [
          {
            icon: "https://static.urbox.vn/app-cms/UrBoxPlus/DMX/IconStep1.png",
            title: {
              en: "Click on the product you want to purchase to be redirected to the shopping page.",
              vi: "Bấm chọn sản phẩm cần mua để được dẫn đến trang mua hàng",
            },
            description: {
              en: "After clicking “<strong>Show Now</strong>”, you will be redirected to the shopping page.\n\nHere, select the product you want to purchase and click “<strong>Buying Now</strong>”, which will then redirect you directly to the Cart containing this product on Dien May Xanh.",
              vi: "Sau khi nhấn “<strong>Mua sắm ngay</strong>”, bạn sẽ được chuyển đến trang mua hàng.\n\nTại đây, bạn chọn sản phẩm cần mua và chọn  “<strong>Mua ngay</strong>”, lúc này sẽ được chuyển trực tiếp đến trang Giỏ hàng chứa sản phẩm này của Điện Máy Xanh.",
            },
            guideImages: [
              "https://static.urbox.vn/app-cms/UrBoxPlus/DMX/Step1GuideImage1.png",
            ],
          },
          {
            icon: "https://static.urbox.vn/app-cms/UrBoxPlus/DMX/IconStep2.png",
            title: {
              en: "Choose a delivery method: “Home Delivery” or “Pick Up at Store”",
              vi: "Chọn phương thức nhận hàng “Giao hàng tận nơi” hoặc “Nhận tại siêu thị”",
            },
            description: {
              en: "Here, you can select your preferred delivery method.",
              vi: "Tại đây, bạn chọn hình thức giao hàng mong muốn.",
            },
            guideImages: [
              "https://static.urbox.vn/app-cms/UrBoxPlus/DMX/Step2GuideImage1.png",
              "https://static.urbox.vn/app-cms/UrBoxPlus/DMX/Step2GuideImage2.png",
            ],
          },
          {
            icon: "https://static.urbox.vn/app-cms/UrBoxPlus/DMX/IconStep3.png",
            title: {
              en: "Proceed with payment as instructed on the Dien May Xanh website.",
              vi: "Thanh toán như hướng dẫn tại website Điện Máy Xanh",
            },
            description: {
              en: 'Click on the blue area to provide your delivery information. After filling in the delivery details, select "<strong>Confirm</strong>" to return to the cart.\n\nNext, review your order and proceed with the payment as instructed on the Dien May Xanh website.',
              vi: 'Chọn vào vùng màu xanh để cung cấp thông tin giao hàng. Sau khi điền thông tin giao hàng, chọn "<strong>Xác Nhận</strong>" để quay về giỏ hàng.\n\nTiếp theo, hãy kiểm tra lại đơn hàng và thực hiện thanh toán theo hướng dẫn tại website Điện Máy Xanh.',
            },
            guideImages: [
              "https://static.urbox.vn/app-cms/UrBoxPlus/DMX/Step3GuideImage1.png",
              "https://static.urbox.vn/app-cms/UrBoxPlus/DMX/Step3GuideImage2.png",
              "https://static.urbox.vn/app-cms/UrBoxPlus/DMX/Step3GuideImage3.png",
              "https://static.urbox.vn/app-cms/UrBoxPlus/DMX/Step3GuideImage4.png",
            ],
          },
        ],
        termAndCondition: {
          en: "",
          vi: "",
        },
      },
      redirectUrl:
        "urbox://WebviewScreen?url=https://landing.urbox.vn/privatesale_dmx&bottomNavBar=true",
    },
  }
);

db.privileges_brands.updateOne(
  { brandId: 3 },
  {
    $set: {
      tagLine: {
        en: "Get up to 79% off—shop freely at The Gioi Di Dong",
        vi: "Giảm đến 79% mua sắm thả ga từ Thế Giới Di Động",
      },
      privileges: [
        {
          name: {
            en: "Women's Watch Rose Gold",
            vi: "Đồng hồ kim Nữ dây Kim loại Vàng hồng",
          },
          price: 1430000,
          dealPrice: 377000,
          image:
            "https://static.urbox.vn/app-cms/UrBoxPlus/TGDD/WatchRoseGold.png",
          redirectUrl:
            "urbox://WebviewScreen?url=https://u.urbox.vn/AvoWSrlgsc&bottomNavBar=true",
          priority: 3,
        },
        {
          name: {
            en: "Xiaomi Smart Band 9 Titan Grey (BHR8642GL)",
            vi: "Xiaomi Smart Band 9 Titan Xám (BHR8642GL)",
          },
          price: 990000,
          dealPrice: 790000,
          image:
            "https://static.urbox.vn/app-cms/UrBoxPlus/TGDD/SmartBand9.png",
          redirectUrl:
            "urbox://WebviewScreen?url=https://u.urbox.vn/eY8CTU0rZq&bottomNavBar=true",
          priority: 2,
        },
        {
          name: {
            en: "Bluetooth Rezo Wooden Box",
            vi: "Loa Bluetooth Rezo Wooden Box",
          },
          price: 890000,
          dealPrice: 370000,
          image:
            "https://static.urbox.vn/app-cms/UrBoxPlus/TGDD/BluetoothRezo.png",
          redirectUrl:
            "urbox://WebviewScreen?url=https://u.urbox.vn/xdnEEC8Z9b&bottomNavBar=true",
          priority: 1,
        },
      ],
      programDetail: {
        bannerImage:
          "https://static.urbox.vn/app-cms/UrBoxPlus/TGDD/Banner.png",
        programInfor: {
          en: '<p><strong>1. Eligible participants:</strong></p><p>All users on the Urbox app who own the Urbox+ Membership Package</p><p><strong>2. Program period:</strong></p><p>From January 1, 2025 to January 31, 2025 or until further notice from UrBox.</p><p><strong>3. Promotion details:</strong></p><p>Up to 79% discount when purchasing products from The Gioi Di Dong.</p><p><strong>4. Policy:</strong></p><ul><li>Warranty and return policy: https://www.thegioididong.com/chinh-sach-bao-hanh-san-pham</li><li>Delivery policy: https://www.thegioididong.com/giao-hang</li></ul><p><strong>Note:</strong></p><ul><li>When clicking "Shop Now", you will be redirected to a sales platform managed by a third party, which is solely responsible for all matters related to the goods and services provided on this platform. For any arising issues, please contact the hotline at 1800.1062.  </li><li>Product prices on the sales platform may be adjusted based on short-term promotions or the brand\'s sales policies at different times.</li></ul><p><strong>5. Hotline:</strong></p><ul><li>Complaints: 1800.1062 (8:00 - 21:30)</li><li>Warranty: 1900 232 464 (8:00 - 21:00)</li></ul>',
          vi: '<p><strong>1. Đối tượng nhận ưu đãi: </strong></p><p>Tất cả User trên ứng dụng Urbox có sở hữu Gói hội viên Urbox+</p><p><strong>2. Thời gian diễn ra chương trình:</strong></p><p>Từ ngày 01/01/2025 – 31/01/2025 hoặc đến khi có thông báo khác từ UrBox.</p><p><strong>3. Nội dung chương trình ưu đãi: </strong></p><p>Giảm giá đến 79% khi mua các sản phẩm từ Thế Giới Di Động.</p><p><strong>4. Chính sách mua hàng:</strong></p><ul><li>Chính sách bảo hành, đổi trả: https://www.thegioididong.com/chinh-sach-bao-hanh-san-pham</li><li>Chính sách giao hàng: https://www.thegioididong.com/giao-hang</li></ul><p><strong>Lưu ý: </strong></p><ul><li>Khi bấm vào "Mua sắm ngay" Quý khách sẽ được chuyển sang nền tảng bán hàng do bên thứ 3 quản lý và chịu trách nhiệm về mọi vấn đề liên quan đến hàng hóa, dịch vụ được cung cấp trên nền tảng này. Mọi vấn để liên quan phát sinh trên nền tảng này, vui lòng liên hệ theo thông tin Hotline 1800.1062</li><li>Giá sản phẩm tại trang bán hàng có thể được điều chỉnh tùy vào các chương trình ưu đãi ngắn hạn hoặc chính sách bán hàng tùy thời điểm của thương hiệu.</li></ul><p><strong>5. Hotline khi Khách hàng cần hỗ trợ:</strong></p><ul><li>Khiếu nại: 1800.1062 (8:00 - 21:30)</li><li>Bảo hành: 1900 232 464 (8:00 - 21:00)</li></ul>',
        },
        buyingGuide: [
          {
            icon: "https://static.urbox.vn/app-cms/UrBoxPlus/TGDD/IconStep1.png",
            title: {
              en: "Click on the product you want to purchase to be redirected to the shopping page.",
              vi: "Bấm chọn sản phẩm cần mua để được dẫn đến trang mua hàng",
            },
            description: {
              en: "After clicking “<strong>Shop Now</strong>”, you will be redirected to the shopping page.\n\nHere, select the product you want to purchase and click “<strong>Buy Now</strong>”, you will then be redirected directly to the Cart containing this product on The Gioi Di Dong.",
              vi: "Sau khi nhấn “<strong>Mua sắm ngay</strong>”, bạn sẽ được chuyển  đến trang mua hàng.\n\nTại đây, bạn chọn sản phẩm cần mua và chọn  “<strong>Mua ngay</strong>”, lúc này bạn sẽ được chuyển trực tiếp đến Giỏ hàng chứa sản phẩm này của Thế Giới Di Động.",
            },
            guideImages: [
              "https://static.urbox.vn/app-cms/UrBoxPlus/TGDD/Step1GuideImage1.png",
            ],
          },
          {
            icon: "https://static.urbox.vn/app-cms/UrBoxPlus/TGDD/IconStep2.png",
            title: {
              en: "Choose a delivery method: “Home Delivery” or “Pick Up at Store”.",
              vi: "Chọn phương thức nhận hàng “Giao hàng tận nơi” hoặc “Nhận tại siêu thị”",
            },
            description: {
              en: "Here, select your preferred delivery method.",
              vi: "Tại đây, bạn chọn hình thức giao hàng mong muốn.",
            },
            guideImages: [
              "https://static.urbox.vn/app-cms/UrBoxPlus/TGDD/Step2GuideImage1.png",
            ],
          },
          {
            icon: "https://static.urbox.vn/app-cms/UrBoxPlus/TGDD/IconStep3.png",
            title: {
              en: "Fill in the delivery and payment information as instructed on the The Gioi Di Dong website.",
              vi: "Điền thông tin giao hàng và thanh toán như hướng dẫn tại website Thế Giới Di Động",
            },
            description: {
              en: "Click on the blue area to provide your delivery information. After filling in the delivery details, select “<strong>Confirm</strong>” to return to the cart.\n\nNext, review your order and proceed with the payment as instructed on the The Gioi Di Dong website.",
              vi: "Chọn vào vùng màu xanh để cung cấp thông tin giao hàng. Sau khi điền thông tin giao hàng, chọn “<strong>Xác Nhận</strong>” để quay về giỏ hàng.\n\nTiếp theo, hãy kiểm tra lại đơn hàng và thực hiện thanh toán theo hướng dẫn tại website Thế Giới Di Động.",
            },
            guideImages: [
              "https://static.urbox.vn/app-cms/UrBoxPlus/TGDD/Step3GuideImage1.png",
              "https://static.urbox.vn/app-cms/UrBoxPlus/TGDD/Step3GuideImage2.png",
              "https://static.urbox.vn/app-cms/UrBoxPlus/TGDD/Step3GuideImage3.png",
              "https://static.urbox.vn/app-cms/UrBoxPlus/TGDD/Step3GuideImage4.png",
            ],
          },
        ],
        termAndCondition: {
          en: "",
          vi: "",
        },
      },
      redirectUrl:
        "urbox://WebviewScreen?url=https://u.urbox.vn/CWnjyx9Je2&bottomNavBar=true",
    },
  }
);

db.privileges_brands.insertOne({
  brandId: 10,
  brandLogo: "https://static.urbox.vn/app-cms/UrBoxPlus/Techmall/Logo.png",
  brandName: "Techmall",
  tagLine: {
    en: "Discounts up to 50% from HiFuture, Mark Ryden, Rockspace brands",
    vi: "Ưu đãi đến 50% từ các thương hiệu HiFuture, Mark Ryden, Rockspace",
  },
  privileges: [
    {
      name: {
        en: "ROC Crayon Shinchan Air Bubble Mini Handheld Fan",
        vi: "Quạt Cầm Tay Mini ROCK Crayon Shinchan Air Bubble (3W, 8H, 1200mAh, 3-Speed Power)",
      },
      price: 209000,
      dealPrice: 119700,
      image:
        "https://static.urbox.vn/app-cms/UrBoxPlus/Techmall/CrayonShinchanAir.png",
      redirectUrl:
        "urbox://WebviewScreen?url=https://u.urbox.vn/mhz2ZMs0dn&bottomNavBar=true",
      priority: 3,
    },
    {
      name: {
        en: "Bluetooth Karaoke HiFuture Vocalist 100 (25W)",
        vi: "Loa Bluetooth Karaoke HiFuture Vocalist 100 (25W)",
      },
      price: 1026000,
      dealPrice: 828450,
      image:
        "https://static.urbox.vn/app-cms/UrBoxPlus/Techmall/BluetoothKaraokeHiFuture.png",
      redirectUrl:
        "urbox://WebviewScreen?url=https://u.urbox.vn/mDXJ4koXwL&bottomNavBar=true",
      priority: 2,
    },
    {
      name: {
        en: "Balo Laptop Mark Ryden Muke MR-1611 (YKK Zipper, Chống Thấm, MR 1611)",
        vi: "Balo Laptop Mark Ryden Muke MR-1611 (YKK Zipper, Chống Thấm, MR 1611)",
      },
      price: 882000,
      dealPrice: 723450,
      image:
        "https://static.urbox.vn/app-cms/UrBoxPlus/Techmall/BaloLaptop.png",
      redirectUrl:
        "urbox://WebviewScreen?url=https://u.urbox.vn/0ntavYCkTB&bottomNavBar=true",
      priority: 1,
    },
  ],
  programDetail: {
    bannerImage:
      "https://static.urbox.vn/app-cms/UrBoxPlus/Techmall/Banner.png",
    programInfor: {
      vi: '<p><strong>1. Đối tượng nhận ưu đãi:</strong></p><p>Tất cả User trên ứng dụng Urbox có sở hữu Gói hội viên Urbox+</p><p><strong>2. Thời gian diễn ra chương trình:</strong></p><p>Từ 04/03/2025 đến khi có thông báo.</p><p><strong>3. Nội dung chương trình ưu đãi:</strong></p><p>Giảm đến 50% từ các thương hiệu HiFuture, Mark Ryden, Rockspace.</p><p><strong>4. Chính sách giao hàng:</strong></p><p>https://techmall.vn/chinh-sach-giao-hang/</p><p><strong>5. Chính sách bảo hành:</strong></p><p>https://techmall.vn/chinh-sach-bao-hanh/</p><p><strong>6. Chính sách đổi hàng:</strong></p><p>https://techmall.vn/refund_returns/</p><p><strong>Lưu ý: </strong></p><p>- Khi bấm vào "Mua sắm ngay" Quý khách sẽ được chuyển sang nền tảng bán hàng do bên thứ 3 quản lý và chịu trách nhiệm về mọi vấn đề liên quan đến hàng hóa, dịch vụ được cung cấp trên nền tảng này. Mọi vấn để liên quan phát sinh trên nền tảng này, vui lòng liên hệ theo thông tin Hotline:</p><p>(028) 7109.95.96 (08:30-21:30)</p><p>- Giá sản phẩm tại trang bán hàng có thể được điều chỉnh tùy vào các chương trình ưu đãi ngắn hạn hoặc chính sách bán hàng tùy thời điểm của thương hiệu.</p><p><strong>7. Giới thiệu về Techmall:</strong></p><p>Nhà phân phối Ủy Quyền chính hãng tại Việt Nam của các thương hiệu Baseus | HiFuture | ROCK | Joyroom | Choetech | Usams | Xiaomi | Tronsmart | Ugreen | Havit.</p>',
      en: '<p><strong>1. Eligible participants:</strong></p><p>All users on the Urbox app who own the Urbox+ Membership.</p><p><strong>2. Program period:</strong></p><p>From 04/03/2025 until further notice.</p><p><strong>3. Promotion details:</strong></p><p>Up to 50% off from HiFuture, Mark Ryden, Rockspace.</p><p><strong>4. Delivery policy:</strong></p><p>https://techmall.vn/chinh-sach-giao-hang/</p><p><strong>5. Warranty policy:</strong></p><p>https://techmall.vn/chinh-sach-bao-hanh/</p><p><strong>6. Refund and returns:</strong></p><p>https://techmall.vn/refund_returns/</p><p><strong>Note:</strong></p><p>- When you click "Shop now", you will be transferred to a sales platform managed by a third party and will be responsible for all issues related to goods and services provided on this platform. For any related issues arising on this platform, please contact the Hotline information:</p><p>(028) 7109.95.96 (08:30-21:30)</p><p>- Product prices on the sales page may be adjusted depending on short-term promotional programs or sales policies from time to time of the brand.</p><p><strong>7. About TechMall Vietnam:</strong></p><p>Genuinely distributed by TechMall Vietnam Distributor (Genuine Authorized Distributor in Vietnam of the brands Baseus | HiFuture | ROCK | Joyroom | Choetech | Usams | Xiaomi | Tronsmart | Ugreen | Havit)</p>',
    },
    buyingGuide: [
      {
        icon: "https://static.urbox.vn/app-cms/UrBoxPlus/IconStep1.png",
        title: {
          en: "Select the product you want to buy",
          vi: "Chọn sản phẩm muốn mua",
        },
        description: {
          en: "After selecting “<strong>Shop Now</strong>” you will be redirected to TechMall's shopping page. Choose the product you want to buy.\nOn the Product Details page, select the quantity and click “<strong>Add to Cart</strong>” to add the product to your shopping cart.",
          vi: "Sau khi chọn “<strong>Mua sắm ngay</strong>” bạn sẽ được dẫn đến trang mua hàng của TechMall. Hãy chọn sản phẩm bạn muốn mua.\nTại trang Chi tiết sản phẩm, bạn chọn số lượng và bấm “<strong>Chọn mua</strong>”, sản phẩm sẽ được thêm vào giỏ hàng.",
        },
        guideImages: [
          "https://static.urbox.vn/app-cms/UrBoxPlus/Techmall/Step1GuideImage1.png",
          "https://static.urbox.vn/app-cms/UrBoxPlus/Techmall/Step1GuideImage2.png",
          "https://static.urbox.vn/app-cms/UrBoxPlus/Techmall/Step1GuideImage3.png",
        ],
      },
      {
        icon: "https://static.urbox.vn/app-cms/UrBoxPlus/IconStep2.png",
        title: {
          en: "Click on the Cart to review your items and proceed to Checkout",
          vi: "Bấm vào Giỏ hàng để kiểm tra và chọn Thanh toán",
        },
        description: {
          en: "Next, click on the “<strong>Cart</strong>” icon in the top right corner to quickly view the items in your cart.\nAfter confirming the products meet your needs, select “<strong>Checkout</strong>” to proceed.",
          vi: "Tiếp theo, bạn chọn vào biểu tượng “<strong>Giỏ hàng</strong>” ở góc phải màn hình để xem nhanh sản phẩm trong giỏ.\nSau khi kiểm tra sản phẩm đúng với nhu cầu thì chọn “<strong>Thanh toán</strong>”.",
        },
        guideImages: [
          "https://static.urbox.vn/app-cms/UrBoxPlus/Techmall/Step2GuideImage1.png",
          "https://static.urbox.vn/app-cms/UrBoxPlus/Techmall/Step2GuideImage2.png",
        ],
      },
      {
        icon: "https://static.urbox.vn/app-cms/UrBoxPlus/IconStep3.png",
        title: {
          en: "Enter your shipping information and select a payment method",
          vi: "Điền thông tin giao hàng, chọn hình thức thanh toán",
        },
        description: {
          en: "On the “<strong>Payment & Delivery</strong>” screen, enter your shipping information as instructed and select your preferred payment method.\nFinally, click “<strong>Place Order</strong>” to complete your purchase.",
          vi: "Tại màn hình “<strong>Thanh toán và giao hàng</strong>”, hãy điền thông tin giao hàng như hướng dẫn và chọn hình thức thanh toán mong muốn.\nCuối cùng, hãy chọn “<strong>Đặt hàng</strong>” để hoàn tất đơn đặt hàng.",
        },
        guideImages: [
          "https://static.urbox.vn/app-cms/UrBoxPlus/Techmall/Step3GuideImage1.png",
          "https://static.urbox.vn/app-cms/UrBoxPlus/Techmall/Step3GuideImage2.png",
        ],
      },
      {
        icon: "https://static.urbox.vn/app-cms/UrBoxPlus/IconStep4.png",
        title: {
          en: "If you choose bank transfer, use the order number in the payment description.",
          vi: "Nếu chọn hình thức chuyển khoản, dùng mã đơn hàng trong phần nội dung thanh toán",
        },
        description: {
          en: "If you choose Bank Transfer as your payment method, after clicking “<strong>Place Order</strong>” you will be redirected to the bank transfer information page.\nFollow the instructions to complete the payment. Once the transfer is made, TechMall will contact you to confirm your order.",
          vi: "Nếu chọn hình thức thanh toán là Chuyển khoản ngân hàng, sau khi chọn “<strong>Đặt hàng</strong>” bạn sẽ được chuyển đến trang thông tin chuyển khoản ngân hàng.\nTại đây, hãy thực hiện thanh toán theo hướng dẫn. Sau khi thanh toán, TechMall sẽ liên hệ để xác nhận đơn hàng.",
        },
        guideImages: [
          "https://static.urbox.vn/app-cms/UrBoxPlus/Techmall/Step4GuideImage1.png",
          "https://static.urbox.vn/app-cms/UrBoxPlus/Techmall/Step4GuideImage2.png",
          "https://static.urbox.vn/app-cms/UrBoxPlus/Techmall/Step4GuideImage3.png",
        ],
      },
    ],
    termAndCondition: {
      en: "",
      vi: "",
    },
  },
  redirectUrl:
    "urbox://WebviewScreen?url=https://u.urbox.vn/hp3t2FgIpc&bottomNavBar=true",
  priority: 8,
});

db.privileges_brands.updateOne(
  { brandId: 9 },
  {
    $set: {
      privileges: [
        {
          name: {
            en: "Baseus starspeed 1 for-3 fast charging datacable usb to mlc 3.5A 1 2m white",
            vi: "Cáp Sạc Đa Năng Baseus StarSpeed 1-for-3 Fast Charging Data Cable USB to Micro Lightning Type C 3.5A",
          },
          price: 149000,
          dealPrice: 81900,
          image:
            "https://static.urbox.vn/app-cms/UrBoxPlus/Baseus/FastCharging.png",
          redirectUrl:
            "urbox://WebviewScreen?url=https://u.urbox.vn/JlpnjU5dA2&bottomNavBar=true",
          priority: 3,
        },
        {
          name: {
            en: "Baseus Qpow2 dual cable digital display fasst charge power bank 1000mah 22.W",
            vi: "Pin Dự Phòng Sạc Nhanh Baseus Qpow2 Dual-Cable Digital Display 22.5W",
          },
          price: 789000,
          dealPrice: 469350,
          image:
            "https://static.urbox.vn/app-cms/UrBoxPlus/Baseus/Qpow2DualCable.png",
          redirectUrl:
            "urbox://WebviewScreen?url=https://u.urbox.vn/ontpLVq2W0&bottomNavBar=true",
          priority: 2,
        },
        {
          name: {
            en: "Baseus GaN5 Fast Charger 1C 20W for iPhone/Samsung",
            vi: "Bộ Sạc Nhanh 20W Baseus GaN5 Fast Charger 1C cho iPhone/Samsung",
          },
          price: 279000,
          dealPrice: 217350,
          image:
            "https://static.urbox.vn/app-cms/UrBoxPlus/Baseus/GaN5FastCharger.png",
          redirectUrl:
            "urbox://WebviewScreen?url=https://u.urbox.vn/iS7qNJ6Yss&bottomNavBar=true",
          priority: 1,
        },
      ],
      redirectUrl:
        "urbox://WebviewScreen?url=https://u.urbox.vn/JLuFpAt4Nc&bottomNavBar=true",
    },
  }
);

db.privileges_brands.insertOne({
  brandId: 11,
  brandLogo: "https://static.urbox.vn/app-cms/UrBoxPlus/PPVN/Logo.png",
  brandName: "Phân phối Việt Nam",
  tagLine: {
    en: "Get up to 60% off on authentic products from Senko, Aisa, Tefal, Philips, Michelin, Bullsone, Rapido, and more!",
    vi: "Giảm đến 60% sản phẩm chính hãng từ Senko, Aisa, Tefal, Philips, Michelin, Bullsone, Rapido,...",
  },
  privileges: [
    {
      name: {
        en: "Rapido RVC-600H Handheld Vacuum Cleaner",
        vi: "Máy hút bụi cầm tay Rapido RVC-600H - Hàng chính hãng",
      },
      price: 948000,
      dealPrice: 486000,
      image: "https://static.urbox.vn/app-cms/UrBoxPlus/PPVN/VacuumCleaner.png",
      redirectUrl:
        "urbox://WebviewScreen?url=https://u.urbox.vn/xR4lqvT3z1&bottomNavBar=true",
      priority: 3,
    },
    {
      name: {
        en: "Senko Hood Fan L1638 - 47Wh",
        vi: "Quạt Lửng Ống Nhựa Senko L1638 - Công suất 47W",
      },
      price: 561000,
      dealPrice: 254000,
      image: "https://static.urbox.vn/app-cms/UrBoxPlus/PPVN/SenkoHoodFan.png",
      redirectUrl:
        "urbox://WebviewScreen?url=https://u.urbox.vn/LyDuztJdB0&bottomNavBar=true",
      priority: 2,
    },
    {
      name: {
        en: "JISULIFE FA42 Mini Handheld Fan 2000mAh",
        vi: "Quạt cầm tay Mini JISULIFE FA42 pin 2000mAh",
      },
      price: 333000,
      dealPrice: 142000,
      image: "https://static.urbox.vn/app-cms/UrBoxPlus/PPVN/HandheldFan.png",
      redirectUrl:
        "urbox://WebviewScreen?url=https://u.urbox.vn/6aFINuTeaU&bottomNavBar=true",
      priority: 1,
    },
  ],
  programDetail: {
    bannerImage: "https://static.urbox.vn/app-cms/UrBoxPlus/PPVN/Banner.png",
    programInfor: {
      en: "<p><strong>1. Eligible participants:</strong></p><p>All users on the Urbox app who own the Urbox+ Membership.</p><p><strong>2. Program period:</strong></p><p>From 07/03/2025 until further notice from UrBox.</p><p><strong>3. Promotion details:</strong></p><p>Diverse range of genuine products up to 60% off from Vietnamese Distributors.</p><p><strong>4. Warranty policy:</strong></p><p>Details are listed on the sales page of each product.</p><p><strong>5. Payment Method:</strong></p><p>Internet Banking or cash payment upon receipt.</p><p><strong>Note:</strong></p><p>You will be transferred to an online sales platform managed by a third party and will be responsible for all issues related to goods and services provided on this platform. UrBox only plays a preferential communication role. For any related issues arising on this platform, please contact the following information: Vietnam Distribution Import-Export Trading Services Company Limited </p><p>(Hotline: 0909 320 584).</p><p><strong>6. Brand Introduction:</strong></p><p>Vietnam Distribution - Specializing in providing genuine products from reputable brands such as Senko, Aisa, Tefal, Philips, Sharp, Michelin, Bullsone, Rapido, Comet and many other brands.</p>",
      vi: "<p><strong>1. Đối tượng nhận ưu đãi: </strong></p><p>Tất cả User trên ứng dụng Urbox có sở hữu Gói hội viên Urbox+</p><p><strong>2. Thời gian diễn ra chương trình:</strong></p><p>Từ 07/03/2025 đến khi có thông báo.</p><p><strong>3. Nội dung chương trình ưu đãi: </strong></p><p>Đa dạng sản phẩm chính hãng giảm đến 60% từ Phân Phối Việt Nam.</p><p><strong>4. Chính sách bảo hành: </strong></p><p>Được ghi chi tiết tại trang bán hàng của mỗi sản phẩm.</p><p><strong>5. Hình thức thanh toán:</strong></p><p>Chuyển khoản hoặc thanh toán tiền mặt khi nhận hàng.</p><p><strong>Lưu ý: </strong></p><p>Quý khách sẽ được chuyển sang nền tảng bán hàng trực tuyến do bên thứ ba quản lý và chịu trách nhiệm về mọi vấn đề liên quan đến hàng hóa, dịch vụ được cung cấp trên nền tảng này. UrBox chỉ đóng vai trò truyền thông ưu đãi. Mọi vấn đề liên quan phát sinh trên nền tảng này, vui lòng liên hệ theo thông tin: Công Ty TNHH Dịch Vụ Thương Mại Xuất Nhập Khẩu Phân Phối Việt Nam</p><p>(Hotline: 0909 320 584).</p><p><strong>6. Giới thiệu thương hiệu:</strong></p><p>Phân Phối Việt Nam - Chuyên cung cấp các mặt hàng chính hãng từ các thương hiệu uy tín như Senko, Aisa , Tefal , Philips , Sharp, Michelin, Bullsone, Rapido, Comet và nhiều thương hiệu khác.</p>",
    },
    buyingGuide: [
      {
        icon: "https://static.urbox.vn/app-cms/UrBoxPlus/IconStep1.png",

        title: {
          vi: "Chọn sản phẩm muốn mua và bấm vào giỏ hàng",
          en: "Select the product you want to buy and click on cart",
        },
        description: {
          en: "After selecting “<strong>Shop Now</strong>” you will be directed to the Vietnam Distribution shopping page. Select the product you want to buy.\n\nOn the Product Details page, select the quantity and click “<strong>Buy Now</strong>” to proceed to payment or select “<strong>Add to Cart</strong>” and continue to select other products.\n\nNext, select the Menu bar on the right, select “<strong>Cart</strong>” to go to the Cart page.",
          vi: "Sau khi chọn “<strong>Mua sắm ngay</strong>” bạn sẽ được dẫn đến trang mua hàng của Phân Phối Việt Nam. Hãy chọn sản phẩm bạn muốn mua.\n\nTại trang Chi tiết sản phẩm, bạn chọn số lượng và bấm “<strong>Mua ngay</strong>” để tiến hành thanh toán hoặc chọn “<strong>Thêm vào giỏ hàng</strong>” và tiếp tục chọn sản phẩm khác.\n\nTiếp theo, bạn chọn thanh Menu bên phải, chọn “<strong>Giỏ hàng</strong>” để đến trang Giỏ hàng.",
        },
        guideImages: [
          "https://static.urbox.vn/app-cms/UrBoxPlus/PPVN/Step1GuideImage1.png",
          "https://static.urbox.vn/app-cms/UrBoxPlus/PPVN/Step1GuideImage2.png",
          "https://static.urbox.vn/app-cms/UrBoxPlus/PPVN/Step1GuideImage3.png",
          "https://static.urbox.vn/app-cms/UrBoxPlus/PPVN/Step1GuideImage4.png",
          "https://static.urbox.vn/app-cms/UrBoxPlus/PPVN/Step1GuideImage5.png",
        ],
      },
      {
        icon: "https://static.urbox.vn/app-cms/UrBoxPlus/IconStep2.png",
        title: {
          en: "Fill in shipping information",
          vi: "Điền thông tin giao hàng",
        },
        description: {
          en: "At the Shopping Cart screen, check the products that match your needs. Next, fill in the shipping information according to the instructions from Vietnam Distribution.\n\nAfter filling in all the information, select “<strong>Payment</strong>” and complete the order.",
          vi: "Tại màn hình Giỏ hàng, hãy kiểm tra sản phẩm đúng với nhu cầu của bạn. Tiếp theo, bạn điền thông tin giao hàng theo hướng dẫn từ Phân Phối Việt Nam.\n\nSau khi điền thông tin đầy đủ, bạn chọn “<strong>Thanh toán</strong>” và hoàn tất đặt hàng.",
        },
        guideImages: [
          "https://static.urbox.vn/app-cms/UrBoxPlus/PPVN/Step2GuideImage1.png",
          "https://static.urbox.vn/app-cms/UrBoxPlus/PPVN/Step2GuideImage2.png",
          "https://static.urbox.vn/app-cms/UrBoxPlus/PPVN/Step2GuideImage3.png",
          "https://static.urbox.vn/app-cms/UrBoxPlus/PPVN/Step2GuideImage4.png",
          "https://static.urbox.vn/app-cms/UrBoxPlus/PPVN/Step2GuideImage5.png",
        ],
      },
      {
        icon: "https://static.urbox.vn/app-cms/UrBoxPlus/IconStep3.png",
        title: {
          en: "The store will contact you to confirm your order and payment method",
          vi: "Cửa hàng sẽ liên hệ quý khách để xác nhận đơn hàng và hình thức thanh toán",
        },
        description: {
          en: "After selecting “<strong>Checkout</strong>”, you will see the Order Successful screen. The store will contact you to confirm the order and payment method.",
          vi: "Sau khi chọn “<strong>Thanh toán</strong>”, bạn sẽ nhìn thấy màn hình Đặt hàng thành công. Cửa hàng sẽ liên hệ để xác nhận đơn hàng và hình thức thanh toán.",
        },
        guideImages: [
          "https://static.urbox.vn/app-cms/UrBoxPlus/PPVN/Step3GuideImage1.png",
        ],
      },
    ],
    termAndCondition: {
      en: "",
      vi: "",
    },
  },
  redirectUrl:
    "urbox://WebviewScreen?url=https://u.urbox.vn/kjVYIdGiuP&bottomNavBar=true",
  priority: 6,
});
