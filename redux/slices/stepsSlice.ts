import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StepsState } from "@/lib/types";

const steps = ["Upload", "Review", "Validation", "Confirm", "Complete"];

const initialState: StepsState = {
  currentStep: steps[0],
};

const stepsSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    nextStep: (state) => {
      const currentIndex = steps.indexOf(state.currentStep);
      if (currentIndex < steps.length - 1) {
        state.currentStep = steps[currentIndex + 1];
      }
    },
    previousStep: (state) => {
      const currentIndex = steps.indexOf(state.currentStep);
      if (currentIndex > 0) {
        state.currentStep = steps[currentIndex - 1];
      }
    },
    setStep: (state, action: PayloadAction<string>) => {
      if (steps.includes(action.payload)) {
        state.currentStep = action.payload;
      }
    },
  },
});

export const { nextStep, previousStep, setStep } = stepsSlice.actions;

export default stepsSlice.reducer;
