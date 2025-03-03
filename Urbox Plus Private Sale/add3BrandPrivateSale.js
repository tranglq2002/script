db.privileges_brands.updateOne({ brandId: 2 }, { $set: { priority: 14 } });

db.privileges_brands.insertOne({
  brandId: 4,
  brandLogo: "https://static.urbox.vn/app-cms/UrBoxPlus/DMX/Logo.png",
  brandName: "Điện Máy Xanh",
  tagLine: {
    en: "Get up to 66% off for unlimited shopping at Dien May Xanh!",
    vi: "Giảm đến 66% mua sắm thả ga từ Điện Máy Xanh",
  },
  privileges: [
    {
      name: {
        en: "Deerma DX118C Pro Handheld Vacuum Cleaner",
        vi: "Máy hút bụi Deerma DX118C Pro",
      },
      price: 890000,
      dealPrice: 490000,
      image: "https://static.urbox.vn/app-cms/UrBoxPlus/DMX/VacuumCleaner.png",
      redirectUrl: "https://u.urbox.vn/XtPl2iNuKE",
      priority: 3,
    },
    {
      name: {
        en: "AVA KDF-593D 7.5 liter oil-free fryer",
        vi: "Nồi chiên không dầu Ava KDF-593D 7.5L",
      },
      price: 2890000,
      dealPrice: 890000,
      image: "https://static.urbox.vn/app-cms/UrBoxPlus/DMX/OilFreeFryer.png",
      redirectUrl: "https://u.urbox.vn/2ChdnQvmLf",
      priority: 2,
    },
    {
      name: {
        en: "BlueStone 1.5 liter electronic rice cooker RCB-5946",
        vi: "Nồi cơm điện tử BlueStone RCB-5946-1.5L",
      },
      price: 2499000,
      dealPrice: 1290000,
      image: "https://static.urbox.vn/app-cms/UrBoxPlus/DMX/RiceCooking.png",
      redirectUrl: "https://u.urbox.vn/fQe9dgj7hT",
      priority: 1,
    },
  ],
  programDetail: {
    bannerImage: "https://static.urbox.vn/app-cms/UrBoxPlus/DMX/Banner.png",
    programInfor: {
      en: "<p><strong>1. Eligible participants:</strong></p><p>All users on the Urbox app who own the Urbox+ Membership Package</p><p><strong>2. Program period:</strong></p><p>From January 1, 2025 to January 31, 2025 or until further notice from UrBox.</p><p><strong>3. Promotion details:</strong></p><p>Up to 66% discount when purchasing products from Dien May Xanh.</p><p><strong>4. Policy:</strong></p><ul><li>Warranty and return policy: https://www.thegioididong.com/chinh-sach-bao-hanh-san-pham</li><li>Delivery policy: https://www.dienmayxanh.com/kinh-nghiem-hay/chinh-sach-giao-hang-lap-dat-1261528</li></ul><p><strong>5. Hotline:</strong></p><ul><li>Complaints: 1800.1062 (8:00 - 21:30)</li><li>Warranty: 1900 232 464 (8:00 - 21:00)</li></ul>",
      vi: "<p><strong>1. Đối tượng nhận ưu đãi: </strong></p><p>Tất cả User trên ứng dụng Urbox có sở hữu Gói hội viên Urbox+</p><p><strong>2. Thời gian diễn ra chương trình:</strong></p><p>Từ ngày 01/01/2025 – 31/01/2025 hoặc đến khi có thông báo khác từ UrBox.</p><p><strong>3. Nội dung chương trình ưu đãi: </strong></p><p>Giảm giá đến 66% khi mua các sản phẩm từ Điện Máy Xanh.</p><p><strong>4. Chính sách mua hàng:</strong></p><ul><li>Chính sách bảo hành, đổi trả: https://www.dienmayxanh.com/bao-hanh-doi-tra</li><li>Chính sách giao hàng: https://www.dienmayxanh.com/kinh-nghiem-hay/chinh-sach-giao-hang-lap-dat-1261528</li></ul><p><strong>5. Hotline khi Khách hàng cần hỗ trợ:</strong></p><ul><li>Khiếu nại: 1800.1063 (8:00 - 21:30)</li><li>Bảo hành: 1900 232 465 (8:00 - 21:00)</li></ul>",
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
  redirectUrl: "https://landing.urbox.vn/privatesale_dmx",
  priority: 15,
});

db.privileges_brands.insertOne({
  brandId: 5,
  brandLogo: "https://static.urbox.vn/app-cms/UrBoxPlus/FoodMap/Logo.png",
  brandName: "FoodMap",
  tagLine: {
    en: "Shop online and get up to 60% off from FoodMap!",
    vi: "Đi chợ online giảm đến 60% từ FoodMap",
  },
  privileges: [
    {
      name: {
        en: "Green Pepper Beef Jerky - Delicious Specialty - 100g",
        vi: "Khô Bò Tiêu Xanh - Đặc Sản Ngon Lành - 100g",
      },
      price: 280000,
      dealPrice: 112000,
      image:
        "https://static.urbox.vn/app-cms/UrBoxPlus/FoodMap/GreenPepperBeefJerky.png",
      redirectUrl: "https://u.urbox.vn/i612bjkr7I",
      priority: 3,
    },
    {
      name: {
        en: "Binh An Gift set",
        vi: "Set Quà Tết Bình An",
      },
      price: 584000,
      dealPrice: 399000,
      image:
        "https://static.urbox.vn/app-cms/UrBoxPlus/FoodMap/PeaceTetGiftSet.png",
      redirectUrl: "https://u.urbox.vn/i612bjkr7I",
      priority: 2,
    },
    {
      name: {
        en: "Dalat Seedless Dried Persimmons",
        vi: "[HỒNG VUÔNG] Hồng treo gió Đà Lạt - Túi 250g - Đặc Sản Ngon Lành",
      },
      price: 219000,
      dealPrice: 119000,
      image:
        "https://static.urbox.vn/app-cms/UrBoxPlus/FoodMap/DalatSeedlessDried.png",
      redirectUrl: "https://u.urbox.vn/i612bjkr7I",
      priority: 1,
    },
  ],
  programDetail: {
    bannerImage: "https://static.urbox.vn/app-cms/UrBoxPlus/FoodMap/Banner.png",
    programInfor: {
      en: "<p><strong>1. Eligible participants:</strong></p><p>All users on the Urbox app who own the Urbox+ Membership Package</p><p><strong>2. Program period:</strong></p><p>From January 10, 2025 until further notice from UrBox.</p><p><strong>3. Promotion details:</strong></p><p>Up to 60% discount when purchasing products from FooodMap.</p><p><strong>4. Warranty and return policy:</strong></p><p>https://foodmap.asia/page/hinh-thuc-thanh-toan</p><p><strong>5. Delivery policy:</strong></p><p>https://foodmap.asia/page/van-chuyen-giao-nhan</p><p><strong>6. Hotline:</strong></p><p>028 7770 2614 (8h00-18h00)</p>",
      vi: "<p><strong>1. Đối tượng nhận ưu đãi:&nbsp;</strong></p><p>Tất cả User trên ứng dụng Urbox có sở hữu Gói hội viên Urbox+</p><p><strong>2. Thời gian diễn ra chương trình:</strong></p><p>Từ ngày 10/01/2025 – đến khi có thông báo từ UrBox.</p><p><strong>3. Nội dung chương trình ưu đãi:&nbsp;</strong></p><p>Giảm giá đến 60% khi mua các sản phẩm từ FoodMap.</p><p><strong>4. Chính sách mua hàng:</strong></p><p>https://foodmap.asia/page/hinh-thuc-thanh-toan</p><p><strong>5. Chính sách giao hàng:</strong></p><p>https://foodmap.asia/page/van-chuyen-giao-nhan</p><p><strong>6. Hotline khi Khách hàng cần hỗ trợ:</strong></p><p>028 7770 2614 (8h00-18h00)</p>",
    },
    buyingGuide: [
      {
        icon: "https://static.urbox.vn/app-cms/UrBoxPlus/FoodMap/IconStep1.png",
        title: {
          en: "Select the product and quantity you want to purchase.",
          vi: "Chọn sản phẩm & số lượng muốn mua",
        },
        description: {
          en: "After clicking “<strong>Shop Now</strong>”, you will be redirected directly to FoodMap's shopping page. There, select the product and enter the quantity you want to purchase.",
          vi: "Sau khi nhấn “<strong>Mua sắm ngay</strong>”, bạn sẽ được chuyển trực tiếp đến trang mua hàng của FoodMap. Tại đây, bạn chọn sản phẩm và nhập số lượng muốn mua.",
        },
        guideImages: [
          "https://static.urbox.vn/app-cms/UrBoxPlus/FoodMap/Step1GuideImage1.png",
        ],
      },
      {
        icon: "https://static.urbox.vn/app-cms/UrBoxPlus/FoodMap/IconStep2.png",
        title: {
          en: "Click on “Total” to review your cart, then select “Place Order”",
          vi: "Bấm vào “Tổng cộng” để kiểm tra giỏ hàng rồi chọn “Đặt hàng”",
        },
        description: {
          en: "After adding products, click on “<strong>Total</strong>” to review your cart and select “<strong>Place Order</strong>”.",
          vi: "Sau khi nhập sản phẩm, bấm vào “<strong>Tổng cộng</strong>” để kiểm tra giỏ hàng và chọn “<strong>Đặt hàng</strong>”.",
        },
        guideImages: [
          "https://static.urbox.vn/app-cms/UrBoxPlus/FoodMap/Step2GuideImage1.png",
        ],
      },
      {
        icon: "https://static.urbox.vn/app-cms/UrBoxPlus/FoodMap/IconStep3.png",
        title: {
          en: "Enter the delivery information.",
          vi: "Điền thông tin nhận hàng",
        },
        description: {
          en: "On the Cart screen, you can review the products you have selected.\n\nNext, scroll down to find the Delivery Information and Delivery Method sections, and enter the required information as instructed on the FoodMap website.",
          vi: "Tại màn hình Giỏ hàng, bạn có thể kiểm tra lại các sản phẩm đã chọn mua.\n\nKế tiếp, lướt xuống dưới sẽ thấy Thông tin nhận hàng và Hình thức giao hàng, hãy nhập các thông tin như hướng dẫn tại website FoodMap.",
        },
        guideImages: [
          "https://static.urbox.vn/app-cms/UrBoxPlus/FoodMap/Step3GuideImage1.png",
          "https://static.urbox.vn/app-cms/UrBoxPlus/FoodMap/Step3GuideImage2.png",
          "https://static.urbox.vn/app-cms/UrBoxPlus/FoodMap/Step3GuideImage3.png",
        ],
      },
      {
        icon: "https://static.urbox.vn/app-cms/UrBoxPlus/FoodMap/IconStep4.png",
        title: {
          en: "Select a payment method and click “Place Order” to complete",
          vi: "Chọn hình thức thanh toán và bấm “Đặt hàng” để hoàn tất",
        },
        description: {
          en: "After entering the payment information, scroll down to select a Payment Method and click “<strong>Place Order</strong>”.\n\nFollow the payment instructions to complete your order.",
          vi: "Sau khi nhập thông tin thanh toán, hãy lướt tiếp xuống dưới để chọn Hình thức thanh toán và chọn “<strong>Đặt hàng</strong>”.\n\nThực hiện các bước thanh toán theo hướng dẫn để hoàn tất đặt hàng.",
        },
        guideImages: [
          "https://static.urbox.vn/app-cms/UrBoxPlus/FoodMap/Step4GuideImage1.png",
        ],
      },
    ],
    termAndCondition: {
      en: "",
      vi: "",
    },
  },
  redirectUrl: "https://u.urbox.vn/i612bjkr7I",
  priority: 4,
});

db.privileges_brands.insertOne({
  brandId: 3,
  brandLogo: "https://static.urbox.vn/app-cms/UrBoxPlus/TGDD/Logo.png",
  brandName: "Thế giới di động",
  tagLine: {
    en: "Get up to 60% off for unlimited shopping at The Gioi Di Dong.",
    vi: "Giảm đến 60% mua sắm thả ga từ Thế Giới Di Động.",
  },
  privileges: [
    {
      name: {
        en: "Rapoo M20 Plus Wireless Mouse",
        vi: "Chuột Không Dây Rapoo M20 Plus",
      },
      price: 200000,
      dealPrice: 80000,
      image: "https://static.urbox.vn/app-cms/UrBoxPlus/TGDD/Mouse.png",
      redirectUrl: "https://u.urbox.vn/XwldwjBvKp",
      priority: 3,
    },
    {
      name: {
        en: "Type C cable - Type C 0.9m Anker 543 Nylon Bio-braided A80E5",
        vi: "Cáp Type C - Type C 0.9m Anker 543 - A80E5",
      },
      price: 210000,
      dealPrice: 115000,
      image: "https://static.urbox.vn/app-cms/UrBoxPlus/TGDD/TypeC.png",
      redirectUrl: "https://u.urbox.vn/2f1IfWUsde",
      priority: 2,
    },
    {
      name: {
        en: "BeFit Hunter2 Smartwatch 47.8mm",
        vi: "Đồng hồ thông minh BeFit Hunter 2 Đen",
      },
      price: 1490000,
      dealPrice: 790000,
      image: "https://static.urbox.vn/app-cms/UrBoxPlus/TGDD/SmartWatch.png",
      redirectUrl: "https://u.urbox.vn/TCZHQUMaO2",
      priority: 1,
    },
  ],
  programDetail: {
    bannerImage: "https://static.urbox.vn/app-cms/UrBoxPlus/TGDD/Banner.png",
    programInfor: {
      en: "<p><strong>1. Eligible participants:</strong></p><p>All users on the Urbox app who own the Urbox+ Membership Package</p><p><strong>2. Program period:</strong></p><p>From January 1, 2025 to January 31, 2025 or until further notice from UrBox.</p><p><strong>3. Promotion details:</strong></p><p>Up to 60% discount when purchasing products from The Gioi Di Dong.</p><p><strong>4. Policy:</strong></p><ul><li>Warranty and return policy: https://www.thegioididong.com/chinh-sach-bao-hanh-san-pham</li><li>Delivery policy: https://www.thegioididong.com/giao-hang</li></ul><p><strong>5. Hotline:</strong></p><ul><li>Complaints: 1800.1062 (8:00 - 21:30)</li><li>Warranty: 1900 232 464 (8:00 - 21:00)</li></ul>",
      vi: "<p><strong>1. Đối tượng nhận ưu đãi: </strong></p><p>Tất cả User trên ứng dụng Urbox có sở hữu Gói hội viên Urbox+</p><p><strong>2. Thời gian diễn ra chương trình:</strong></p><p>Từ ngày 01/01/2025 – 31/01/2025 hoặc đến khi có thông báo khác từ UrBox.</p><p><strong>3. Nội dung chương trình ưu đãi: </strong></p><p>Giảm giá đến 60% khi mua các sản phẩm từ Thế Giới Di Động.</p><p><strong>4. Chính sách mua hàng:</strong></p><ul><li>Chính sách bảo hành, đổi trả: https://www.thegioididong.com/chinh-sach-bao-hanh-san-pham</li><li>Chính sách giao hàng: https://www.thegioididong.com/giao-hang </li></ul><p><strong>5. Hotline khi Khách hàng cần hỗ trợ:</strong></p><ul><li>Khiếu nại: 1800.1062 (8:00 - 21:30)</li><li>Bảo hành: 1900 232 464 (8:00 - 21:00)</li></ul>",
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
  redirectUrl: "https://u.urbox.vn/CWnjyx9Je2",
  priority: 3,
});
