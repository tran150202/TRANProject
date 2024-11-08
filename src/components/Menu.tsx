"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  const user = false;

  return (
    <div className="relative">
      {/* Icon mở và đóng menu */}
      <Image
        src={open ? "/close.png" : "/open.png"}
        alt="Menu Toggle"
        width={30}
        height={30}
        onClick={() => setOpen(!open)}
        className="cursor-pointer z-20 absolute top-6 right-6 transition-transform transform"
      />

      {/* Menu */}
      {open && (
        <div className="bg-blue-400 text-white absolute left-0 top-0 w-full h-[calc(100vh-6rem)] flex flex-col items-center justify-center gap-6 text-2xl z-10 transition-transform transform ease-in-out duration-300">
          {links.map((item) => (
            <Link
              href={item.url}
              key={item.id}
              onClick={() => setOpen(false)}
              className="transition-all hover:text-yellow-300"
            >
              {item.title}
            </Link>
          ))}

          {/* Link đăng nhập/đơn hàng */}
          <Link
            href={user ? "/orders" : "/login"}
            onClick={() => setOpen(false)}
            className="transition-all hover:text-yellow-300"
          >
            {user ? "Orders" : "Login"}
          </Link>

          {/* Cart Icon */}
          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
