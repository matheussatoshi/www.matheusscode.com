import { LottieGithub } from "@/ui/shared/lottie/lottie-github";
import { LottieInstagram } from "@/ui/shared/lottie/lottie-instagram";
import { LottieLinkedin } from "@/ui/shared/lottie/lottie-linkedin";
import { LottieX } from "@/ui/shared/lottie/lottie-x";
import { LottieYoutube } from "@/ui/shared/lottie/lottie-youtube";

export const mimic = {
  socialLinks: [
    {
      id: 1,
      name: "Github",
      href: "https://github.com/matheussfigueiredo",
      element: LottieGithub,
    },
    {
      id: 2,
      name: "Linkedin",
      href: "https://www.linkedin.com/in/matheussfigueiredo/",
      element: LottieLinkedin,
    },
    {
      id: 3,
      name: "Youtube",
      href: "https://www.youtube.com/@letmatcode",
      element: LottieYoutube,
    },
    {
      id: 4,
      name: "X",
      href: "https://x.com/letmat_code",
      element: LottieX,
    },
    {
      id: 5,
      name: "Instagram",
      href: "https://www.instagram.com/letmat.code/",
      element: LottieInstagram,
    },
  ],
};
