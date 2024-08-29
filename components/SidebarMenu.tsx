import React from "react";
import Link from "next/link";
import Image from "next/image";

import { sidebarOptions } from "@/lib/data";
import SidebarSeparator from "./ui/SidebarSeparator";
import { sofia } from "@/lib/fonts";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar w-70 bg-white flex flex-col justify-between border-r border-gray-300">
      <div className="py-6">
        <div className="flex items-center gap-x-2 px-10 py-2">
          <Image src="/Logo.png" alt="Shoden Logo" width={120} height={0} />
        </div>
        <SidebarSeparator />
        <nav className="flex flex-col space-y-4 px-4">
          <h3 className="uppercase text-sm font-light text-neutral-400 px-6">
            Main
          </h3>
          <div className="flex flex-col">
            {sidebarOptions.map((option) => (
              <Link key={option.id} href={option.route}>
                <p
                  className={`flex items-center space-x-4 hover:text-purple-900 py-4 px-6 rounded-full text-slate-700 ${
                    sofia.className
                  } ${option.id === "leads" ? "bg-purple-50" : ""}`}
                >
                  <Image
                    src={option.icon}
                    alt="Option icon"
                    width={20}
                    height={0}
                  />
                  <span>{option.label}</span>
                </p>
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <div className="p-4">
        <SidebarSeparator />
        <div className="flex justify-between items-center p-4">
          <Image src="/slack.png" alt="slack logo" width={20} height={0} />
          <p className={`${sofia.className} text-sm text-slate-700`}>
            Join our community
          </p>
          <Image
            src="/arrow-up.svg"
            alt="arrow up icon"
            width={18}
            height={0}
          />
        </div>
        <SidebarSeparator />
        <div className="flex items-center space-x-4 bg-avatarBg rounded-full px-4 py-2 border border-gray-300">
          <Image
            src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
            alt="avatar"
            width={40}
            height={0}
            className="rounded-full"
          />
          <div>
            <div className="font-semibold text-sm">John Doe</div>
            <div className="text-xs text-gray-500">johndoe@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
