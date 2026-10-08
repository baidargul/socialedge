export type ServiceFaq = { question: string; answer: string };
export type Service = {
  slug: string; title: string; description: string; details: readonly string[];
  intro: string; idealFor: readonly string[]; process: readonly string[];
  inputs: readonly string[]; deliverables: readonly string[]; formats: readonly string[]; faq: readonly ServiceFaq[];
};

export const services: readonly Service[] = [
  {
    slug: "video-editing",
    title: "Video Editing",
    description: "Transform raw footage into polished short-form, long-form and campaign-ready content.",
    details: ["Reels, TikToks & YouTube Shorts", "Motion graphics & animation", "Sound design, captions & pacing"],
    intro: "Strong editing gives raw footage structure, energy and a clear reason to keep watching. We shape pacing, sound, captions and motion around the intended platform and audience.",
    idealFor: ["Short-form social content", "Talking-head and educational videos", "Long-form and campaign edits", "Existing footage that needs a stronger finish"],
    process: ["Review footage and creative direction", "Build the story and first cut", "Add graphics, sound and captions", "Refine and prepare platform-ready exports"],
    inputs: ["Raw footage or recordings", "Brand references", "Core message and audience", "Preferred platforms"],
    deliverables: ["Structured narrative edit", "Branded captions and graphics", "Sound and pacing treatment", "Platform-ready exports"],
    formats: ["9:16 vertical", "16:9 landscape", "1:1 square", "Multi-length cutdowns"],
    faq: [{ question: "Can you work with footage we already have?", answer: "Yes. Existing recordings, interviews, product footage and creator content can all become the starting point for an edit." }, { question: "Do you adapt one video for several platforms?", answer: "The edit can be reframed and paced for the formats selected during the project scope." }],
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    description: "Build a consistent presence with platform-aware planning, publishing and creative support.",
    details: ["Content planning", "Platform-ready delivery", "Consistent brand presence"],
    intro: "A consistent social presence needs more than isolated posts. We connect planning and creative execution so each piece supports a recognizable brand direction.",
    idealFor: ["Brands building a consistent presence", "Teams needing ongoing content support", "Multi-platform social publishing", "Businesses with ideas but limited production capacity"],
    process: ["Understand goals and audience", "Shape the content direction", "Plan platform-ready assets", "Review and refine future content"],
    inputs: ["Business priorities", "Audience context", "Existing channels", "Brand voice and references"],
    deliverables: ["Content direction", "Publishing-ready creative", "Organized content themes", "Platform-specific recommendations"],
    formats: ["Reels and Shorts", "Static social posts", "Stories", "Campaign content"],
    faq: [{ question: "Does management include content creation?", answer: "The working model can connect planning with the video and design services required for the selected channels." }, { question: "Can you work with an internal marketing team?", answer: "Yes. Responsibilities and review steps are defined around the people already involved in your content." }],
  },
  {
    slug: "ecommerce-product-promotion",
    title: "E-commerce Product Promotion",
    description: "Show products clearly and creatively through content designed for digital storefronts and social feeds.",
    details: ["Product-led creative", "Promotional edits", "Social-first formats"],
    intro: "Product content should make the offer easy to understand while still feeling natural in a social feed. We turn features, demonstrations and footage into focused promotional creative.",
    idealFor: ["Product launches", "Social commerce content", "Feature demonstrations", "Promotional campaigns and product collections"],
    process: ["Clarify the product and customer", "Select the strongest message", "Create platform-specific assets", "Deliver variations for the campaign"],
    inputs: ["Product information", "Customer use cases", "Existing photos or footage", "Campaign objective"],
    deliverables: ["Product-focused edits", "Feature callouts", "Promotional creative", "Reusable campaign variations"],
    formats: ["Product reels", "Demonstrations", "Social ads", "Storefront visuals"],
    faq: [{ question: "Can you use existing product assets?", answer: "Yes. Available footage, photography and brand material can be organized into new product-led creative." }, { question: "Can one product idea become several assets?", answer: "A source concept can be adapted into hooks, demonstrations and format variations where the material supports it." }],
  },
  {
    slug: "web-app-development",
    title: "Web / App Development",
    description: "Create modern digital experiences that give campaigns and businesses a strong online home.",
    details: ["Responsive websites", "Digital experiences", "Conversion-focused builds"],
    intro: "A modern website or app gives campaigns and content a credible destination. We create responsive digital experiences that communicate clearly across screen sizes.",
    idealFor: ["Business and service websites", "Campaign landing pages", "New digital product concepts", "Existing experiences that need a modern refresh"],
    process: ["Define goals and required content", "Plan the experience and structure", "Design and develop responsively", "Test, refine and prepare for launch"],
    inputs: ["Business requirements", "Brand assets", "Content and functionality", "Reference experiences"],
    deliverables: ["Responsive interface", "Structured page experience", "Interactive components", "Launch-ready implementation"],
    formats: ["Marketing websites", "Landing pages", "Web applications", "Mobile-first experiences"],
    faq: [{ question: "Can the website connect to the wider campaign?", answer: "Yes. Messaging and visual direction can be aligned with the campaign assets that send visitors to it." }, { question: "Do you redesign existing experiences?", answer: "Existing sites can be reviewed and refreshed when the project scope includes their current platform and content." }],
  },
  {
    slug: "creative-strategy-content",
    title: "Creative Strategy & Content",
    description: "Turn ideas into a clear content direction shaped around your audience, brand and goals.",
    details: ["Creative direction", "Content concepts", "Campaign planning"],
    intro: "Clear creative direction keeps content useful and recognizable. We connect business goals, audience needs and platform behavior before production begins.",
    idealFor: ["Campaign and launch planning", "Brands unsure what to publish", "Teams needing repeatable content themes", "Ideas that need a practical creative direction"],
    process: ["Discover the brand and objective", "Identify audience opportunities", "Develop concepts and formats", "Turn direction into an actionable plan"],
    inputs: ["Business objective", "Audience insights", "Current content", "Brand positioning"],
    deliverables: ["Creative direction", "Content pillars", "Format recommendations", "Campaign concepts"],
    formats: ["Content roadmaps", "Creative briefs", "Campaign concepts", "Platform plans"],
    faq: [{ question: "Is strategy available before production?", answer: "Yes. Strategy can establish the direction and formats before editing, design or development begins." }, { question: "Will the plan fit our existing resources?", answer: "The recommended approach is shaped around the available material, channels and internal capacity shared in the brief." }],
  },
  {
    slug: "branding-design",
    title: "Branding & Design",
    description: "Develop visual systems and branded assets that make every customer touchpoint feel connected.",
    details: ["Visual identity", "Social design", "Campaign assets"],
    intro: "A connected visual system helps customers recognize and trust a brand. We develop practical design elements that can work across social content and digital touchpoints.",
    idealFor: ["New brand identities", "Social visual systems", "Campaign design support", "Brands with inconsistent visual communication"],
    process: ["Understand the brand personality", "Explore the visual direction", "Build the core design system", "Prepare reusable brand assets"],
    inputs: ["Brand story", "Audience and positioning", "Visual references", "Required applications"],
    deliverables: ["Visual direction", "Core brand elements", "Social templates", "Campaign-ready assets"],
    formats: ["Identity systems", "Social templates", "Digital graphics", "Campaign design"],
    faq: [{ question: "Can you extend an existing identity?", answer: "Yes. Existing brand elements can be organized and expanded for new content and campaign requirements." }, { question: "Will the design work across social and web?", answer: "The system is planned around the selected touchpoints so the brand remains connected across them." }],
  },
] as const;

export const portfolioCategories = ["Talking Head", "Podcast", "Educational", "Promotional", "Motion Graphics"] as const;
export type PortfolioCategory = (typeof portfolioCategories)[number];

export const portfolioItems: ReadonlyArray<{ id: string; category: PortfolioCategory }> = [
  { id: "aphsS856Otg", category: "Talking Head" },
  { id: "Xk1ryOkxbNA", category: "Podcast" },
  { id: "KxctaRp7T6o", category: "Educational" },
  { id: "icRIXYgrt9g", category: "Talking Head" },
  { id: "WwgfeG00Rs4", category: "Promotional" },
  { id: "2cwXE9EaoAM", category: "Motion Graphics" },
  { id: "UjG63LGt1rI", category: "Talking Head" },
  { id: "9MiKjKOCuKE", category: "Educational" },
  { id: "pXalQqwg3WU", category: "Podcast" },
  { id: "eT0ENVJDoTk", category: "Promotional" },
  { id: "8ofk8hFWf1U", category: "Talking Head" },
  { id: "6_B0e0Lh-sE", category: "Motion Graphics" },
  { id: "o8zqEOTaIJ4", category: "Educational" },
  { id: "qym_uHs4ojE", category: "Podcast" },
  { id: "LYsRrbDeSk8", category: "Promotional" },
  { id: "cqaBQqwSunY", category: "Motion Graphics" },
];

export const shortIds = portfolioItems.map((item) => item.id);

export const leadStatuses = [
  "new", "contacted", "qualified", "proposal", "won", "lost", "archived",
] as const;

export const serviceNames = services.map((service) => service.title);

export const platformFormats = ["Instagram Reels", "TikTok", "YouTube Shorts", "Long-form Video", "Product Creative", "Web Experiences"] as const;
export const useCases = [
  { title: "Creators & experts", description: "Shape knowledge, interviews and recordings into clear content people want to continue watching." },
  { title: "Service businesses", description: "Explain what you do, build familiarity and give prospects a stronger path from content to inquiry." },
  { title: "E-commerce brands", description: "Turn product benefits, demonstrations and campaigns into social-first promotional creative." },
  { title: "Growing teams", description: "Connect strategy, editing, design and digital delivery without splitting the idea across disconnected vendors." },
] as const;
export const qualityCriteria = [
  { title: "A clear hook", description: "Give the audience an immediate reason to pay attention." },
  { title: "Purposeful pacing", description: "Keep every beat moving the message or story forward." },
  { title: "Readable captions", description: "Make spoken content easier to follow in sound-off environments." },
  { title: "Considered sound", description: "Use voice, music and effects to support—not compete with—the message." },
  { title: "Brand consistency", description: "Keep typography, color and visual language recognizably yours." },
  { title: "Platform fit", description: "Prepare framing and exports for the place where the content will live." },
] as const;
export const siteFaqs = [
  { question: "What can SocialEdge create?", answer: "SocialEdge connects video editing, social management, product promotion, web and app development, creative strategy, branding and design." },
  { question: "Can you start with raw footage or an early idea?", answer: "Yes. A project can begin with existing footage, a content challenge, a product story or an early campaign concept." },
  { question: "Do you create for several platforms?", answer: "The selected platforms are considered during planning so framing, pacing and delivery formats suit where the work will appear." },
  { question: "How does a project begin?", answer: "Share the service, goals, available material and preferred contact details through the project form. The team can then shape an appropriate scope." },
] as const;

