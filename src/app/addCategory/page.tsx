"use client";

import { useState } from "react";
import axios from "axios";

const AddCategoryForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    color: "White",
    img: "/temporary/p1.png",
    slug: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "title") {
      const slug = value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\s+/g, "");
      setFormData({ ...formData, title: value, slug });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/addCategory", formData);
      setStatusMessage("Category added successfully!");
      console.log("Category added:", response.data);
      setFormData({
        title: "",
        desc: "",
        color: "White",
        img: "/temporary/p1.png",
        slug: "",
      });
    } catch (error) {
      setStatusMessage("Failed to add category.");
      console.error("Failed to add category:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto p-5 border rounded shadow"
    >
      <h2 className="text-center text-2xl font-semibold mb-4">
        Add New Category
      </h2>

      <div className="mb-4">
        <label htmlFor="title" className="block text-lg font-medium mb-2">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="desc" className="block text-lg font-medium mb-2">
          Description:
        </label>
        <input
          type="text"
          id="desc"
          name="desc"
          value={formData.desc}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="color" className="block text-lg font-medium mb-2">
          Color:
        </label>
        <select
          name="color"
          id="color"
          value={formData.color}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        >
          <option value="White">White</option>
          <option value="Black">Black</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="img" className="block text-lg font-medium mb-2">
          Image:
        </label>
        <select
          name="img"
          id="img"
          value={formData.img}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        >
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={`/temporary/p${i + 1}.png`}>
              Image {i + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="slug" className="block text-lg font-medium mb-2">
          Slug:
        </label>
        <input
          type="text"
          id="slug"
          name="slug"
          value={formData.slug}
          readOnly
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>

      {statusMessage && (
        <p
          className={`mt-4 text-center text-lg font-medium ${
            statusMessage.includes("success")
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {statusMessage}
        </p>
      )}
    </form>
  );
};

export default AddCategoryForm;
