type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Sicilian",
    desc: "Kích thích vị giác của bạn với sự kết hợp đầy lửa giữa pepperoni cay, jalapeños, ớt bột đỏ, và pho mát mozzarella tan chảy, mang đến một hương vị đậm đà mỗi khi cắn.",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      {
        title: "Nhỏ",
        additionalPrice: 0,
      },
      {
        title: "Vừa",
        additionalPrice: 4,
      },
      {
        title: "Lớn",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Bacon Deluxe",
    desc: "Hãy thưởng thức sự ngon lành của một miếng thịt bò nướng, phủ bên trên là thịt xông khói giòn, pho mát cheddar tan chảy, hành caramelized, và một chút sốt BBQ chua chua.",
    img: "/temporary/p2.png",
    price: 29.9,
    options: [
      {
        title: "Nhỏ",
        additionalPrice: 0,
      },
      {
        title: "Vừa",
        additionalPrice: 4,
      },
      {
        title: "Lớn",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Bella Napoli",
    desc: "Một món ăn Ý cổ điển với vỏ mỏng giòn, sốt cà chua chua, mozzarella tươi, và các loại thảo mộc thơm, phủ thêm xà lách, cà chua, và một chút sốt mayo chua.",
    img: "/temporary/p3.png",
    price: 24.9,
    options: [
      {
        title: "Nhỏ",
        additionalPrice: 0,
      },
      {
        title: "Vừa",
        additionalPrice: 4,
      },
      {
        title: "Lớn",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Spicy Arrabbiata",
    desc: "Kích thích vị giác của bạn với món pasta cay này, kết hợp penne với sốt cà chua cay, tỏi, ớt đỏ, và húng quế tươi, tạo nên một trải nghiệm ẩm thực thoải mái nhất.",
    img: "/temporary/p4.png",
    price: 26.9,
    options: [
      {
        title: "Nhỏ",
        additionalPrice: 0,
      },
      {
        title: "Vừa",
        additionalPrice: 4,
      },
      {
        title: "Lớn",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Jalapeño Fiesta",
    desc: "Kích thích vị giác của bạn với một cú hích cay! Burger này có miếng thịt bò mềm, jalapeños cay, pho mát pepper jack, và sốt chipotle mayo thơm ngon, tất cả đều được bọc trong một chiếc bánh mì nướng giòn.",
    img: "/temporary/p5.png",
    price: 29.9,
    options: [
      {
        title: "Nhỏ",
        additionalPrice: 0,
      },
      {
        title: "Vừa",
        additionalPrice: 4,
      },
      {
        title: "Lớn",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Margherita Magic",
    desc: "Một món yêu thích không bao giờ lỗi thời với một chút thay đổi, với vỏ mỏng phủ trên là cà chua ngọt, húng quế tươi, mozzarella kem, và một ít dầu ô liu nguyên chất, arugula tươi, và một chút giấm balsamic.",
    img: "/temporary/p6.png",
    price: 24.9,
    options: [
      {
        title: "Nhỏ",
        additionalPrice: 0,
      },
      {
        title: "Vừa",
        additionalPrice: 4,
      },
      {
        title: "Lớn",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 7,
    title: "Garlic Parmesan Linguine",
    desc: "Món ăn dành cho những tín đồ tỏi, với linguine được phủ trong sốt Parmesan kem, kết hợp với tỏi và trang trí thêm parsley thái nhỏ, ớt chuông, và cà chua cherry.",
    img: "/temporary/p7.png",
    price: 28.9,
    options: [
      {
        title: "Nhỏ",
        additionalPrice: 0,
      },
      {
        title: "Vừa",
        additionalPrice: 4,
      },
      {
        title: "Lớn",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 8,
    title: "Mediterranean Delight",
    desc: "Khám phá hành trình ẩm thực với món ăn lấy cảm hứng từ Địa Trung Hải này, với pho mát feta, ô liu Kalamata, cà chua khô, và một chút oregano.",
    img: "/temporary/p8.png",
    price: 32.9,
    options: [
      {
        title: "Nhỏ",
        additionalPrice: 0,
      },
      {
        title: "Vừa",
        additionalPrice: 4,
      },
      {
        title: "Lớn",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 9,
    title: "Hawaiian Teriyaki",
    desc: "Trải nghiệm hương vị nhiệt đới với miếng thịt bò nướng phủ sốt teriyaki, với dứa nướng, thịt xông khói giòn, và xà lách tươi, tất cả đều được bọc trong chiếc bánh mì nướng giòn.",
    img: "/temporary/p9.png",
    price: 29.9,
    options: [
      {
        title: "Nhỏ",
        additionalPrice: 0,
      },
      {
        title: "Vừa",
        additionalPrice: 4,
      },
      {
        title: "Lớn",
        additionalPrice: 6,
      },
    ],
  },
];

export const pizzas: Products = [
  {
    id: 1,
    title: "Sicilian",
    desc: "Kích thích vị giác của bạn với sự kết hợp đầy lửa giữa pepperoni cay, jalapeños, ớt bột đỏ, và pho mát mozzarella tan chảy, mang đến một hương vị đậm đà mỗi khi cắn.",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      {
        title: "Nhỏ",
        additionalPrice: 0,
      },
      {
        title: "Vừa",
        additionalPrice: 4,
      },
      {
        title: "Lớn",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Mediterranean Delight",
    desc: "Khám phá hành trình ẩm thực với món ăn lấy cảm hứng từ Địa Trung Hải này, với pho mát feta, ô liu Kalamata, cà chua khô, và một chút oregano.",
    img: "/temporary/p8.png",
    price: 32.9,
    options: [
      {
        title: "Nhỏ",
        additionalPrice: 0,
      },
      {
        title: "Vừa",
        additionalPrice: 4,
      },
      {
        title: "Lớn",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Bella Napoli",
    desc: "Một món ăn Ý cổ điển với vỏ mỏng giòn, sốt cà chua chua, mozzarella tươi, và các loại thảo mộc thơm, phủ thêm xà lách, cà chua, và một chút sốt mayo chua.",
    img: "/temporary/p3.png",
    price: 26.9,
    options: [
      {
        title: "Nhỏ",
        additionalPrice: 0,
      },
      {
        title: "Vừa",
        additionalPrice: 4,
      },
      {
        title: "Lớn",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Pesto Primavera",
    desc: "Một món ăn Ý cổ điển với vỏ mỏng giòn, sốt cà chua chua, mozzarella tươi, và các loại thảo mộc thơm, phủ thêm xà lách, cà chua, và một chút sốt mayo chua.",
    img: "/temporary/p10.png",
    price: 28.9,
    options: [
      {
        title: "Nhỏ",
        additionalPrice: 0,
      },
      {
        title: "Vừa",
        additionalPrice: 4,
      },
      {
        title: "Lớn",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Veggie Supreme",
    desc: "Một món ăn Ý cổ điển với vỏ mỏng giòn, sốt cà chua chua, mozzarella tươi, và các loại thảo mộc thơm, phủ thêm xà lách, cà chua, và một chút sốt mayo chua.",
    img: "/temporary/p11.png",
    price: 24.9,
    options: [
      {
        title: "Nhỏ",
        additionalPrice: 0,
      },
      {
        title: "Vừa",
        additionalPrice: 4,
      },
      {
        title: "Lớn",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Four Cheese Fantasy",
    desc: "Trải nghiệm niềm vui với sự kết hợp của mozzarella, cheddar, provolone, và Parmesan, tạo nên một trải nghiệm pizza phô mai phong phú và đầy đam mê.",
    img: "/temporary/p12.png",
    price: 22.9,
    options: [
      {
        title: "Nhỏ",
        additionalPrice: 0,
      },
      {
        title: "Vừa",
        additionalPrice: 4,
      },
      {
        title: "Lớn",
        additionalPrice: 6,
      },
    ],
  },
];

export const singleProduct: Product = {
  id: 1,
  title: "Sicilian",
  desc: "Kích thích vị giác của bạn với sự kết hợp đầy lửa giữa pepperoni cay, jalapeños, ớt bột đỏ, và pho mát mozzarella tan chảy, mang đến một hương vị đậm đà mỗi khi cắn.",
  img: "/temporary/p1.png",
  price: 24.9,
  options: [
    {
      title: "Nhỏ",
      additionalPrice: 0,
    },
    {
      title: "Vừa",
      additionalPrice: 4,
    },
    {
      title: "Lớn",
      additionalPrice: 6,
    },
  ],
};

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "pastas",
    title: "Mỳ Ý Italy",
    desc: "Thưởng thức hương vị hoàn hảo với thực đơn mỳ Ý thủ công tuyệt vời của chúng tôi.",
    img: "/temporary/m1.png",
    color: "white",
  },
  {
    id: 2,
    slug: "burgers",
    title: "Burgers Ngon Ngọt",
    desc: "Vị ngon tuyệt vời: Miếng thịt mềm mại, hương vị đậm đà và các lớp phủ thượng hạng.",
    img: "/temporary/m2.png",
    color: "black",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "Pizza Phô Mai",
    desc: "Thiên đường Pizza: Những miếng pizza không thể cưỡng lại, lớp phủ hấp dẫn và sự hoàn hảo của phô mai.",
    img: "/temporary/m3.png",
    color: "white",
  },
];
