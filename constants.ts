import { PricingTier } from './types';

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'foundation',
    name: 'FOUNDATION',
    subtitle: 'TIER 1',
    price: '$950',
    description: 'Best for low-competition markets & new visibility builds',
    color: 'zinc',
    focus: 'Accuracy, structure, and baseline AI + search visibility',
    features: [
      { text: 'Local keyword & intent targeting (10 terms)' },
      { 
        text: 'On-page optimization for:',
        subfeatures: ['Homepage', 'Primary service pages']
      },
      { text: 'Google Business Profile optimization + monthly health check' },
      { text: 'Citation cleanup & standardization (20 core directories)' },
      { text: 'Monthly blog post on your website (1 post/month)' },
      { 
        text: 'Third-party blog publishing:',
        subfeatures: ['Medium, LinkedIn, or Hashnode (1 post/month)']
      },
      { 
        text: 'Foundational backlinks:',
        subfeatures: ['2 contextual backlink insertions into existing articles']
      },
      { text: 'Basic reputation and brand mention monitoring' },
      { text: 'Quarterly performance summary' },
      { text: 'Editorial media placements: Available as an optional add-on' },
    ]
  },
  {
    id: 'authority',
    name: 'AUTHORITY',
    subtitle: 'TIER 2',
    price: '$1,850',
    description: 'For competitive local markets that need to win trust',
    color: 'cyan',
    highlight: true,
    focus: 'Authority building, trust expansion, competitive positioning',
    features: [
      { text: 'Everything in Tier 1, plus:' },
      { text: 'Expanded keyword & intent coverage (15 terms)' },
      { 
        text: 'Full website optimization:',
        subfeatures: ['Homepage', 'All main service pages', 'Location pages']
      },
      { text: 'Monthly Google Business Profile optimization sprint' },
      { text: 'Citation expansion & monitoring (20 core directories)' },
      { text: 'Blog publishing on your website (2 posts/month)' },
      { 
        text: 'Third-party blog publishing:',
        subfeatures: ['Medium, LinkedIn, Hashnode (2 posts/month)']
      },
      { 
        text: 'Backlink acquisition:',
        subfeatures: ['4 contextual backlink insertions into existing articles']
      },
      { 
        text: 'Editorial media placement:',
        subfeatures: ['2 authority publisher articles per month with backlink']
      },
      { text: 'Brand entity reinforcement signals' },
      { text: 'Quarterly competitive visibility review' },
    ]
  },
  {
    id: 'dominance',
    name: 'DOMINANCE',
    subtitle: 'TIER 3',
    price: '$3,200',
    description: 'For saturated industries & aggressive markets',
    color: 'orange',
    focus: 'Market dominance, AI authority, long-term defensibility',
    features: [
      { text: 'Everything in Tier 2, plus:' },
      { text: 'Advanced keyword & market dominance targeting (Unlimited terms)' },
      { text: 'Continuous on-page optimization across all priority pages' },
      { text: 'Weekly Google Business Profile optimization & monitoring' },
      { text: 'Citation defense + expansion (20 core directories)' },
      { text: 'Website blog publishing (2 posts/month)' },
      { 
        text: 'Third-party blog publishing:',
        subfeatures: ['Medium, LinkedIn, Hashnode (3 posts/month)']
      },
      { 
        text: 'Backlink acquisition:',
        subfeatures: ['6 contextual backlink insertions into existing high-authority articles']
      },
      { 
        text: 'Editorial media placements:',
        subfeatures: ['3 authority media features per month with backlinks']
      },
      { text: 'Ongoing entity & reputation signal monitoring' },
      { text: 'AI visibility & competitive intelligence tracking' },
      { text: 'Executive-level quarterly performance briefing' },
    ]
  }
];

export const FOOTER_NOTE = "Important Client Note: All backlinks and editorial placements are subject to third-party publisher guidelines and acceptance. Rankings, traffic, and AI references are not guaranteed. These services establish authority, trust signals, and eligibility for modern discovery systems.";