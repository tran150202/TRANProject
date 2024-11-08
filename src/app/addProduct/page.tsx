"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    price: "",
    img: "/temporary/p1.png", // Default image
    categorySlug: "", // Slug of the category
  });

  const [categories, setCategories] = useState<
    { slug: string; title: string }[]
  >([]); // Categories list
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch categories from the API
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/getCategories");
        setCategories(response.data); // Assuming your API response contains { slug, title }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.desc ||
      !formData.price ||
      !formData.categorySlug
    ) {
      setError("Please fill all the fields.");
      return;
    }
    try {
      const response = await axios.post("/api/addProduct", formData);
      setMessage("Product added successfully!");
      setFormData({
        title: "",
        desc: "",
        price: "",
        img: "/temporary/p1.png", // Reset to default image
        categorySlug: "",
      });
    } catch (error) {
      setError("Failed to add product.");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-5 border rounded shadow">
      <h1 className="text-2xl font-semibold  text-center mb-6">
        Add New Product
      </h1>

      {message && (
        <div className="text-green-600 mb-4 p-2 border border-green-500 rounded">
          {message}
        </div>
      )}
      {error && (
        <div className="text-red-600 mb-4 p-2 border border-red-500 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block font-medium text-lg">
            Title:
          </label>
          <input
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="desc" className="block font-medium text-lg">
            Description:
          </label>
          <input
            id="desc"
            type="text"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="price" className="block font-medium text-lg">
            Price:
          </label>
          <input
            id="price"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            min="0"
            className="w-full p-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="categorySlug" className="block font-medium text-lg">
            Category:
          </label>
          <input
            id="categorySlug"
            type="text"
            name="categorySlug"
            value={formData.categorySlug}
            onChange={handleChange}
            required
            list="categoryList"
            className="w-full p-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-400"
          />
          <datalist id="categoryList">
            {categories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.title}
              </option>
            ))}
          </datalist>
        </div>

        <div>
          <label htmlFor="img" className="block font-medium text-lg">
            Image:
          </label>
          <select
            id="img"
            name="img"
            value={formData.img}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-400"
          >
            <option value="/temporary/p1.png">Image 1</option>
            <option value="/temporary/p2.png">Image 2</option>
            <option value="/temporary/p3.png">Image 3</option>
            <option value="/temporary/p4.png">Image 4</option>
            <option value="/temporary/p5.png">Image 5</option>
            <option value="/temporary/p6.png">Image 6</option>
            <option value="/temporary/p7.png">Image 7</option>
            <option value="/temporary/p8.png">Image 8</option>
            <option value="/temporary/p9.png">Image 9</option>
            <option value="/temporary/p10.png">Image 10</option>
            <option value="/temporary/p11.png">Image 11</option>
            <option value="/temporary/p12.png">Image 12</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
