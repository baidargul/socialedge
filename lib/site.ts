export const siteConfig = {
  name: "SocialEdge Creative",
  description:
    "SocialEdge Creative provides video editing, social media management, branding, creative strategy and digital development.",
  url:
    (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.socialedgecreative.com").replace(
      /\/+$/,
      "",
    ),
  ogImage: "/identity/SocialEdge.png",
};
