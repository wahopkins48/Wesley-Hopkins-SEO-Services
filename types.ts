export interface PricingFeature {
  text: string;
  subfeatures?: string[];
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  subtitle: string;
  description: string;
  color: 'zinc' | 'cyan' | 'orange';
  features: PricingFeature[];
  focus: string;
  highlight?: boolean;
}