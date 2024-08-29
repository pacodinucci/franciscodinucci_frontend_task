import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { RootState } from "@/redux/store";
import { nextStep, previousStep } from "@/redux/slices/stepsSlice";
import { useToast } from "./ui/use-toast";

const ButtonsBar = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const fileName = useSelector((state: RootState) => state.leads.fileName);
  const leads = useSelector((state: RootState) => state.leads.leads);
  const errorRecords = useSelector(
    (state: RootState) => state.leads.totalErrorRecords
  );
  const currentStep = useSelector(
    (state: RootState) => state.steps.currentStep
  );

  // Function to prepare payload
  const preparePayload = () => {
    const payload = {
      fileName: fileName || "Untitled",
      leads: leads.map((lead) => ({
        name: lead.name,
        lastName: lead.lastName,
        companyDomain: lead.companyDomain,
        linkedinProfileUrl: lead.linkedinProfileUrl,
      })),
      errorRecords: errorRecords,
    };

    console.log("Prepared Payload:", payload);
    toast({
      title: "Submitted!",
      description: "Check payload in the console.",
      // action: <ToastAction altText="Try again">Try again</ToastAction>,
    });

    dispatch(nextStep());
  };

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
      {(currentStep === "Validation" || currentStep === "Confirmation") && (
        <div className="flex items-center justify-between w-full">
          <Button
            className="self-start w-auto rounded-full bg-gray-50 px-12 py-4"
            variant="outline"
            onClick={() => dispatch(previousStep())}
          >
            Previous
          </Button>
          <Button
            className="self-end w-auto px-6"
            variant="continue"
            disabled={!fileName}
            onClick={preparePayload} // Use the new function to handle onClick
          >
            {errorRecords > 0
              ? `Verify Email - and ignore ${errorRecords} lead${
                  errorRecords > 1 ? "s" : ""
                } with errors`
              : "Verify Email"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ButtonsBar;
