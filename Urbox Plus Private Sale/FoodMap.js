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
