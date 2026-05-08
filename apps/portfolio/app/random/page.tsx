import React from "react";

import { PanelList } from "@/components/list/panel-list";
import type { PanelListItemProps } from "@/components/list/panel-list-item";
import { PanelListItem } from "@/components/list/panel-list-item";

const panels: PanelListItemProps[] = [
  {
    imageRef: "/panels/capy.jpg",
    dates: "November 2025",
    title: "Capybara Messages",
    description: "Send messages to your roommates via capybara",
    href: "https://youtu.be/t8XpoR306nQ",
    imageClassName: "object-[50%_20%]",
  },
  {
    imageRef: "/panels/benson.png",
    dates: "July 2024",
    title: "Supercharged Duck Lamp",
    description: "Overvolted lamp for a superluminous experience. Do not try this at home.",
    href: "https://youtu.be/6Drj-MyLHfw",
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
