export interface StrapiImage {
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
}

export interface StrapiButton {
  content: string;
  url: string;
}

export interface NavLink {
  id: number;
  content: string;
  url: string;
  hasDropdown?: boolean;
  children?: {
    id: number;
    content: string;
    url: string;
  }[];
}

export interface NavbarData {
  logo?: {
    url: string;
  };
  navlinks: NavLink[];
  ctaButton?: StrapiButton;
  pageName?: string;
}

export interface SocialMediaItem {
  id: number;
  logo: { url: string };
  url: string;
}

export interface FooterSectionData {
  footerBranding?: {
    content: string;
    logo?: { url: string };
  };
  applyForEarlyAccess?: {
    content: string;
  };
  socialMedia?: {
    Content: string;
    socialMedias: SocialMediaItem[];
  };
}

export interface HeroData {
  headline: string;
  subHeadline: string;
  description: string;
  RegisterNowText?: StrapiButton;
}

export interface WhyDoSalesData {
  badgeContent: string;
  mainHeading: string;
  heading1: string;
  content1: string;
  heading2: string;
  content2: string;
  heading3: string;
  content3: string;
}

export interface WaterfallData {
  badgeContent: string;
  content: string;
  description: string;
}

export interface DiscoveryData {
  badgeContent: string;
  heading: string;
  description: string;
  images?: {
    url: string;
  }[];
}

export interface TestimonialCard {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar?: { url: string };
}

export interface RealPainPointData {
  badgeContent: string;
  heading: string;
  description: string;
  testimonalCards: TestimonialCard[];
}

export interface PlatformSectionData {
  badgeContent: string;
  heading: string;
  description: string;
  funnelMainContent: string;
  setupYourSalesEngine?: StrapiButton;
}

export interface ClosingCTAData {
  badgeContent: string;
  heading: string;
  ctaButton?: StrapiButton;
}
