import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {pizzas.map((item) => (
        <Link
          className="w-full h-[70vh] border-2 border-blue-400 rounded-lg flex flex-col justify-between overflow-hidden group hover:shadow-lg transition-all"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative w-full h-3/4">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-all"
              />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="p-4 flex flex-col justify-between text-center">
            <h1 className="text-2xl font-bold text-blue-400 uppercase">
              {item.title}
            </h1>
            <div className="flex justify-between items-center mt-4">
              <h2 className="text-xl text-red-400">${item.price}</h2>
              <button className="hidden group-hover:block bg-red-400 text-white p-2 rounded-md uppercase">
                Thêm vào giỏ
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
