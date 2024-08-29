"use client";

import ButtonsBar from "@/components/ButtonsBar";
import HeaderBar from "@/components/HeaderBar";
import Steps from "@/components/Steps";
import UploadStep from "@/components/UploadStep";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import LeadsTable from "@/components/LeadsTable";

export default function Home() {
  const currentStep = useSelector(
    (state: RootState) => state.steps.currentStep
  );

  const fileName = useSelector((state: RootState) => state.leads.fileName);

  return (
    <main className="flex flex-col h-full">
      <HeaderBar fileName={fileName} />
      <div className="flex-1 bg-avatarBg">
        <Steps />
        {(currentStep === "Upload" || currentStep === "Review") && (
          <UploadStep />
        )}
        {(currentStep === "Validation" || currentStep === "Confirmation") && (
          <LeadsTable />
        )}
      </div>
      <ButtonsBar />
    </main>
  );
}
