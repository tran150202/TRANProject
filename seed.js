const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Thêm dữ liệu vào bảng User
  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john.doe@example.com",
      emailVerified: new Date(),
      image: "https://example.com/images/john.jpg",
      isAdmin: true,
    },
  });

  console.log("User created:", user);

  // Thêm dữ liệu vào bảng Category
  const category = await prisma.category.create({
    data: {
      title: "Pizza",
      desc: "Delicious and freshly made pizzas.",
      color: "#FFA500",
      img: "https://example.com/images/pizza.jpg",
      slug: "pizza",
    },
  });

  console.log("Category created:", category);

  // Thêm dữ liệu vào bảng Product
  const product = await prisma.product.create({
    data: {
      title: "Margherita Pizza",
      desc: "Classic pizza with tomato sauce, mozzarella, and basil.",
      img: "https://example.com/images/margherita.jpg",
      price: 9.99,
      isFeatured: true,
      options: [
        { title: "Small", additionalPrice: 0 },
        { title: "Large", additionalPrice: 4 },
      ],
      category: { connect: { slug: "pizza" } }, // Liên kết với Category qua slug
      catSlug: "pizza",
    },
  });

  console.log("Product created:", product);

  // Thêm dữ liệu vào bảng Account
  const account = await prisma.account.create({
    data: {
      userId: user.id,
      type: "oauth",
      provider: "google",
      providerAccountId: "1234567890",
      access_token: "access-token-sample",
      refresh_token: "refresh-token-sample",
      expires_at: Math.floor(Date.now() / 1000) + 60 * 60,
      token_type: "Bearer",
    },
  });

  console.log("Account created:", account);

  // Thêm dữ liệu vào bảng Session
  const session = await prisma.session.create({
    data: {
      sessionToken: "unique-session-token",
      userId: user.id,
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 giờ sau thời điểm hiện tại
    },
  });

  console.log("Session created:", session);

  // Thêm dữ liệu vào bảng Order
  const order = await prisma.order.create({
    data: {
      price: 20.99,
      products: [{ title: "Margherita Pizza", quantity: 2, price: 9.99 }],
      status: "Processing",
      userEmail: user.email,
    },
  });

  console.log("Order created:", order);

  // Thêm dữ liệu vào bảng VerificationToken
  const verificationToken = await prisma.verificationToken.create({
    data: {
      identifier: "john.doe@example.com",
      token: "unique-verification-token",
      expires: new Date(Date.now() + 60 * 60 * 1000), // 1 giờ sau thời điểm hiện tại
    },
  });

  console.log("VerificationToken created:", verificationToken);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
