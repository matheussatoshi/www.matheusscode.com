import githubAnimationIcon from '@/public/static/github.json'
import instagramAnimationIcon from '@/public/static/instagram.json'
import linkedinAnimationIcon from '@/public/static/linkedin.json'
import xAnimationIcon from '@/public/static/x.json'
import youtubeAnimationIcon from '@/public/static/youtube.json'

export const mimic = {
  socialLinks: [
    {
      id: 1,
      name: "Github",
      href: "https://github.com/matheussfigueiredo",
      animationData: githubAnimationIcon,
    },
    {
      id: 2,
      name: "Linkedin",
      href: "https://www.linkedin.com/in/matheussfigueiredo/",
      animationData: linkedinAnimationIcon,
    },
    {
      id: 3,
      name: "Youtube",
      href: "https://www.youtube.com/@letmatcode",
      animationData: youtubeAnimationIcon,
    },
    {
      id: 4,
      name: "X",
      href: "https://x.com/letmat_code",
      animationData: xAnimationIcon,
    },
    {
      id: 5,
      name: "Instagram",
      href: "https://www.instagram.com/letmat.code/",
      animationData: instagramAnimationIcon,
    },
  ],
};
