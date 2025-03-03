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
