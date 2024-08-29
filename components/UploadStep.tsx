import React, { useState } from "react";
import FileUpload from "./FileUpload";
import { Separator } from "./ui/separator";
import { sofia } from "@/lib/fonts";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, UseDispatch } from "react-redux";
import { clearLeads } from "@/redux/slices/leadsSlice";
import { previousStep } from "@/redux/slices/stepsSlice";

const UploadStep = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState<File | null>(null);
  const [leadsCount, setLeadsCount] = useState<number | null>(null);

  const handleFileUpload = (uploadedFile: File, leadsCount: number) => {
    setFile(uploadedFile);
    setLeadsCount(leadsCount);
  };

  const handleDelete = () => {
    setFile(null);
    setLeadsCount(null);
    dispatch(clearLeads());
    dispatch(previousStep());
  };

  return (
    <div className="mt-4 mx-6 bg-white rounded-lg border border-gray-300">
      <div className={`${sofia.className} p-4`}>
        <h2 className="text-xl font-bold">Upload lead list</h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur. Amet suscipit vulputate
          tristique sagittis. Facilisis id ut morbi aliquet duis sed.
        </p>
      </div>
      <Separator />
      <div className="flex flex-col justify-center items-center py-4 pt-6">
        {!file ? (
          // Mostrar componente de carga de archivos
          <FileUpload onFileUpload={handleFileUpload} />
        ) : (
          <div className="w-1/2 flex flex-col items-center">
            <div
              className={`${sofia.className} flex items-center justify-between w-full p-4 bg-gradient-to-r from-[#8C57EA]/5 to-[#5570E8]/5 border-2 border-violet-100 rounded-md`}
            >
              <div className="flex items-center">
                <Image
                  src="/file-icon.svg"
                  alt="File Icon"
                  width={50}
                  height={0}
                />
                <div className="ml-4">
                  <p className="font-bold text-gray-700">{file.name}</p>
                  <p className="text-sm text-gray-500">
                    {(file.size / 1024).toFixed(1)} KB | {leadsCount} leads
                    found
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => {
                    setFile(null);
                    dispatch(clearLeads());
                    dispatch(previousStep());
                  }}
                  className="text-blue-500 hover:underline"
                >
                  Re-upload
                </button>
                <button
                  onClick={handleDelete}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="w-1/2 py-4">
          <div
            className={`${sofia.className} flex justify-between items-center`}
          >
            <h3 className="font-semibold text-xl">Fields Formatting</h3>
            <Link href="/">
              <p className="text-blue-400 underline">Download/View Sample</p>
            </Link>
          </div>
          <div className={`${sofia.className} flex justify-between`}>
            <div className="py-4 text-lg">
              <h3 className="font-semibold">Company name</h3>
              <div className="flex gap-x-2">
                <Image
                  src="/tick-circle.svg"
                  alt="tick circle"
                  width={15}
                  height={0}
                />
                <p className="text-gray-600">google</p>
              </div>
              <p className="text-gray-400 font-medium py-4">
                --------- or ---------
              </p>
              <h3 className="font-semibold">Company domain</h3>
              <div className="flex gap-x-2">
                <Image
                  src="/tick-circle.svg"
                  alt="tick circle"
                  width={15}
                  height={0}
                />
                <p className="text-gray-600">google.com</p>
              </div>
              <div className="flex gap-x-2">
                <Image
                  src="/tick-circle.svg"
                  alt="tick circle"
                  width={15}
                  height={0}
                />
                <p className="text-gray-600">https://www.google.com</p>
              </div>
            </div>
            <div className="py-4 text-lg">
              <h3 className="font-semibold mb-4">Linkedin Profile URL</h3>
              <h3 className="font-semibold">Allowed: Regular Linkedin URL</h3>
              <div className="flex gap-x-2">
                <Image
                  src="/tick-circle.svg"
                  alt="tick circle"
                  width={15}
                  height={0}
                />
                <p className="text-gray-600">
                  https://linkedin.com/in/marcbenioff
                </p>
              </div>
              <div className="flex gap-x-2">
                <Image
                  src="/tick-circle.svg"
                  alt="tick circle"
                  width={15}
                  height={0}
                />
                <p className="text-gray-600">https://www.google.com</p>
              </div>
              <h3 className="font-semibold mt-4">
                Allowed: Regular Linkedin URL
              </h3>
              <div className="flex gap-x-2">
                <Image
                  src="/tick-circle.svg"
                  alt="tick circle"
                  width={15}
                  height={0}
                />
                <p className="text-gray-600">
                  https://linkedin.com/in/marcbenioff
                </p>
              </div>
              <div className="flex gap-x-2">
                <Image
                  src="/tick-circle.svg"
                  alt="tick circle"
                  width={15}
                  height={0}
                />
                <p className="text-gray-600">
                  https://www.linkedin.com/sales/people/ACoAAAAAPwEB4dd
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadStep;
