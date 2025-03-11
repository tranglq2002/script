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
            "urbox-dev://WebviewScreen?url=https://u.urbox.vn/AvoWSrlgsc&bottomNavBar=true",
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
            "urbox-dev://WebviewScreen?url=https://u.urbox.vn/eY8CTU0rZq&bottomNavBar=true",
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
            "urbox-dev://WebviewScreen?url=https://u.urbox.vn/xdnEEC8Z9b&bottomNavBar=true",
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
        "urbox-dev://WebviewScreen?url=https://u.urbox.vn/CWnjyx9Je2&bottomNavBar=true",
    },
  }
);
