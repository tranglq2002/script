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
        "urbox-dev://WebviewScreen?url=https://u.urbox.vn/xR4lqvT3z1&bottomNavBar=true",
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
        "urbox-dev://WebviewScreen?url=https://u.urbox.vn/LyDuztJdB0&bottomNavBar=true",
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
        "urbox-dev://WebviewScreen?url=https://u.urbox.vn/6aFINuTeaU&bottomNavBar=true",
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
    "urbox-dev://WebviewScreen?url=https://u.urbox.vn/kjVYIdGiuP&bottomNavBar=true",
  priority: 6,
});
