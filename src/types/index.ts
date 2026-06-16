export interface MenuRef {
  toggleMenu: () => void;
}

export interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  onCloseOverlay?: () => void;
  onStateChange?: (isOpen: boolean) => void;
}

export interface CTABlockProps {
  title: string;
  subtitle: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  tag?: string;
  elevated?: boolean;
}

export interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  href: string;
  tags: string[];
}

export interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
}

export interface ScrollTickerProps {
  items: string[];
  speed?: number;
}

export interface TechBadgeProps {
  name: string;
}
