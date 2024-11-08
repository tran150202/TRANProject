import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between whitespace-nowrap">
      <Link href="/" className="font-bold text-xl">
        TRAN
      </Link>
      <p className="text-sm md:text-base">© BẢN QUYỀN THUỘC VỀ CHỦ SỞ HỮU.</p>
    </div>
  );
};

export default Footer;
