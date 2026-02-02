
import React from 'react';
import { 
  Users, 
  Target, 
  BarChart3, 
  MessageSquare, 
  Layers, 
  Zap, 
  Globe, 
  RefreshCw, 
  CheckCircle2,
  Linkedin,
  Instagram,
  Twitter,
  Mail
} from 'lucide-react';

export const COLORS = {
  lime: '#e3ff8f',
  dark: '#22242a',
  softGray: '#f7f8f8',
  border: '#e5e6e6',
  textSecondary: '#415762'
};

export const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' }
];

export const TRUST_LOGOS = [
  'bluebird', 'Galaxy', 'berry', 'Chameleon', 'SHIP4450'
];

export const FAQS = [
  { 
    question: "Can I integrate Remote with my existing systems?",
    answer: "Yes, Remote offers seamless integration with most major HRIS and applicant tracking systems via our robust API and pre-built connectors."
  },
  { 
    question: "How secure is my company's data?",
    answer: "Security is our top priority. We use enterprise-grade encryption and comply with GDPR, SOC2, and other global security standards."
  },
  { 
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 dedicated support for our enterprise clients, and comprehensive documentation and chat support for all users."
  },
  { 
    question: "Can Remote help with performance management?",
    answer: "Absolutely. Our platform includes tools for continuous feedback, goal tracking, and performance reviews."
  },
  { 
    question: "Is Remote right for my business?",
    answer: "Remote is designed for teams of all sizes, from fast-growing startups to global enterprises looking to streamline their hiring."
  }
];
