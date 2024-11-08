import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col lg:flex-row gap-6 p-4 bg-gray-100">
      {/* CONTAINER SẢN PHẨM */}
      <div className="h-1/2 lg:h-full lg:w-2/3 2xl:w-1/2 p-4 flex flex-col space-y-4 bg-white shadow-lg rounded-lg">
        {/* SẢN PHẨM ĐƠN */}
        {[1, 2, 3].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-50 shadow-sm rounded-lg"
          >
            <Image
              src="/temporary/p1.png"
              alt="Product"
              width={100}
              height={100}
            />
            <div className="flex flex-col justify-between ml-4">
              <h1 className="uppercase text-xl font-semibold text-gray-800">
                Sicilian
              </h1>
              <span className="text-gray-500">Large</span>
            </div>
            <h2 className="font-bold text-lg text-gray-900">₫1,880,000</h2>
            <span className="cursor-pointer text-red-500 hover:text-red-700">
              X
            </span>
          </div>
        ))}
      </div>

      {/* CONTAINER THANH TOÁN */}
      <div className="h-1/2 lg:h-full lg:w-1/3 2xl:w-1/2 p-6 bg-fuchsia-50 flex flex-col gap-6 justify-center shadow-lg rounded-lg">
        <div className="flex items-center text-gray-700 pl-4">
          <span className="flex-shrink-0">Tạm tính (3 sản phẩm)</span>
          <span className="ml-auto">₫5,640,000</span>
        </div>
        <div className="flex items-center text-gray-700 pl-4">
          <span className="flex-shrink-0">Chi phí dịch vụ</span>
          <span className="ml-auto">₫0</span>
        </div>
        <div className="flex items-center text-gray-700 pl-4">
          <span className="flex-shrink-0">Chi phí vận chuyển</span>
          <span className="ml-auto text-green-500 font-semibold">
            MIỄN PHÍ!
          </span>
        </div>
        <hr className="my-2" />
        <div className="flex items-center text-gray-800 pl-4">
          <span className="flex-shrink-0 font-semibold">
            TỔNG CỘNG (ĐÃ BAO GỒM VAT)
          </span>
          <span className="ml-auto font-bold text-lg">₫5,640,000</span>
        </div>
        <button className="bg-blue-400 text-white p-3 rounded-md w-full lg:w-1/2 self-end hover:bg-blue-600 transition duration-300">
          THANH TOÁN
        </button>
      </div>
    </div>
  );
};

export default CartPage;
