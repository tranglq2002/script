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
          redirectUrl: "urbox://WebviewScreen?url=LINK&bottomNavBar=true",
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
          redirectUrl: "urbox://WebviewScreen?url=LINK&bottomNavBar=true",
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
          redirectUrl: "urbox://WebviewScreen?url=LINK&bottomNavBar=true",
          priority: 1,
        },
      ],
    },
  }
);

db.privileges_brands.insertOne({
  brandId: 8,
  brandLogo: "https://static.urbox.vn/app-cms/UrBoxPlus/Tefal/LogoV2.png",
  brandName: "Tefal",
  tagLine: {
    en: "Ưu đãi đến 63% từ Tefal chính hãng",
    vi: "Discounts up to 63% on authentic Tefal products",
  },
  privileges: [
    {
      name: {
        en: "Tefal 3 in 1 food processor MB520138 - Capacity 400mL",
        vi: "Máy xay thực phẩm Tefal 3 trong 1 MB520138 - Dung tích 400mL ",
      },
      price: 1077000,
      dealPrice: 410000,
      image:
        "https://static.urbox.vn/app-cms/UrBoxPlus/Tefal/FoodProcessorMB520138.png",
      redirectUrl:
        "urbox://WebviewScreen?url=https://u.urbox.vn/DG03GhM03J&bottomNavBar=true",
      priority: 3,
    },
    {
      name: {
        en: "Electronic rice cooker Tefal Rice Mate Mini RK515168 - Capacity 0.7L",
        vi: "Nồi cơm điện tử Tefal Rice Mate Mini RK515168 - Dung tích 0.7L ",
      },
      price: 1878000,
      dealPrice: 789000,
      image:
        "https://static.urbox.vn/app-cms/UrBoxPlus/Tefal/ElectronicRiceCooker.png",
      redirectUrl:
        "urbox://WebviewScreen?url=https://u.urbox.vn/DG03GhM03J&bottomNavBar=true",
      priority: 2,
    },
    {
      name: {
        en: "Dry iron with built-in water spray Tefal Classical Plus FS3120L0",
        vi: "Bàn ủi khô tích hợp bình xịt nước Tefal Classical Plus FS3120L0",
      },
      price: 679000,
      dealPrice: 284000,
      image: "https://static.urbox.vn/app-cms/UrBoxPlus/Tefal/WaterSpray.png",
      redirectUrl:
        "urbox://WebviewScreen?url=https://u.urbox.vn/DG03GhM03J&bottomNavBar=true",
      priority: 1,
    },
  ],
  programDetail: {
    bannerImage: "https://static.urbox.vn/app-cms/UrBoxPlus/Tefal/Banner.png",
    programInfor: {
      en: "<p><strong>1. Eligible participants:</strong></p><p>All users on the Urbox app who own the Urbox+ Membership Package</p><p><strong>2. Program period:</strong></p><p>From 28/02/2025 until further notice from UrBox.</p><p><strong>3. Promotion details:</strong></p><p>Up to 63% off from Tefal.</p><p><strong>4. Warranty:</strong></p><p>Details are listed on the sales page of each product.</p><p><strong>5. Payment method:</strong></p><p>Bank transfer or cash payment upon receipt.</p><p><strong>Note: </strong>You will be transferred to an online sales platform managed by a third party and will be responsible for all issues related to goods and services provided on this platform. UrBox only plays a preferential communication role. For any related issues arising on this platform, please contact the following information: Vietnam Distribution Import-Export Trading Services Company Limited. (Hotline: 0909 320 584)</p><p><strong>6. About Tefal:</strong></p><p>Tefal - a French brand specializing in cooking utensils and small household appliances owned by Groupe SEB. Genuine Tefal products are officially distributed by Vietnam Distribution Import-Export Trading Services Company Limited.</p>",
      vi: "<p><strong>1. Đối tượng nhận ưu đãi: </strong></p><p>Tất cả User trên ứng dụng Urbox có sở hữu Gói hội viên Urbox+</p><p><strong>2. Thời gian diễn ra chương trình:</strong></p><p>Từ 28/02/2025 đến khi có thông báo khác từ UrBox.</p><p><strong>3. Nội dung chương trình ưu đãi: </strong></p><p>Giảm giá đến 63% từ Tefal chính hãng.</p><p><strong>4. Chính sách bảo hành: </strong></p><p>Được ghi chi tiết tại trang bán hàng của mỗi sản phẩm.</p><p><strong>5. Hình thức thanh toán:</strong></p><p>Chuyển khoản hoặc thanh toán tiền mặt khi nhận hàng.</p><p><strong>Lưu ý:</strong> Quý khách sẽ được chuyển sang nền tảng bán hàng trực tuyến do bên thứ ba quản lý và chịu trách nhiệm về mọi vấn đề liên quan đến hàng hóa, dịch vụ được cung cấp trên nền tảng này. UrBox chỉ đóng vai trò truyền thông ưu đãi. Mọi vấn đề liên quan phát sinh trên nền tảng này, vui lòng liên hệ theo thông tin: Công Ty TNHH Dịch Vụ Thương Mại Xuất Nhập Khẩu Phân Phối Việt Nam</p><p>(Hotline: 0909 320 584)</p><p><strong>6. Giới thiệu thương hiệu:</strong></p><p>Tefal là thương hiệu chuyên về dụng cụ nấu nướng và các thiết bị gia dụng nhỏ của Pháp thuộc sở hữu của tập đoàn Groupe SEB. Các sản phẩm Tefal chính hãng được phân phối chính hãng bởi Công Ty TNHH Dịch Vụ Thương Mại Xuất Nhập Khẩu Phân Phối Việt Nam.</p>",
    },
    buyingGuide: [
      {
        icon: "https://static.urbox.vn/app-cms/UrBoxPlus/IconStep1.png",
        title: {
          en: "Select the product you want to buy and click on the cart",
          vi: "Chọn sản phẩm muốn mua và bấm vào giỏ hàng",
        },
        description: {
          en: "After selecting “<strong>Shop Now</strong>”, you will be redirected to Tefal's shopping page. Choose the product you want to buy and select “<strong>Add to Cart</strong>” or “<strong>Buy Now</strong>”.",
          vi: "Sau khi chọn “<strong>Mua sắm ngay</strong>” bạn sẽ được dẫn đến trang mua hàng của Tefal. Hãy chọn sản phẩm bạn muốn mua và chọn “<strong>Thêm vào giỏ hàng</strong>” hoặc “<strong>Mua ngay</strong>”.",
        },
        guideImages: [
          "https://static.urbox.vn/app-cms/UrBoxPlus/Tefal/Step1GuideImage1.png",
          "https://static.urbox.vn/app-cms/UrBoxPlus/Tefal/Step1GuideImage2.png",
        ],
      },
      {
        icon: "https://static.urbox.vn/app-cms/UrBoxPlus/IconStep2.png",
        title: {
          en: "Enter shipping information",
          vi: "Điền thông tin giao hàng",
        },
        description: {
          en: "On the Cart screen, check that the product matches your needs. Next, enter the shipping information as guided by Tefal.\n\nOnce all information is complete, select “<strong>Checkout</strong>” to finalize your order.",
          vi: "Tại màn hình Giỏ hàng, hãy kiểm tra sản phẩm đúng với nhu cầu của bạn. Tiếp theo, bạn điền thông tin giao hàng theo hướng dẫn từ Tefal.\n\nKhi thông tin đầy đủ, bạn chọn “<strong>Thanh toán</strong>” và hoàn tất đặt hàng.",
        },
        guideImages: [
          "https://static.urbox.vn/app-cms/UrBoxPlus/Tefal/Step2GuideImage1.png",
          "https://static.urbox.vn/app-cms/UrBoxPlus/Tefal/Step2GuideImage2.png",
        ],
      },
      {
        icon: "https://static.urbox.vn/app-cms/UrBoxPlus/IconStep3.png",
        title: {
          en: "The store will contact you to confirm your order and payment method.",
          vi: "Cửa hàng sẽ liên hệ quý khách để xác nhận đơn hàng và hình thức thanh toán",
        },
        description: {
          en: "After selecting “Checkout”, you will see the Order Successful screen. The store will contact you to confirm your order and payment method.",
          vi: "Sau khi chọn Thanh toán, bạn sẽ nhìn thấy màn hình Đặt hàng thành công. Cửa hàng sẽ liên hệ để xác nhận đơn hàng và hình thức thanh toán. ",
        },
        guideImages: [
          "https://static.urbox.vn/app-cms/UrBoxPlus/Tefal/Step3GuideImage1.png",
        ],
      },
    ],
    termAndCondition: {
      en: "",
      vi: "",
    },
  },
  redirectUrl:
    "urbox://WebviewScreen?url=https://u.urbox.vn/DG03GhM03J&bottomNavBar=true",
  priority: 0,
});

db.privileges_brands.insertOne({
  brandId: 9,
  brandLogo: "https://static.urbox.vn/app-cms/UrBoxPlus/Baseus/Logo.png",
  brandName: "Baseus",
  tagLine: {
    en: "Genuine Baseus discounts up to 61%",
    vi: "Ưu đãi đến 61% Baseus chính hãng",
  },
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
        "urbox://WebviewScreen?url=https://u.urbox.vn/Eu7dHVMFlX&bottomNavBar=true",
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
        "urbox://WebviewScreen?url=https://u.urbox.vn/zkToQnB0Uu&bottomNavBar=true",
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
        "urbox://WebviewScreen?url=https://u.urbox.vn/jNuFnrJ40j&bottomNavBar=true",
      priority: 1,
    },
  ],
  programDetail: {
    bannerImage: "https://static.urbox.vn/app-cms/UrBoxPlus/Baseus/Banner.png",
    programInfor: {
      en: '<p><strong>1. Eligible participants:</strong></p><p>All users on the Urbox app who own the Urbox+ Membership Package</p><p><strong>2. Program period:</strong></p><p>From 01/03/2025 until further notice.</p><p><strong>3. Promotion details:</strong></p><p>Up to 61% off from Baseus.</p><p><strong>4. Sales policy:</strong></p><p>https://baseus.vn/pages/chinh-sach-ban-hang</p><p><strong>5. Warranty policy:</strong></p><p>https://baseus.vn/pages/chinh-sach-bao-hanh</p><p><strong>6. Refund and Returns:</strong></p><p>https://baseus.vn/pages/chinha-sach-doi-tra-san-pham</p><p><strong>Note</strong>:</p><p>- When you click "Shop now", you will be transferred to a sales platform managed by a third party and will be responsible for all issues related to goods and services provided on this platform. For any related issues arising on this platform, please contact the Hotline information:</p><p>(028) 7109.95.96 (08:30-21:30)</p><p>- Product prices on the sales page may be adjusted depending on short-term promotional programs or sales policies from time to time of the brand.</p><p><strong>7. About Baseus Vietnam:</strong></p><p>Genuinely distributed by TechMall Vietnam Distributor (Genuine Authorized Distributor in Vietnam of the brands Baseus | HiFuture | ROCK | Joyroom | Choetech | Usams | Xiaomi | Tronsmart | Ugreen | Havit)</p>',
      vi: '<p><strong>1. Đối tượng nhận ưu đãi: </strong></p><p>Tất cả User trên ứng dụng Urbox có sở hữu Gói hội viên Urbox+</p><p><strong>2. Thời gian diễn ra chương trình:</strong></p><p>Từ 01/3/2025 đến khi có thông báo.</p><p><strong>3. Nội dung chương trình ưu đãi: </strong></p><p>Ưu đãi đến 61% Baseus chính hãng.</p><p><strong>4. Chính sách bán hàng:</strong></p><p>https://baseus.vn/pages/chinh-sach-ban-hang</p><p><strong>5. Chính sách bảo hành: </strong></p><p>https://baseus.vn/pages/chinh-sach-bao-hanh</p><p><strong>6. Chính sách đổi hàng:</strong></p><p>https://baseus.vn/pages/chinha-sach-doi-tra-san-pham</p><p><strong>Lưu ý: </strong></p><p>- Khi bấm vào "Mua sắm ngay" Quý khách sẽ được chuyển sang nền tảng bán hàng do bên thứ 3 quản lý và chịu trách nhiệm về mọi vấn đề liên quan đến hàng hóa, dịch vụ được cung cấp trên nền tảng này. Mọi vấn để liên quan phát sinh trên nền tảng này, vui lòng liên hệ theo thông tin Hotline:</p><p>(028) 7109.95.96 (08:30-21:30)</p><p>- Giá sản phẩm tại trang bán hàng có thể được điều chỉnh tùy vào các chương trình ưu đãi ngắn hạn hoặc chính sách bán hàng tùy thời điểm của thương hiệu.</p><p><strong>7. Giới thiệu về Baseus Vietnam:</strong></p><p>Được phân phối chính hãng bởi TechMall Vietnam Distributor (Nhà phân phối Ủy Quyền chính hãng tại Việt Nam của các thương hiệu Baseus | HiFuture | ROCK | Joyroom | Choetech | Usams | Xiaomi | Tronsmart | Ugreen | Havit)</p>',
    },
    buyingGuide: [
      {
        icon: "https://static.urbox.vn/app-cms/UrBoxPlus/IconStep1.png",
        title: {
          en: "Which product do you want to buy?",
          vi: "Chọn sản phẩm muốn mua",
        },
        description: {
          en: "After selecting “<strong>Shop Now</strong>”, you will be redirected to TechMall's purchase page. Choose the product you want to buy.\nOn the Product Details page, select the quantity and click “<strong>Buy Now</strong>”, and the product will be added to your cart.",
          vi: "Sau khi chọn “<strong>Mua sắm ngay</strong>” bạn sẽ được dẫn đến trang mua hàng của TechMall. Hãy chọn sản phẩm bạn muốn mua.\nTại trang Chi tiết sản phẩm, bạn chọn số lượng và bấm “<strong>Chọn mua</strong>”, sản phẩm sẽ được thêm vào giỏ hàng.",
        },
        guideImages: [
          "https://static.urbox.vn/app-cms/UrBoxPlus/Baseus/Step1GuideImage1.png",
          "https://static.urbox.vn/app-cms/UrBoxPlus/Baseus/Step1GuideImage2.png",
          "https://static.urbox.vn/app-cms/UrBoxPlus/Baseus/Step1GuideImage3.png",
        ],
      },
      {
        icon: "https://static.urbox.vn/app-cms/UrBoxPlus/IconStep2.png",
        title: {
          en: "Click on Cart to check and select Checkout",
          vi: "Bấm vào Giỏ hàng để kiểm tra và chọn Thanh toán",
        },
        description: {
          en: "Next, click on the “<strong>Cart</strong>” icon in the top right corner of the screen to quickly view the items in your cart.\nAfter verifying that the products meet your needs, select “<strong>Checkout</strong>”",
          vi: "Tiếp theo, bạn chọn vào biểu tượng “<strong>Giỏ hàng</strong>” ở góc phải màn hình để xem nhanh sản phẩm trong giỏ.\nSau khi kiểm tra sản phẩm đúng với nhu cầu thì chọn “<strong>Thanh toán</strong>”",
        },
        guideImages: [
          "https://static.urbox.vn/app-cms/UrBoxPlus/Baseus/Step2GuideImage1.png",
          "https://static.urbox.vn/app-cms/UrBoxPlus/Baseus/Step2GuideImage2.png",
        ],
      },
      {
        icon: "https://static.urbox.vn/app-cms/UrBoxPlus/IconStep3.png",
        title: {
          en: "Enter your shipping information and select a payment method.",
          vi: "Điền thông tin giao hàng, chọn hình thức thanh toán",
        },
        description: {
          en: "On the “<strong>Payment & Shipping</strong>” screen, enter your shipping information as instructed and select your preferred payment method.\nFinally, click “<strong>Place Order</strong>” to complete your purchase.",
          vi: "Tại màn hình “<strong>Thanh toán và giao hàng</strong>”, hãy điền thông tin giao hàng như hướng dẫn và chọn hình thức thanh toán mong muốn.\nCuối cùng, hãy chọn “<strong>Đặt hàng</strong>” để hoàn tất đơn đặt hàng.",
        },
        guideImages: [
          "https://static.urbox.vn/app-cms/UrBoxPlus/Baseus/Step3GuideImage1.png",
          "https://static.urbox.vn/app-cms/UrBoxPlus/Baseus/Step3GuideImage2.png",
        ],
      },
      {
        icon: "https://static.urbox.vn/app-cms/UrBoxPlus/IconStep4.png",
        title: {
          en: "If you choose the bank transfer method, use the order ID in the payment description.",
          vi: "Nếu chọn hình thức chuyển khoản, dùng mã đơn hàng trong phần nội dung thanh toán",
        },
        description: {
          en: "If you choose Bank Transfer as your payment method, after selecting “<strong>Place Order</strong>”, you will be redirected to the bank transfer information page.\nFollow the instructions to complete the payment. After the payment is made, TechMall will contact you to confirm your order.",
          vi: "Nếu chọn hình thức thanh toán là Chuyển khoản ngân hàng, sau khi chọn “<strong>Đặt hàng</strong>” bạn sẽ được chuyển đến trang thông tin chuyển khoản ngân hàng.\nTại đây, hãy thực hiện thanh toán theo hướng dẫn. Sau khi thanh toán, TechMall sẽ liên hệ để xác nhận đơn hàng.",
        },
        guideImages: [
          "https://static.urbox.vn/app-cms/UrBoxPlus/Baseus/Step4GuideImage1V2.png",
          "https://static.urbox.vn/app-cms/UrBoxPlus/Baseus/Step4GuideImage2.png",
          "https://static.urbox.vn/app-cms/UrBoxPlus/Baseus/Step4GuideImage3.png",
        ],
      },
    ],
    termAndCondition: {
      en: "",
      vi: "",
    },
  },
  redirectUrl:
    "urbox://WebviewScreen?url=https://u.urbox.vn/PFGZ3sUJrw&bottomNavBar=true",
  priority: -1,
});

let docs = db.privileges_brands.find().sort({ priority: 1 }).toArray();
docs.forEach((doc, index) => {
  db.privileges_brands.updateOne(
    { _id: doc._id },
    { $set: { priority: (index + 2) * 5 } } // Gán lại priority cách nhau 5 đơn vị
  );
});
