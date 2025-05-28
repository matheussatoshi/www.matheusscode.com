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
      label: "About",
      href: "/",
    },
    {
      id: 3,
      label: "Portfolio",
      href: "/",
    },
    {
      id: 4,
      label: "Articles",
      href: "/",
    },
  ],
};
