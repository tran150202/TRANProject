import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming request body
    const { title, desc, price, img, categorySlug } = await req.json();

    // Fetch categories including slug and title to validate the categorySlug
    const categories = await prisma.category.findMany({
      select: {
        slug: true, // Fetch category slug
        title: true, // Fetch category title
      },
    });

    // Check if the provided categorySlug exists in the fetched categories
    const categoryExists = categories.some(
      (category) => category.slug === categorySlug
    );

    if (!categoryExists) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    }

    // Create the product in the database
    const product = await prisma.product.create({
      data: {
        title,
        desc,
        price: parseFloat(price), // Ensuring price is a number
        img,
        catSlug: categorySlug, // The slug is used as a foreign key to the Category table
        isFeatured: false, // Default value for isFeatured
      },
    });

    // Return the newly created product in the response
    return NextResponse.json({ product }, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Failed to add product" },
      { status: 500 }
    );
  }
}
