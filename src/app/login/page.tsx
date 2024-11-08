import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      {/* BOX */}
      <div className="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2 rounded-t-md md:rounded-l-md">
          <Image
            src="/loginBg.png"
            alt="Login background"
            fill
            className="object-cover rounded-t-md md:rounded-l-md"
          />
        </div>
        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl text-center">
            Chào mừng
          </h1>
          <p className="text-center">
            Đăng nhập vào tài khoản của bạn hoặc tạo tài khoản mới bằng các nút
            mạng xã hội.
          </p>
          {/* Google Button */}
          <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md hover:ring-orange-500 transition-all">
            <Image
              src="/google.png"
              alt="Google logo"
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>
          {/* Facebook Button */}
          <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md hover:ring-blue-500 transition-all">
            <Image
              src="/facebook.png"
              alt="Facebook logo"
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>
          <p className="text-sm text-center">
            Gặp vấn đề?{" "}
            <Link className="underline" href="/">
              Liên hệ với chúng tôi
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
