import { copyright } from "@/utils/functions/copyright";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
  YoutubeIcon,
} from "lucide-react";

export const mimic = {
  socialLinks: [
    {
      id: 1,
      name: "Github",
      href: "https://github.com/matheussfigueiredo",
      username: "matheussfigueiredo",
      icon: GithubIcon,
    },
    {
      id: 5,
      name: "Instagram",
      href: "https://www.instagram.com/letmat.code/",
      icon: InstagramIcon,
      username: "@letmat.code",
    },
    {
      id: 2,
      name: "Linkedin",
      href: "https://www.linkedin.com/in/matheussfigueiredo/",
      username: "@letmatcode",
      icon: LinkedinIcon,
    },
    {
      id: 3,
      name: "Youtube",
      href: "https://www.youtube.com/@letmatcode",
      username: "@letmatcode",
      icon: YoutubeIcon,
    },
    {
      id: 4,
      name: "X",
      href: "https://x.com/letmat_code",
      username: "@letmat_code",
      icon: XIcon,
    },
  ],
  metadata: {
    copyright: copyright(),
    creator: "Feel Good Inc.",
    name: "Matheus Figueiredo",
    keywords: ["Vitrine", "Portfolio"],
  },
};
