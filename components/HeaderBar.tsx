import { sofia } from "@/lib/fonts";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { HeaderBarProps } from "@/lib/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setLeads } from "@/redux/slices/leadsSlice";

const HeaderBar = ({ fileName }: HeaderBarProps) => {
  const dispatch = useDispatch();
  const leads = useSelector((state: RootState) => state.leads.leads); // Get current leads from state
  const [isEditing, setIsEditing] = useState(false);
  const [newFileName, setNewFileName] = useState(fileName || "Untitled");

  const handleRenameClick = () => {
    setIsEditing(true);
    setNewFileName(fileName || "Untitled"); // Set the input value to the current fileName
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewFileName(e.target.value);
  };

  const handleSave = () => {
    // Dispatch action to update fileName in global state while keeping current leads
    dispatch(setLeads({ leads, fileName: newFileName })); // Use the current leads from the state
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewFileName(fileName || "Untitled");
    setIsEditing(false);
  };

  return (
    <div className="h-16 flex px-6 items-center justify-between border-b border-gray-300">
      <div className="flex gap-x-4 items-center">
        <Image
          src="/arrow-left.svg"
          alt="icon arrow left"
          width={20}
          height={0}
        />
        {isEditing ? (
          <input
            type="text"
            value={newFileName}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-2 py-1"
          />
        ) : (
          <h2 className={`${sofia.className} font-bold text-xl`}>
            {fileName || "Untitled"}
          </h2>
        )}
        <span className="bg-progressSpan text-progressText py-1 px-2 rounded-md text-xs">
          In progress
        </span>
      </div>
      <div className="flex gap-x-2">
        {isEditing ? (
          <>
            <Button
              onClick={handleSave}
              variant="renameLeads"
              size="headerBarButton"
            >
              Save
            </Button>
            <Button
              onClick={handleCancel}
              variant="deleteLeads"
              size="headerBarButton"
            >
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={handleRenameClick}
              variant="renameLeads"
              size="headerBarButton"
            >
              Rename Leads List
            </Button>
            <Button variant="deleteLeads" size="headerBarButton">
              Delete Leads List
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderBar;
