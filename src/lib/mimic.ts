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
      icon: GithubIcon,
    },
    {
      id: 2,
      name: "Linkedin",
      href: "https://www.linkedin.com/in/matheussfigueiredo/",
      icon: LinkedinIcon,
    },
    {
      id: 3,
      name: "Youtube",
      href: "https://www.youtube.com/@letmatcode",
      icon: YoutubeIcon,
    },
    {
      id: 4,
      name: "X",
      href: "https://x.com/letmat_code",
      icon: XIcon,
    },
    {
      id: 5,
      name: "Instagram",
      href: "https://www.instagram.com/letmat.code/",
      icon: InstagramIcon,
    },
  ],
  navigationLinks: [
    {
      id: 1,
      label: "Home",
      href: "/",
    },
    {
      id: 2,
      label: "Portfolio",
      href: "/portfolio",
    },
    {
      id: 3,
      label: "Writings",
      href: "/writings",
    },
  ],
  mockAvatars: [
    {
      imageUrl: "https://avatars.githubusercontent.com/u/16860528",
      profileUrl: "https://github.com/dillionverma",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/20110627",
      profileUrl: "https://github.com/tomonarifeehan",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/106103625",
      profileUrl: "https://github.com/BankkRoll",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/59228569",
      profileUrl: "https://github.com/safethecode",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/59442788",
      profileUrl: "https://github.com/sanjay-mali",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/89768406",
      profileUrl: "https://github.com/itsarghyadas",
    },
  ],
  metadata: {
    name: "Matheus Figueiredo",
    creator: "Feel Good Inc.",
    copyright: copyright(),
    keywords: ["Encurtador", "Vitrine", "Portfolio"],
  },
};
