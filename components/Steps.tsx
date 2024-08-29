import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Steps: React.FC = () => {
  const steps = useSelector((state: RootState) => [
    "Upload",
    "Review",
    "Validation",
    "Confirmation",
    "Complete",
  ]);
  const currentStep = useSelector(
    (state: RootState) => state.steps.currentStep
  );

  return (
    <div className="flex items-center w-full space-x-4 px-6 flex-nowrap mt-2">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center w-[14.6vw]">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              steps.indexOf(currentStep) >= index
                ? "bg-gradient-to-r from-[#8C57EA] to-[#5570E8] w-full"
                : "bg-gray-200 w-full"
            }`}
          />
        </div>
      ))}
      <div className="text-sm font-semibold text-gray-600 ml-2">
        Step {steps.indexOf(currentStep) + 1} / {steps.length} - {currentStep}
      </div>
    </div>
  );
};

export default Steps;
