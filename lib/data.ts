import { SidebarOption } from "./types";

export const sidebarOptions: SidebarOption[] = [
  {
    id: "chat",
    label: "Chat With Nezumi",
    icon: "/message-text.svg",
    route: "/",
  },
  {
    id: "campaign",
    label: "Campaign",
    icon: "/send-2.svg",
    route: "/",
  },
  {
    id: "mail",
    label: "Mail",
    icon: "/sms-tracking.svg",
    route: "/",
  },
  {
    id: "leads",
    label: "Leads",
    icon: "/profile-2user.svg",
    route: "/",
  },
  {
    id: "settings",
    label: "Settings",
    icon: "/setting-2.svg",
    route: "/",
  },
];
