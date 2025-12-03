import { Scale } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const metadata = {
  title: "Lawyer Dashboard - JuriLink",
  description: "Manage your appointments and availability",
};

export default async function DoctorDashboardLayout({ children }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader icon={<Scale />} title="Lawyer Dashboard" />

      {children}
    </div>
  );
}
