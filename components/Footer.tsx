import { sofia } from "@/lib/fonts";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div
      className={`${sofia.className} flex justify-between items-center px-8 text-xs h-14 border-t border-gray-300`}
    >
      <div>
        <p>© 2024 Shōden Ltd. All Rights Reserved.</p>
      </div>
      <div className="flex gap-x-4 justify-between items-center">
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Content Policy</p>
      </div>
      <div className="flex gap-x-4 justify-between items-center">
        <span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#8C57EA]/5 to-[#5570E8]/5 flex items-center justify-center border border-gray-300">
          <Image src="/Twitter.svg" alt="twitter logo" width={15} height={0} />
        </span>
        <span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#8C57EA]/5 to-[#5570E8]/5 flex items-center justify-center border border-gray-300">
          <Image
            src="/Instagram.svg"
            alt="instagram logo"
            width={15}
            height={0}
          />
        </span>
        <span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#8C57EA]/5 to-[#5570E8]/5 flex items-center justify-center border border-gray-300">
          <Image
            src="/Linkedin.svg"
            alt="linkedin logo"
            width={15}
            height={0}
          />
        </span>
        <span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#8C57EA]/5 to-[#5570E8]/5 flex items-center justify-center border border-gray-300">
          <Image src="/sms.svg" alt="sms logo" width={15} height={0} />
        </span>
      </div>
    </div>
  );
};

export default Footer;
