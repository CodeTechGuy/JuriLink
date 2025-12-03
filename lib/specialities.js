import {
  Briefcase,      // Corporate Law
  Gavel,          // Criminal Law, Healthcare Law
  Scale,          // Environmental Law
  FileText,       // Intellectual Property
  UserCheck,      // Labor Law
  Users,          // Family Law
  Lock,           // Privacy & Data Protection
  Shield,         // Personal Injury
  Search,         // Real Estate Law
  Clipboard,      // Tax Law
  Code,           // Bankruptcy Law
  Hourglass,      // Immigration Law
  File,           // s & Estates
  Paperclip,      // Contracts (if relevant for certain law)
  Settings,       // Legal Advisory (for broad legal consultation)
} from "lucide-react";

export const SPECIALTIES = [
  {
    name: "Corporate Law",
    icon: <Briefcase className="h-5 w-5" />, // Relevant to business law
  },
  {
    name: "Criminal Law",
    icon: <Gavel className="h-5 w-5" />, // Gavel is perfect for criminal justice
  },
  {
    name: "Family Law",
    icon: <Users className="h-5 w-5" />, // Users icon for family-related issues
  },
  {
    name: "Intellectual Property",
    icon: <FileText className="h-5 w-5" />, // IP deals with documents like patents
  },
  {
    name: "Labor Law",
    icon: <UserCheck className="h-5 w-5" />, // Relevant to employment and worker rights
  },
  {
    name: "Personal Injury",
    icon: <Shield className="h-5 w-5" />, // Shield symbolizing protection or compensation
  },
  {
    name: "Privacy & Data Protection",
    icon: <Lock className="h-5 w-5" />, // Lock symbolizes privacy and security
  },
  {
    name: "Real Estate Law",
    icon: <Search className="h-5 w-5" />, // Real estate transactions often involve searches
  },
  {
    name: "Tax Law",
    icon: <Clipboard className="h-5 w-5" />, // Clipboard symbolizes tax filings and documents
  },
  {
    name: "Bankruptcy Law",
    icon: <Code className="h-5 w-5" />, // Code represents financial regulations and bankruptcy codes
  },
  {
    name: "Immigration Law",
    icon: <Hourglass className="h-5 w-5" />, // Immigration processes often involve waiting
  },
  {
    name: "Wills & Estates",
    icon: <File className="h-5 w-5" />, // Legal documents like wills and estate plans
  },
  {
    name: "Environmental Law",
    icon: <Scale className="h-5 w-5" />, // Scale symbolizing environmental justice and balance
  },
  {
    name: "Healthcare Law",
    icon: <Gavel className="h-5 w-5" />, // Gavel represents legal regulation of healthcare
  },
  // {
  //   name: "Other",
  //   icon: <Microscope className="h-5 w-5" />, // Microscope for niche, less common specialties
  // },
  {
    name: "Contracts",
    icon: <Paperclip className="h-5 w-5" />, // Paperclip symbolizes contracts, agreements, etc.
  },
  {
    name: "Legal Advisory",
    icon: <Settings className="h-5 w-5" />, // Settings for broad legal advice
  },
];

