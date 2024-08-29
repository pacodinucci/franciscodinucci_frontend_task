import { sofia } from "@/lib/fonts";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { HeaderBarProps } from "@/lib/types";

const HeaderBar = ({ fileName }: HeaderBarProps) => {
  return (
    <div className="h-16 flex px-6 items-center justify-between border-b border-gray-300">
      <div className="flex gap-x-4 items-center">
        <Image
          src="/arrow-left.svg"
          alt="icon arrow left"
          width={20}
          height={0}
        />
        <h2 className={`${sofia.className} font-bold text-xl`}>
          {fileName || "Untitled"}
        </h2>
        <span className="bg-progressSpan text-progressText py-1 px-2 rounded-md text-xs">
          In progress
        </span>
      </div>
      <div className="flex gap-x-2">
        <Button variant="renameLeads" size="headerBarButton">
          Rename Leads List
        </Button>
        <Button variant="deleteLeads" size="headerBarButton">
          Delete Leads List
        </Button>
      </div>
    </div>
  );
};

export default HeaderBar;
