"use client";

import ButtonsBar from "@/components/ButtonsBar";
import HeaderBar from "@/components/HeaderBar";
import Steps from "@/components/Steps";
import UploadStep from "@/components/UploadStep";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import LeadsTable from "@/components/LeadsTable";

export default function Home() {
  const currentStep = useSelector(
    (state: RootState) => state.steps.currentStep
  );

  const leads = useSelector((state: RootState) => state.leads.leads);
  const fileName = useSelector((state: RootState) => state.leads.fileName);

  useEffect(() => {
    console.log(leads);
    console.log(fileName);
  }, [leads, fileName]);

  return (
    <main className="flex flex-col h-full">
      <HeaderBar fileName={fileName} />
      <div className="flex-1 bg-avatarBg">
        <Steps />
        {(currentStep === "Upload" || currentStep === "Review") && (
          <UploadStep />
        )}
        {currentStep === "Validation" && <LeadsTable />}
      </div>
      <ButtonsBar />
    </main>
  );
}
