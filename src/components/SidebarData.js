import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AddCardIcon from "@mui/icons-material/AddCard";
import FeedbackIcon from "@mui/icons-material/Feedback";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Support",
    icon: <SupportAgentIcon />,
    link: "/support",
  },
  {
    title: "PaymentSetting",
    icon: <AddCardIcon />,
    link: "/card",
  },
  {
    title: "Feedback",
    icon: <FeedbackIcon />,
    link: "/Feedback",
  },
];
