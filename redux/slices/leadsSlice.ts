import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Lead, LeadState } from "@/lib/types";

const initialState: LeadState = {
  leads: [],
  fileName: null,
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
  },
});

export const { setLeads, clearLeads } = leadsSlice.actions;

export default leadsSlice.reducer;
