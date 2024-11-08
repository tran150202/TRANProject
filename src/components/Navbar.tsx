import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-16 text-red-400 p-4 flex items-center justify-between border-b-2 border-b-blue-400 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-6 flex-1 justify-start whitespace-nowrap">
        <Link href="/" className="hover:text-orange-400 transition-colors">
          Trang chủ
        </Link>
        <Link href="/menu" className="hover:text-orange-400 transition-colors">
          Thực đơn
        </Link>
        <Link href="/" className="hover:text-orange-400 transition-colors">
          Liên hệ
        </Link>
      </div>

      {/* LOGO */}
      <div className="text-3xl md:font-extrabold flex-1 md:text-center whitespace-nowrap">
        <Link
          href="/"
          className="hover:text-orange-500 transition-colors font-extrabold text-red-500"
        >
          TRAN
        </Link>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-6 items-center justify-end flex-1 whitespace-nowrap">
        {/* User Authentication / Orders */}
        {!user ? (
          <Link
            href="/login"
            className="hover:text-orange-400 transition-colors text-sm"
          >
            Đăng nhập
          </Link>
        ) : (
          <Link
            href="/orders"
            className="hover:text-orange-400 transition-colors text-sm"
          >
            Đơn hàng
          </Link>
        )}

        {/* New Links for adding product and category */}
        <Link
          href="/addProduct"
          className="hover:text-orange-400 transition-colors text-sm"
        >
          Thêm sản phẩm
        </Link>

        <Link
          href="/addCategory"
          className="hover:text-orange-400 transition-colors text-sm"
        >
          Thêm danh mục
        </Link>

        {/* Cart Icon */}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
