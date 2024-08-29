// components/FileUpload.tsx
import Image from "next/image";
import React from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import Papa from "papaparse";
import { setLeads } from "@/redux/slices/leadsSlice";
import { nextStep } from "@/redux/slices/stepsSlice";
import { Lead } from "@/lib/types";

interface FileUploadProps {
  onFileUpload: (file: File, leadsCount: number) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const dispatch = useDispatch();
  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      Papa.parse<Lead>(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const leads = results.data as Lead[];
          dispatch(setLeads({ leads, fileName: file.name }));
          onFileUpload(file, leads.length);
          dispatch(nextStep());
        },
        error: (error) => {
          console.error("Error parsing CSV File: ", error);
        },
      });
    },
    [onFileUpload, dispatch]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
    },
    maxFiles: 1,
  });

  return (
    <div
      {...getRootProps()}
      className={`w-1/2 flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-md cursor-pointer transition-colors duration-300 bg-gradient-to-r from-[#8C57EA]/5 to-[#5570E8]/5 ${
        isDragActive ? "border-blue-500" : "border-gray-300"
      }`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center">
        <Image src="/Frame.png" alt="upload image" width={60} height={0} />
        <p>
          <span className="text-blue-500 underline">Click to upload</span> or
          drag and drop
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Only .csv files are accepted - Maximum 10,000 leads
        </p>
      </div>
    </div>
  );
};

export default FileUpload;
