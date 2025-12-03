import {
  Calendar,
  Video,
  CreditCard,
  User,
  FileText,
  ShieldCheck,
} from "lucide-react";

// JSON data for features
export const features = [
  {
    icon: <User className="h-6 w-6 text-emerald-400" />,
    title: "Create Your Profile",
    description:
      "Sign up and complete your profile to get personalized legal-service recommendations and services.",
  },
  {
    icon: <Calendar className="h-6 w-6 text-emerald-400" />,
    title: "Book Appointments",
    description:
      "Browse lawyers profiles, check availability, and book appointments that fit your schedule.",
  },
  {
    icon: <Video className="h-6 w-6 text-emerald-400" />,
    title: "Video Consultation",
    description:
      "Connect with lawyers through secure, high-quality video consultations from the comfort of your home.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-emerald-400" />,
    title: "Consultation Credits",
    description:
      "Purchase credit packages that fit your legal needs with our simple subscription model.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
    title: "Verified Lawyers",
    description:
      "All legal professionals are carefully vetted and verified to ensure quality service.",
  },
  {
    icon: <FileText className="h-6 w-6 text-emerald-400" />,
    title: "Legal Documentation",
    description:
      "Access and manage your appointment history, lawyer's notes, and legal recommendations.",
  },
];

// JSON data for testimonials
export const testimonials = [
{
  initials: "SP",
  name: "Sudha P",
  role: "Client",
  quote:
    "The video consultation feature saved me so much time. I was able to get legal advice without taking time off work or traveling to an office.",
},
{
  initials: "MR",
  name: "Mr. RamaChandra ",
  role: "Attorney",
  quote:
    "This platform has revolutionized my practice. I can now reach more clients and provide timely legal counsel without the constraints of a physical office.",
},
{
  initials: "JT",
  name: "Janardhana T",
  role: "Client",
  quote:
    "The credit system is so convenient. I purchased a package for my family, and we've been able to consult with legal experts whenever needed.",
},

];

// JSON data for credit system benefits
export const creditBenefits = [
  "Each consultation requires <strong class='text-emerald-400'>2 credits</strong> regardless of duration",
  "Credits <strong class='text-emerald-400'>never expire</strong> - use them whenever you need",
  "Monthly subscriptions give you <strong class='text-emerald-400'>fresh credits every month</strong>",
  "Cancel or change your subscription <strong class='text-emerald-400'>anytime</strong> without penalties",
];
