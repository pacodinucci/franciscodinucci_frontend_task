export interface Lead {
  name: string;
  lastName: string;
  companyDomain: string;
  linkedinProfileUrl: string;
}

export interface SidebarOption {
  id: string;
  label: string;
  icon: string;
  route: string;
}

export interface StepCounterProps {
  steps: string[];
  currentStep: string;
}

export interface LeadState {
  leads: Lead[];
  fileName: string | null;
}

export interface HeaderBarProps {
  fileName: string | null;
}

export interface StepsState {
  currentStep: string;
}
