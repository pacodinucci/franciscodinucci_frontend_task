import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { RootState } from "@/redux/store";
import { nextStep } from "@/redux/slices/stepsSlice";
import { UseDispatch } from "react-redux";

const ButtonsBar = () => {
  const dispatch = useDispatch();
  const fileName = useSelector((state: RootState) => state.leads.fileName);
  const currentStep = useSelector(
    (state: RootState) => state.steps.currentStep
  );

  return (
    <div className="h-16 flex flex-col px-4 justify-center items-center border-t border-gray-300">
      {(currentStep === "Upload" || currentStep === "Review") && (
        <Button
          className="self-end"
          variant="continue"
          disabled={!fileName}
          onClick={() => dispatch(nextStep())}
        >
          Continue
        </Button>
      )}
      {currentStep === "Validation" && (
        <Button
          className="self-end"
          variant="continue"
          disabled={!fileName}
          onClick={() => dispatch(nextStep())}
        >
          Verify Email
        </Button>
      )}
    </div>
  );
};

export default ButtonsBar;
