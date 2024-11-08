"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Luôn tươi mới & luôn giòn & luôn nóng hổi",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "Chúng tôi giao hàng đến bất cứ đâu bạn ở NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "Pizza ngon nhất để chia sẻ cùng gia đình bạn",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-center text-red-500 font-bold p-6 md:p-10 lg:text-left lg:px-16">
        <h1 className="text-3xl md:text-5xl xl:text-6xl uppercase font-bold">
          {data[currentSlide].title}
        </h1>
        <button className="bg-blue-400 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-red-600 transition-colors duration-300 mt-4">
          Đặt hàng ngay
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt={`Slide ${data[currentSlide].id}`}
          fill
          className="object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Slider;
