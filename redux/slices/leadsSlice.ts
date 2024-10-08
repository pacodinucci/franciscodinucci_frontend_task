import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Lead, LeadState } from "@/lib/types";

const initialState: LeadState = {
  leads: [],
  fileName: null,
  totalErrorRecords: 0,
  uploadedFile: null,
};

const leadsSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    setLeads: (
      state,
      action: PayloadAction<{ leads: Lead[]; fileName: string }>
    ) => {
      state.leads = action.payload.leads;
      state.fileName = action.payload.fileName;
    },
    clearLeads: (state) => {
      state.leads = [];
      state.fileName = null;
    },
    setTotalErrorRecords: (state, action: PayloadAction<number>) => {
      state.totalErrorRecords = action.payload;
    },
    addLeads: (state, action: PayloadAction<Lead[]>) => {
      state.leads = [...state.leads, ...action.payload];
    },
    setUploadedFile: (
      state,
      action: PayloadAction<{ file: File; leadsCount: number }>
    ) => {
      state.uploadedFile = action.payload;
    },
  },
});

export const {
  setLeads,
  clearLeads,
  setTotalErrorRecords,
  addLeads,
  setUploadedFile,
} = leadsSlice.actions;

export default leadsSlice.reducer;
