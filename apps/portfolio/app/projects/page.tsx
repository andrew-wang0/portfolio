import Link from "next/link";
import React from "react";

import { PanelList } from "@/components/list/panel-list";
import type { PanelListItemProps } from "@/components/list/panel-list-item";
import { PanelListItem } from "@/components/list/panel-list-item";

const panels: PanelListItemProps[] = [
  {
    imageRef: "/panels/mlrepo.png",
    dates: "2024 — 2026",
    title: "UCI Machine Learning Repository",
    description: "Full-stack application delivering open-source datasets to 3M+ users",
    href: "https://archive-beta.ics.uci.edu/",
  },
  {
    imageRef: "/panels/icssc.png",
    dates: "2023 — 2026",
    title: "ICS Student Council",
    description: "Project Chair for student-driven, open-source projects serving the UCI community",
    href: "https://studentcouncil.ics.uci.edu/projects",
  },
  {
    imageRef: "/panels/aapi.jpg",
    dates: "2023 — 2025",
    title: "Anteater API",
    description: "Project Lead for API providing easy access to public data from UC Irvine",
    href: "https://anteaterapi.com/reference",
  },
  {
    imageRef: "/panels/mpc.png",
    dates: "2023 — 2024",
    title: "Assessem",
    description: "CS assessment software for 500+ students at Monterey Peninsula College",
    href: "https://github.com/MPC-Rebold/assessments-laravel",
  },
  {
    imageRef: "/panels/ase.png",
    dates: "2023",
    title: "Applied Solar Energy",
    description: "Designed efficient database schemas for solar energy systems",
    href: "https://appliedsolarenergy.com/",
  },
  {
    imageRef: "/panels/gez.png",
    dates: "2023",
    title: "GE-Z",
    description: "Find community college credits that transfer to UCs",
    href: "https://ge-z.vercel.app/",
    imageClassName: "object-[50%_0%]",
  },
];

export default function Page() {
  return (
    <div>
      <PanelList>
        {panels.map((panel) => (
          <PanelListItem key={panel.title} {...panel} />
        ))}
      </PanelList>

      <div className="mt-12 flex justify-center">
        <div className="text-lg">
          Check out my hackathon projects on{" "}
          <Link
            className="text-green-400 underline"
            href="https://devpost.com/andrew-wang0"
            target="_blank"
          >
            Devpost
          </Link>
          !
        </div>
      </div>
    </div>
  );
}
