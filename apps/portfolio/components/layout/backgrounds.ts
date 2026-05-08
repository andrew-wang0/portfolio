import type { Icon } from "@phosphor-icons/react";
import { FishSimpleIcon } from "@phosphor-icons/react";

export type Background = {
  title: string;
  subtitle?: string;
  file: string;
  objectPosition?: string;
  icon?: Icon;
};

export const backgrounds: Background[] = [
  {
    title: "Zion Natl. Park",
    subtitle: "Utah",
    file: "zion.jpg",
    objectPosition: "50% 18%",
  },
  {
    title: "Grand Tetons",
    subtitle: "Wyoming",
    file: "tetons.jpg",
    objectPosition: "50% 57%",
  },
  {
    title: "Cathedral Redwoods",
    subtitle: "Henry Cowell Redwoods State Park",
    file: "cowell.jpg",
    objectPosition: "50% 60%",
  },
  {
    title: "Grand Canyon",
    subtitle: "Arizona",
    file: "canyon.jpg",
    objectPosition: "50% 53%",
  },
  {
    title: "Garland Ranch",
    subtitle: "Santa Lucia Mountains",
    file: "garland.jpg",
    objectPosition: "50% 50%",
  },
  {
    title: "McWay Falls",
    subtitle: "Julia Pfeiffer Burns State Park",
    file: "mcway.jpg",
    objectPosition: "50% 68%",
  },
  {
    title: "Mt. Baker - Snoqualmie Natl. Forest",
    subtitle: "Washington",
    file: "snoqualmie.jpg",
    objectPosition: "50% 80%",
  },
  {
    title: "Donner Lake",
    subtitle: "Sierra Nevada",
    file: "donner-lake.jpg",
    objectPosition: "50% 70%",
  },
  {
    title: "Badlands Natl. Park",
    subtitle: "South Dakota",
    file: "badland.jpg",
    objectPosition: "50% 66%",
  },
  {
    title: "Lake 22",
    subtitle: "Washington",
    file: "twentytwo.jpg",
    objectPosition: "50% 20%",
  },
  {
    title: "Lake of the Ozarks",
    subtitle: "Missouri",
    file: "ozark.jpg",
    objectPosition: "50% 52%",
  },
  {
    title: "Petrified Forest Natl. Park",
    subtitle: "Arizona",
    file: "petrified.jpg",
    objectPosition: "50% 80%",
  },
  {
    title: "Big Sur River Gorge",
    subtitle: "Pfeiffer Big Sur State Park",
    file: "gorge.jpg",
    objectPosition: "50% 40%",
  },
  {
    title: "Purple-Striped Jelly",
    subtitle: "Monterey Bay Aquarium",
    file: "jelly.jpg",
    objectPosition: "50% 30%",
    icon: FishSimpleIcon,
  },
  {
    title: "Bridal Veil Falls",
    subtitle: "Washington",
    file: "falls.jpg",
    objectPosition: "50% 20%",
  },
  {
    title: "Stevens Lake",
    subtitle: "Idaho Panhandle Natl. Forest",
    file: "stevens.jpg",
    objectPosition: "50% 52%",
  },
  {
    title: "Cadillac Graveyard",
    subtitle: "Texas",
    file: "cars.jpg",
    objectPosition: "50% 47%",
  },
  {
    title: "Carmel State Beach",
    subtitle: "Carmel, California",
    file: "beach.jpg",
    objectPosition: "50% 37%",
  },
  {
    title: "Donner Pass Tunnels",
    subtitle: "Sierra Nevada",
    file: "donner.jpg",
    objectPosition: "50% 55%",
  },
  {
    title: "Lake Tahoe - Night",
    file: "tahoe.jpg",
    objectPosition: "50% 50%",
  },
  {
    title: "Lake Michigan",
    subtitle: "Indiana Dunes Natl. Park",
    file: "indiana.jpg",
    objectPosition: "50% 57%",
  },
];
