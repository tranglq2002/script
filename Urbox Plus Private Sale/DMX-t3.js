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
            "urbox-dev://WebviewScreen?url=https://u.urbox.vn/BldW62wUHM&bottomNavBar=true",
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
            "urbox-dev://WebviewScreen?url=https://u.urbox.vn/cBrft7dB9g&bottomNavBar=true",
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
            "urbox-dev://WebviewScreen?url=https://u.urbox.vn/UsQtdkN6Ci&bottomNavBar=true",
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
        "urbox-dev://WebviewScreen?url=https://landing.urbox.vn/privatesale_dmx&bottomNavBar=true",
    },
  }
);
