import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Bánh mì kẹp thịt ngon & Khoai tây chiên
        </h1>
        <p className="text-white xl:text-xl">
          Tiến hành đơn giản hóa dần các công cụ điện tử hiệu quả và phương pháp
          tập trung vào quy trình để trao quyền. Nhanh chóng đưa ra quan điểm
          song song.
        </p>
        <CountDown />
        <button className="bg-blue-400 text-white rounded-md py-3 px-6">
          Gọi món ngay
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
