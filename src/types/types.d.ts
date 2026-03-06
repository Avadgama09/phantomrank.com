export interface CallToAction {
  text: string;
  href: string;
  variant?: "primary" | "secondary" | "link";
  icon?: string;
  ariaLabel?: string;
}

export interface NavLink {
  text: string;
  href: string;
}

export interface Widget {
  id?: string;
  isDark?: boolean;
  bg?: string;
  containerClass?: string;
  classes?: Record<string, string>;
  animate?: boolean;
}

export interface HeadlineProps extends Widget {
  title?: string;
  subtitle?: string;
  tagline?: string;
  titleAs?: string;
}

// --- PhantomRank-specific types ---

export type FeatureStatus = "live" | "coming-soon";

export type FeatureCategory =
  | "Market Intelligence"
  | "Content Production"
  | "Prediction";

export interface Feature {
  name: string;
  slug: string;
  category: FeatureCategory;
  status: FeatureStatus;
  oneLiner: string;
  icon: string;
  iconClass?: string;
}

export interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  cta: CallToAction;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface PageMeta {
  title: string;
  description: string;
}
