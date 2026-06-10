import React from "react";

import { PanelList } from "@/components/list/panel-list";
import type { PanelListItemProps } from "@/components/list/panel-list-item";
import { PanelListItem } from "@/components/list/panel-list-item";

const panels: PanelListItemProps[] = [
  {
    imageRef: "/panels/spacex2.png",
    dates: "2026",
    title: "SpaceX",
    description: "Engineered database migration pipelines for Starshield MVP",
    href: "https://www.spacex.com/starshield",
  },
  {
    imageRef: "/panels/apl.png",
    dates: "2025",
    title: "Johns Hopkins APL",
    description: "Developed UI features to support missile defense simulations",
    href: "https://www.jhuapl.edu/",
  },
  {
    imageRef: "/panels/aws.png",
    dates: "2025",
    title: "Amazon Web Services",
    description: "Built high-concurrency cache architectures for DynamoDB in Rust",
    href: "https://aws.amazon.com/dynamodb/",
  },
  {
    imageRef: "/panels/nps.png",
    dates: "2024",
    title: "Naval Postgraduate School",
    description: "Data analysis on maritime missile raid scenarios",
    href: "https://nps.edu/",
  },
];

export default function Page() {
  return (
    <PanelList>
      {panels.map((panel) => (
        <PanelListItem key={panel.title} {...panel} />
      ))}
    </PanelList>
  );
}
